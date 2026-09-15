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
        name: 'headingAccent',
        title: 'Heading Accent',
        type: 'string',
        description:
            'Optional. The final words of the headline, shown in green italic (e.g. "real life."). Leave blank for a single-color headline.',
        }),

        defineField({
        name: 'subheading',
        title: 'Subheading',
        type: 'text',
        rows: 3,
        }),

        defineField({
        name: 'badge',
        title: 'Image Badge',
        type: 'string',
        description:
            'Optional short phrase shown in a green circle over the main image (e.g. "Better for everyone. Today and tomorrow.").',
        }),

        defineField({
        name: 'image',
        title: 'Hero Image (main)',
        type: 'imageWithAlt',
        description:
            'The large image beside the headline. Choose an everyday, welcoming scene — a home, a public space, people of different ages moving through it.',
        }),

        defineField({
        name: 'supportingImages',
        title: 'Hero Images (supporting)',
        type: 'array',
        description:
            'Optional. Up to three smaller images shown in a collage beneath the main image (e.g. a kitchen detail, a bathroom, people on a path).',
        of: [{type: 'imageWithAlt'}],
        validation: (Rule) => Rule.max(3),
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
        defineField({
          name: 'image',
          title: 'Image (optional)',
          type: 'imageWithAlt',
          description:
            'Optional. Shown beside the text. A clear, everyday scene that shows good design in a real space.',
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
        defineField({
          name: 'image',
          title: 'Image (optional)',
          type: 'imageWithAlt',
          description:
            'Optional. Shown beside the text. A warm scene of people living comfortably in a well-designed home or community.',
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
        defineField({
          name: 'image',
          title: 'Who It Helps Image',
          type: 'imageWithAlt',
          description:
            'A warm, everyday scene showing a range of people — children, parents, people carrying things, older adults. Shown beside the text.',
        }),
      ],
    }),

    defineField({
      name: 'audience',
      title: 'Designed For Everyone',
      type: 'object',
      description:
        'A short band showing the range of people Universal Design serves. Communicates "for everyone", not separate customer types.',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro (optional)',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Groups',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'iconKey',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Stroller (new parents)', value: 'stroller'},
                      {title: 'Briefcase (professionals)', value: 'briefcase'},
                      {title: 'Older adult', value: 'elder'},
                      {title: 'Recovering from injury', value: 'injury'},
                      {title: 'Accessibility', value: 'accessibility'},
                      {title: 'Child / teen', value: 'child'},
                      {title: 'Community', value: 'community'},
                    ],
                  },
                }),
              ],
              preview: {
                select: {title: 'label', subtitle: 'iconKey'},
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'principles',
      title: 'Principles / Benefits',
      type: 'object',
      description: 'The core benefits of Universal Design, shown as a light editorial list.',
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
                defineField({
                  name: 'iconKey',
                  title: 'Icon (optional)',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Home', value: 'home'},
                      {title: 'Shield', value: 'shield'},
                      {title: 'Accessibility', value: 'accessibility'},
                      {title: 'Community', value: 'community'},
                      {title: 'Older adult', value: 'elder'},
                    ],
                  },
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
                  name: 'iconKey',
                  title: 'Icon (optional)',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Kitchen', value: 'kitchen'},
                      {title: 'Bath', value: 'bath'},
                      {title: 'Whole home', value: 'home'},
                    ],
                  },
                }),
                defineField({
                  name: 'description',
                  title: 'Short Description (optional)',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'image',
                  title: 'Photo',
                  type: 'imageWithAlt',
                  description:
                    'A photo of this space (e.g. an accessible kitchen). Shown at the top of the card.',
                }),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'link',
                  title: 'Link (optional)',
                  type: 'object',
                  fields: [
                    defineField({name: 'text', title: 'Link Text', type: 'string'}),
                    defineField({name: 'link', title: 'Link URL', type: 'string'}),
                  ],
                }),
              ],
              preview: {
                select: {title: 'name', media: 'image', features: 'features'},
                prepare({title, media, features}) {
                  const count = Array.isArray(features) ? features.length : 0
                  return {title, media, subtitle: `${count} feature${count === 1 ? '' : 's'}`}
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
      description:
        'Shown as a three-panel feature: a short statement (with optional image), the main heading + body, and a short reassuring line.',
      fields: [
        defineField({
          name: 'statement',
          title: 'Statement (optional)',
          type: 'string',
          description:
            'A short, warm statement for the green panel (e.g. "Small choices today create freedom tomorrow.").',
        }),
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
        defineField({
          name: 'reassurance',
          title: 'Reassurance (optional)',
          type: 'string',
          description:
            'A short reassuring line for the sage panel (e.g. "Safer spaces. Stronger communities. A better quality of life for all.").',
        }),
        defineField({
          name: 'link',
          title: 'Learn More Link (optional)',
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Link Text', type: 'string'}),
            defineField({name: 'link', title: 'Link URL', type: 'string'}),
          ],
        }),
        defineField({
          name: 'image',
          title: 'Fall Prevention Image (optional)',
          type: 'imageWithAlt',
          description:
            'Optional. A calm, everyday scene — good lighting, a clear hallway, a step-free entry. Shown in the green panel.',
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
        defineField({
          name: 'image',
          title: 'Image (optional)',
          type: 'imageWithAlt',
          description:
            'Optional image shown beside the closing message (e.g. a welcoming path or community space).',
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