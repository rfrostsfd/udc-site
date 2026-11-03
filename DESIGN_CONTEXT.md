# Universal Design Coalition Website
## Design & Development Context for Claude Code

This document defines the product, design, content, CMS, and implementation context for the Universal Design Coalition website. Use it as the source of truth when making design or development decisions in this repository.

---

# 1. Project Purpose

The Universal Design Coalition website should be a **small, modern, durable, low-maintenance educational website** that explains Universal Design clearly, helps visitors find useful resources, supports fall-prevention collaboration, recognizes sponsors, and gives the organization a credible public presence.

The site should not feel like a traditional nonprofit website full of nested pages, dated news posts, or administrative overhead.

The goal is to create something that:

- is easy for visitors to understand quickly
- is easy for the client to update
- is difficult for stale content to linger unnoticed
- does not require ongoing WordPress/plugin/server maintenance
- can grow later without needing to be rebuilt from scratch

The public-facing site should feel simple. The underlying architecture should also stay simple.

---

# 2. Core Product Philosophy

There is an intentional connection between the organization’s mission and the website architecture.

Universal Design is about anticipating how people will use something over time rather than continuously retrofitting it later.

The website should follow that same idea.

Build the site so that:

- common content changes do not require a developer
- the public site remains stable even when the CMS changes
- time-sensitive content can expire automatically
- new content types can be added later without rebuilding the foundation
- editors are not asked to manage layout, components, plugins, or technical settings

The site should be **designed for its full useful life**, not just launch day.

---

# 3. Technical Architecture

The architecture is intentionally lightweight.

```text
Developer
   │
   ▼
VS Code
   │
   ▼
GitHub
   │
   ▼
Cloudflare Pages
   │
   ▼
Astro static site
   │
   ▼
Visitors
```

Content publishing:

```text
Client / Editor
      │
      ▼
Sanity Studio
      │
      ▼
Sanity Content Lake
      │
   Publish
      │
      ▼
Sanity Webhook
      │
      ▼
Cloudflare Deploy Hook
      │
      ▼
Astro rebuild
      │
      ▼
Updated website
```

## Stack

- **Astro** — public website
- **Sanity** — structured content management
- **GitHub** — source control
- **Cloudflare Pages** — static hosting and deployment
- **Sanity hosted Studio** — editor interface
- **GoDaddy** — registrar only, if the current domain remains there

## Repository structure

Expected structure:

```text
repo/
├── src/
├── public/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── studio/
    ├── sanity.config.ts
    ├── sanity.cli.ts
    └── schemaTypes/
```

Do not introduce a server runtime unless the site genuinely needs one.

Do not introduce React or another framework merely for convenience if Astro components are sufficient.

Prefer static output.

---

# 4. Current Sanity Content Model

The site is being structured around these primary content types:

```text
Site Settings
Landing Page
Resources
Sponsors
Events
```

## Site Settings

Global organization-level information only.

Expected fields include:

- Organization Name
- Short Name
- Email
- Phone
- Mailing Address
- Social Links
- Default SEO Title
- Default Meta Description
- Default Social Share Image

Do not place page-specific copy here.

## Landing Page

The primary storytelling document.

Expected sections include:

```text
Hero
What Is Universal Design?
Why It Matters
Who It Helps
Fall Prevention
Resources Intro
Sponsors Intro
Closing / Contact CTA
```

The client should be able to open **one Landing Page document** and edit the core narrative of the site.

Do not fragment the landing page into dozens of separate Sanity documents unless there is a clear editorial reason.

## Resources

Resources are reusable documents.

Expected fields include:

- Title
- Description
- Category
- URL
- Featured
- Active
- Sort Order

Potential categories:

- Universal Design
- Fall Prevention
- Home Modification
- Education
- Community
- Other

## Sponsors

Sponsors are reusable documents.

Expected fields include:

- Organization Name
- Logo
- Website URL
- Sponsor Level
- Optional Description
- Active
- Start Date
- End Date
- Sort Order

Sponsor recognition should feel like **partnership acknowledgment**, not ad inventory.

## Events

Events are reusable documents.

Expected fields include:

- Event Name
- Start Date
- End Date
- Description
- Location
- Registration / Event URL
- Active

The implementation should prevent old events from living indefinitely on the active site.

---

# 5. Editorial Simplicity

The client has limited capacity to maintain the site.

This is a major product requirement.

The CMS must not become a second version of WordPress.

## The editor should manage:

- words
- images
- resources
- sponsors
- events
- contact information
- a few obvious content toggles

## The editor should not manage:

- page templates
- component layouts
- CSS classes
- breakpoints
- plugin settings
- animation settings
- menus unless necessary
- arbitrary spacing
- technical SEO configuration beyond simple fields
- code
- Cloudflare
- GitHub
- build settings

If a content field requires a technical explanation to use, reconsider whether the field should exist.

---

# 6. Design Direction

The site should feel:

- warm
- credible
- human
- educational
- calm
- modern
- practical
- accessible
- established without feeling institutional
- optimistic without feeling playful

Avoid a sterile healthcare feel.

Avoid a construction-industry aesthetic.

Avoid an aging-only or disability-only visual identity.

Avoid overly trendy design patterns that will date quickly.

The design should support the organization’s idea that Universal Design benefits people throughout life.

---

# 7. Overarching Visual Theme

The strongest visual concept is:

> **Design for life, not just for today.**

Universal Design should be presented as a broader way of thinking about spaces, not simply a collection of accessibility modifications.

The site should visually suggest:

- longevity
- flexibility
- ease
- movement
- independence
- everyday life
- environments that adapt naturally to people

Potential imagery can include:

- families
- children
- parents with strollers
- people carrying groceries
- cyclists
- people using walkers
- wheelchair users
- older adults
- multi-generational households
- kitchens, entries, bathrooms, paths, and public spaces that quietly demonstrate good design

The imagery should communicate **inclusion across life stages**, not “special accommodations.”

---

# 8. Homepage / Landing Page Experience

The landing page should tell a clear story from top to bottom.

Recommended narrative:

```text
1. Hero
2. What is Universal Design?
3. Why it matters
4. Who benefits
5. Practical examples / design principles
6. Fall prevention
7. Resources
8. Sponsors / community partners
9. Closing CTA / contact
```

The page should answer:

- What is this?
- Why should I care?
- Who is it for?
- What does it look like in real life?
- How can I learn more?
- Who is involved?
- What should I do next?

Do not assume visitors already understand the phrase “Universal Design.”

---

# 9. Hero Guidance

The hero should communicate the benefit before the technical definition.

Strong direction:

```text
Design for life.
Not just for today.
```

Supporting copy should explain that Universal Design creates spaces that work across ages, abilities, and changing life circumstances.

Avoid opening with a dense technical definition.

The hero should feel spacious and confident.

Potential structure:

```text
Eyebrow
Primary headline
Short supporting paragraph
Primary CTA
Secondary CTA
Relevant lifestyle / built-environment image
```

Keep CTA count low.

---

# 10. Typography

Typography should be:

- highly readable
- warm
- contemporary
- not overly corporate
- not overly editorial
- accessible at normal browser zoom

Use strong hierarchy rather than excessive font variety.

Recommended approach:

- one primary sans-serif family
- optionally one subtle complementary serif for editorial emphasis
- avoid thin font weights
- avoid tiny uppercase text
- maintain generous line height
- keep paragraph width controlled

Body copy should generally remain around 60–75 characters per line.

---

# 11. Color Direction

Use a restrained palette.

Potential visual direction:

- warm off-white or soft neutral backgrounds
- grounded natural greens
- muted blue/green tones
- warm clay / terracotta accent if needed
- dark charcoal rather than pure black for primary text

The palette should feel connected to:

- homes
- community
- nature
- built environments
- long-term livability

Avoid:

- aggressive medical blue
- neon accessibility colors
- excessively earthy “eco brand” styling
- high-saturation startup gradients

Maintain WCAG contrast.

---

# 12. Layout Principles

Use:

- generous whitespace
- strong vertical rhythm
- large section spacing
- clear content grouping
- limited visual clutter
- simple grids
- deliberate image placement
- accessible line lengths

Prefer content sections that feel complete and intentional rather than many small cards.

Cards are appropriate for:

- resources
- examples
- sponsor tiers
- event listings

Do not turn every section into a card grid.

---

# 13. Accessibility Expectations

Accessibility is especially important because of the organization’s mission.

Treat accessibility as a baseline requirement.

At minimum:

- semantic HTML
- correct heading order
- keyboard navigation
- visible focus states
- accessible color contrast
- sufficiently large tap targets
- meaningful image alt text
- decorative images marked appropriately
- forms labeled correctly
- no critical information communicated by color alone
- responsive layouts at browser zoom
- reduced-motion support where motion exists
- no autoplaying video
- no unnecessarily complex navigation

Aim for WCAG 2.2 AA.

Accessibility should also influence visual simplicity.

---

# 14. Motion & Interaction

Use motion sparingly.

Good:

- subtle entrance transitions
- gentle hover feedback
- small navigation transitions
- restrained image movement if appropriate

Avoid:

- scroll-jacking
- parallax-heavy sections
- large animated backgrounds
- excessive reveal animations
- marquee text
- interactions that hide important information

The site should feel calm and durable.

---

# 15. Imagery

Photography should feel real and contemporary.

Prioritize scenes that communicate:

- everyday life
- multi-generational use
- movement through spaces
- independent living
- inclusive environments
- normal activities made easier by thoughtful design

Avoid generic stock photography where everyone is looking directly at the camera.

Avoid overusing obvious “accessibility symbols.”

Where architectural details are shown, favor subtle examples:

- wide paths
- flush entries
- lever handles
- reachable storage
- open circulation
- usable bathrooms
- adaptable kitchens
- clear sight lines
- safe lighting
- low-threshold transitions

---

# 16. Content Tone

Copy should be:

- clear
- plainspoken
- educational
- confident
- inviting
- practical
- non-technical unless technical language is necessary

Avoid nonprofit jargon.

Avoid making Universal Design sound like a specialized service only for people with disabilities.

Good framing:

> Universal Design creates spaces that work better for more people, across more stages of life.

Avoid framing like:

> Accessibility modifications for seniors and disabled individuals.

Fall prevention should remain an important part of the organization’s work without becoming the entire brand.

---

# 17. Content Freshness

The existing website accumulated old content.

The new architecture should actively prevent that.

Use structured dates and active states.

Examples:

## Events

Only show future/current events:

```groq
*[
  _type == "event" &&
  active == true &&
  startDate >= now()
]
```

## Sponsors

If an end date exists, hide expired sponsors automatically.

Conceptually:

```text
active == true
AND
(endDate is empty OR endDate >= today)
```

## Resources

Resources can remain visible while `active == true`.

If content can become stale, design the schema so the system can handle that automatically.

---

# 18. Sponsor Presentation

Sponsors should be presented as supporters or community partners.

Do not make the section look like an ad marketplace.

Prefer language such as:

- Our Sponsors
- Community Partners
- Supporting Organizations
- Thank You to Our Partners

Logo treatment should be visually consistent.

Avoid:

- giant mismatched logos
- rotating ad banners
- flashing sponsor placements
- overly promotional sponsor copy

Sponsor levels can influence size or placement, but the section should remain tasteful.

---

# 19. Resources Experience

Resources should be easy to scan.

Potential UI:

```text
Resource title
Short description
Category
External link
```

Consider filtering only if there are enough resources to justify it.

Do not add search/filter complexity prematurely.

If there are fewer than roughly 12–15 resources, a well-organized list or grouped grid may be better.

---

# 20. Component Strategy

Prefer small, reusable Astro components.

Possible component structure:

```text
src/components/
├── Header.astro
├── Footer.astro
├── Hero.astro
├── SectionIntro.astro
├── ContentSection.astro
├── ResourceCard.astro
├── SponsorLogo.astro
├── EventCard.astro
├── CTA.astro
└── Container.astro
```

Do not abstract prematurely.

A component should exist because:

- it repeats
- it has clear responsibility
- it improves maintainability
- it supports consistent design

Do not build a generic “page builder” component system.

---

# 21. CSS Strategy

Keep styling predictable.

Preferred options:

- Astro scoped component CSS
- global design tokens
- CSS custom properties

Avoid introducing a large utility framework unless there is a compelling reason.

Suggested token categories:

```css
--color-background
--color-surface
--color-text
--color-text-muted
--color-primary
--color-accent
--color-border

--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl

--radius-sm
--radius-md
--radius-lg

--content-width
--wide-width
```

Use tokens consistently.

---

# 22. Responsive Design

Design mobile-first.

The site must work particularly well on:

- phones
- tablets
- normal laptops
- large desktop monitors

Do not merely collapse desktop layouts.

Mobile should feel intentionally designed.

Keep:

- buttons easy to tap
- content hierarchy intact
- image crops sensible
- whitespace generous
- navigation simple

---

# 23. SEO

The site should include:

- meaningful page titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- social share image
- semantic headings
- descriptive internal links
- descriptive external links

Do not over-optimize.

The primary goal is clarity and credibility.

If additional pages are added later, each page should have its own SEO metadata fields where appropriate.

---

# 24. Performance

Performance should be excellent by default.

Prefer:

- static Astro output
- optimized images
- minimal JavaScript
- lazy-loaded non-critical media
- locally efficient assets
- no unnecessary third-party scripts

Do not introduce JavaScript when HTML/CSS can solve the problem.

The public website should remain extremely lightweight.

---

# 25. Deployment Rules

## Code changes

```text
VS Code
→ git commit
→ git push
→ GitHub
→ Cloudflare Pages build
→ live site
```

## Content changes

```text
Sanity Studio
→ Publish
→ Sanity webhook
→ Cloudflare deploy hook
→ Astro rebuild
→ live site
```

Do not require the client to understand this workflow.

From the client's perspective:

```text
Edit
→ Publish
→ Done
```

---

# 26. Domain Strategy

The production domain currently remains controlled by the organization.

Do not change registrar ownership unless explicitly required.

The preferred model is:

```text
Registrar
└── Domain ownership

Cloudflare
├── DNS
└── Pages hosting

Sanity
└── CMS

GitHub
└── Source code
```

Do not cancel legacy hosting until:

- the new site is approved
- DNS is verified
- email records are verified
- SSL works
- redirects work
- the production domain resolves correctly

---

# 27. Anti-Patterns

Do not:

- recreate WordPress inside Sanity
- create dozens of CMS fields merely because they are possible
- expose design decisions to the editor
- add unnecessary page-builder behavior
- rely on plugins for basic functionality
- add heavy JavaScript frameworks without need
- turn Universal Design into an “elderly care” brand
- make the site feel medical
- make sponsor content feel like advertising
- leave old events permanently visible
- add animations for novelty
- overuse cards
- create overly clever navigation
- sacrifice readability for visual style
- add features before there is a demonstrated need

---

# 28. Product Principles

When making a decision, prioritize in this order:

1. **Clarity for the visitor**
2. **Ease for the client**
3. **Accessibility**
4. **Long-term maintainability**
5. **Performance**
6. **Visual polish**
7. **Technical cleverness**

Technical sophistication is not the goal.

The best implementation is often the smallest implementation that meets the need well.

---

# 29. How Claude Code Should Work in This Repository

When making changes:

## Before coding

- understand the current schema
- understand whether content belongs in Sanity or code
- preserve the static architecture
- avoid adding dependencies unless needed
- consider how the client will edit the resulting content

## When building components

- use semantic Astro components
- maintain accessible heading structure
- reuse design tokens
- keep components small and understandable
- avoid unnecessary client-side JavaScript

## When changing Sanity schemas

- preserve existing content where possible
- anticipate migration issues before removing fields
- use clear human-readable field titles
- add helpful descriptions only where useful
- favor structured content over freeform page-building
- keep the number of fields reasonable

## When changing content queries

- query only published content
- respect `active` states
- automatically exclude stale events/sponsors where applicable
- define explicit sort order

## Before finishing a change

Check:

- mobile behavior
- keyboard behavior
- color contrast
- focus states
- image alt behavior
- empty CMS states
- missing optional content
- build success
- static output
- no unnecessary JS shipped

---

# 30. Definition of Success

The finished site should feel like:

> A thoughtful, modern organization with a clear mission and a website that quietly works.

The client should not need to think about:

- hosting
- plugins
- WordPress updates
- server maintenance
- build tools
- GitHub
- Cloudflare
- Astro

They should think:

> I know where to update this, I can publish it, and the website takes care of the rest.

That simplicity is not merely a technical choice.

It is part of the design.
