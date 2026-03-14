import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import node from '@astrojs/node';

export default defineConfig({
  site: 'http://localhost:4321/',
  output: 'server',
  integrations: [db()],
  adapter: node({ mode: 'standalone' }),
});
