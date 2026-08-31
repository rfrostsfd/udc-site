/**
 * Sanity helpers for the Astro frontend.
 *
 * The @sanity/astro integration already exposes a configured read client via
 * the `sanity:client` virtual module. This file adds an image URL builder so
 * components can render optimized images from Sanity image references without
 * repeating projectId/dataset config everywhere.
 */
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Keep in sync with astro.config.mjs / studio/sanity.config.ts.
export const SANITY_PROJECT_ID = 'sc1wi60t'
export const SANITY_DATASET = 'production'

const builder = createImageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
})

/**
 * Build an image URL for a Sanity image source.
 *
 * @example urlFor(image).width(1200).height(800).fit('crop').url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
