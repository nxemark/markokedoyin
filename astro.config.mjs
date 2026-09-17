import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://markokedoyin.com',
  integrations: [tailwind({
    applyBaseStyles: false
  })]
});
