import {defineField, defineType} from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resources',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Universal Design', value: 'universal-design'},
          {title: 'Fall Prevention', value: 'fall-prevention'},
          {title: 'Home Modification', value: 'home-modification'},
          {title: 'Education', value: 'education'},
          {title: 'Community', value: 'community'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Resource',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
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
      title: 'title',
      category: 'category',
      active: 'active',
    },
    prepare({title, category, active}) {
      return {
        title,
        subtitle: `${category || 'Uncategorized'}${active === false ? ' • Inactive' : ''}`,
      }
    },
  },
})