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
})