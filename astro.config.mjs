// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'sc1wi60t',
      dataset: 'production',
      apiVersion: '2026-08-30',
      useCdn: false,
    }),
  ],
});