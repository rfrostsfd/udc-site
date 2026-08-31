import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'url',
      title: 'Registration / Event URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),

    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      active: 'active',
    },
    prepare({title, startDate, active}) {
      return {
        title,
        subtitle: `${startDate ? new Date(startDate).toLocaleDateString() : 'No date'}${active === false ? ' • Inactive' : ''}`,
      }
    },
  },
})