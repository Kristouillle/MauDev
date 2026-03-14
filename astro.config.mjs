import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://kshtech.ca/',
  output: 'server',
  integrations: [db()],
  adapter: node({
    mode: 'standalone',
    staticHeaders: true,
  }),
});
