// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://etherlesss.github.io',
  base: '/',
  integrations: [vue({ appEntrypoint: './src/entrypoints/vue.ts' })],

  vite: {
    plugins: [tailwindcss()],
  },
});