import {defineField, defineType} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',

  fields: [
    defineField({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
        name: 'eyebrow',
        title: 'Eyebrow',
        type: 'string',
        description: 'Short label above the main heading.',
        }),

        defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: 'subheading',
        title: 'Subheading',
        type: 'text',
        rows: 3,
        }),

        defineField({
        name: 'image',
        title: 'Hero Image',
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
                'Describe the image for screen readers. Leave blank only if the image is purely decorative.',
            }),
        ],
        }),

        defineField({
        name: 'primaryCta',
        title: 'Primary CTA',
        type: 'object',
        fields: [
            defineField({
            name: 'text',
            title: 'Button Text',
            type: 'string',
            }),
            defineField({
            name: 'link',
            title: 'Button Link',
            type: 'string',
            }),
        ],
        }),

        defineField({
        name: 'secondaryCta',
        title: 'Secondary CTA',
        type: 'object',
        fields: [
            defineField({
            name: 'text',
            title: 'Button Text',
            type: 'string',
            }),
            defineField({
            name: 'link',
            title: 'Button Link',
            type: 'string',
            }),
        ],
        }),
    ],
    }),

    defineField({
      name: 'whatIsUniversalDesign',
      title: 'What Is Universal Design?',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 6,
        }),
      ],
    }),

    defineField({
      name: 'whyItMatters',
      title: 'Why It Matters',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 6,
        }),
      ],
    }),

    defineField({
      name: 'whoItHelps',
      title: 'Who It Helps',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 5,
        }),
      ],
    }),

    defineField({
      name: 'principles',
      title: 'Principles / Benefits',
      type: 'object',
      description: 'The core benefits of Universal Design, shown as a set of cards.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'items',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Benefit',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Short Description',
                  type: 'string',
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'description'},
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'inPractice',
      title: 'Universal Design in Practice',
      type: 'object',
      description:
        'Concrete, real-life examples grouped by space (e.g. Kitchen, Bath, Whole House).',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'spaces',
          title: 'Spaces',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Space Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
              preview: {
                select: {title: 'name', features: 'features'},
                prepare({title, features}) {
                  const count = Array.isArray(features) ? features.length : 0
                  return {title, subtitle: `${count} feature${count === 1 ? '' : 's'}`}
                },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'fallPrevention',
      title: 'Fall Prevention',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 5,
        }),
      ],
    }),

    defineField({
      name: 'resourcesIntro',
      title: 'Resources Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'sponsorsIntro',
      title: 'Sponsors Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Intro',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'contactCta',
      title: 'Closing / Contact CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        }),
      ],
    }),
  ],

  // Singleton document — show a stable, readable title in the Studio instead of
  // a dump of the hero object's fields.
  preview: {
    select: {
      heading: 'hero.heading',
    },
    prepare({heading}) {
      return {
        title: 'Landing Page',
        subtitle: heading || 'Homepage content',
      }
    },
  },
})