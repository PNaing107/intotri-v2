// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pnaing107.github.io',
  base: '/intotri-v2',
  vite: {
    plugins: [tailwindcss()]
  }
});