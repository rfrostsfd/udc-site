import {defineField, defineType} from 'sanity'

/**
 * Members — people, businesses and organizations listed on the site for the
 * year they hold a membership. The internal type name stays `sponsor` (these
 * documents began as sponsors, and Sanity can't change a document's type in
 * place); editors and visitors only ever see "Members".
 */
export const sponsor = defineType({
  name: 'sponsor',
  title: 'Members',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Member Name',
      type: 'string',
      description: 'A person, business or organization.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Optional. Without a logo, the name is shown instead.',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: 'Optional. The name or logo links here.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
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
      title: 'Member Since',
      type: 'date',
    }),

    defineField({
      name: 'endDate',
      title: 'Membership Ends',
      type: 'date',
      description:
        'Use the "valid until" date from Zeffy. The member is removed from the site after this date.',
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
      endDate: 'endDate',
      active: 'active',
    },
    prepare({title, media, endDate, active}) {
      return {
        title,
        media,
        subtitle: `${endDate ? `Member until ${endDate}` : 'Member'}${
          active === false ? ' • Inactive' : ''
        }`,
      }
    },
  },
})
