import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      description: 'Example: UDC',
    }),

    defineField({
      name: 'logo',
      title: 'Header Logo',
      type: 'image',
      description:
        'Optional. Upload a logo to replace the text logo in the header. A PNG or SVG with a transparent background works best. If left empty, the header shows the monogram and organization name.',
      options: {hotspot: false},
    }),

    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Mailing Address',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
      ],
    }),

    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Default SEO Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Default Meta Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'shareImage',
          title: 'Default Social Share Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
})