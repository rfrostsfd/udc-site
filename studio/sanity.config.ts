import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

/**
 * Singleton document types: exactly one of each should ever exist. They are
 * pinned in the Studio structure to a fixed document id, hidden from the
 * "create new" menu, and stripped of create/delete/duplicate actions so an
 * editor can only edit the one document.
 */
const singletonTypes = new Set(['siteSettings', 'landingPage'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Universal Design Coalition',

  projectId: 'sc1wi60t',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Pinned singletons at the top.
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings'),
              ),
            S.listItem()
              .title('Landing Page')
              .id('landingPage')
              .child(
                S.document().schemaType('landingPage').documentId('landingPage'),
              ),

            S.divider(),

            // Everything else (Resources, Sponsors, Events) as normal lists,
            // minus the singletons handled above.
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() as string),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Keep singletons out of the global "create new document" menu.
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singletons, allow only edit-style actions — no create/delete/duplicate.
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(
            ({action}) => action && singletonActions.has(action),
          )
        : input,
  },
})
