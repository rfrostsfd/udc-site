import {defineField, defineType} from 'sanity'

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),

    defineField({
      name: 'level',
      title: 'Sponsor Level',
      type: 'string',
      options: {
        list: [
          {title: 'Presenting', value: 'presenting'},
          {title: 'Supporting', value: 'supporting'},
          {title: 'Community Partner', value: 'community-partner'},
        ],
      },
    }),

    defineField({
      name: 'description',
      title: 'Optional Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Optional. Use this if sponsor recognition should expire automatically.',
    }),

    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
      level: 'level',
      active: 'active',
    },
    prepare({title, media, level, active}) {
      return {
        title,
        media,
        subtitle: `${level || 'Sponsor'}${active === false ? ' • Inactive' : ''}`,
      }
    },
  },
})