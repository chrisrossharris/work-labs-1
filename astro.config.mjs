import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://worklabs.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static'
});
