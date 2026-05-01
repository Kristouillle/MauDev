import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mau-dev.ca/',
  output: 'server',
  integrations: [db()],
  adapter: vercel()
});
