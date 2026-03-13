import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'http://localhost:4321/',
  output: 'server',
  integrations: [db()],
  adapter: vercel(),
});
