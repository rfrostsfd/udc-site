import {defineField, defineType} from 'sanity'

/**
 * Reusable image type with a hotspot and an alt-text field. Used for every
 * editorial image on the site so the client sees one consistent, simple
 * "upload image + describe it" control everywhere.
 */
export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description:
        'Describe the image for visitors using screen readers. Leave blank only if the image is purely decorative.',
    }),
  ],
})
