import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons/Tag'

/**
 * Resource Category
 * Editors manage these themselves. Each Resource references one category,
 * so new categories can be added straight from the Resource's Category field
 * ("+ Create new") or from the "Resource Categories" list in the Studio.
 */
export const resourceCategory = defineType({
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category name',
      type: 'string',
      description: 'Shown in the Category dropdown and on the Resources page.',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A short ID made from the name. Click "Generate" after typing the name.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description:
        'Optional. Lower numbers are listed first when this list is sorted by "Sort order".',
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'title', direction: 'asc'},
      ],
    },
    {title: 'Name A–Z', name: 'titleAsc', by: [{field: 'title', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title'},
  },
})
