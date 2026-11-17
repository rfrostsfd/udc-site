/**
 * One-time migration: turn the old fixed Category list on Resources into
 * editable Resource Category documents.
 *
 * 1. Creates one Resource Category per old list value (skipped if it exists).
 * 2. Replaces each Resource's text category (e.g. "fall-prevention") with a
 *    reference to the matching Resource Category.
 *
 * Safe to run more than once: categories use fixed ids, and only resources
 * whose category is still plain text are patched.
 *
 * Preview (no writes):  npx sanity exec migrations/resourceCategories.ts --with-user-token
 * Apply:                npx sanity exec migrations/resourceCategories.ts --with-user-token -- --apply
 */
import {getCliClient} from 'sanity/cli'

// Provided by Node when run through `sanity exec`; the Studio has no Node types.
declare const process: {argv: string[]; exit(code: number): never}

const client = getCliClient({apiVersion: '2026-08-30'})
const apply = process.argv.includes('--apply')

// The old fixed list, in its original order.
const OLD_CATEGORIES = [
  {value: 'universal-design', title: 'Universal Design'},
  {value: 'fall-prevention', title: 'Fall Prevention'},
  {value: 'home-modification', title: 'Home Modification'},
  {value: 'education', title: 'Education'},
  {value: 'community', title: 'Community'},
  {value: 'other', title: 'Other'},
]

const categoryId = (value: string) => `resourceCategory-${value}`

async function run() {
  // Include drafts so an unpublished edit isn't left pointing at plain text.
  const resources: {_id: string; title?: string; category: string}[] = await client.fetch(
    `*[_type == "resource" && defined(category) && category == string(category)]{_id, title, category}`,
  )

  const known = new Set(OLD_CATEGORIES.map((c) => c.value))
  const unknown = resources.filter((r) => !known.has(r.category))
  if (unknown.length) {
    throw new Error(
      `Unrecognized category values, nothing changed: ${unknown
        .map((r) => `${r._id} → "${r.category}"`)
        .join(', ')}`,
    )
  }

  const tx = client.transaction()
  OLD_CATEGORIES.forEach((c, i) =>
    tx.createIfNotExists({
      _id: categoryId(c.value),
      _type: 'resourceCategory',
      title: c.title,
      slug: {_type: 'slug', current: c.value},
      order: (i + 1) * 10,
    }),
  )
  for (const r of resources) {
    tx.patch(r._id, (p) =>
      p.set({category: {_type: 'reference', _ref: categoryId(r.category)}}),
    )
  }

  console.log(`${OLD_CATEGORIES.length} categories to create if missing:`)
  OLD_CATEGORIES.forEach((c) => console.log(`  ${categoryId(c.value)}  "${c.title}"`))
  console.log(`${resources.length} resources to point at a category:`)
  resources.forEach((r) => console.log(`  ${r._id}  "${r.title}" → ${categoryId(r.category)}`))

  if (!apply) {
    console.log('\nPreview only. Re-run with "-- --apply" to write these changes.')
    return
  }
  const result = await tx.commit()
  console.log(`\nApplied in transaction ${result.transactionId}.`)
}

run().catch((err) => {
  console.error(err.message ?? err)
  process.exit(1)
})
