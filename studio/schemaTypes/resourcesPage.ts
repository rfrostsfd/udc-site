import {defineField, defineType} from 'sanity'

/**
 * Resources Page — the words around the full resources list at /resources.
 * The resources themselves are managed in the Resources list; this singleton
 * only holds the page's heading, intro, and search description.
 */
export const resourcesPage = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      description: 'Shown under the heading, above the list of resources.',
    }),

    defineField({
      name: 'seoDescription',
      title: 'Search Description',
      type: 'text',
      rows: 3,
      description:
        'One or two sentences shown in search results and link previews. Leave blank to use the intro.',
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Resources Page'}
    },
  },
})
