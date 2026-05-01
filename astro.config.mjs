import { defineConfig } from 'astro/config';
import db from '@astrojs/db';

export default defineConfig({
  site: 'https://mau-dev.ca/',
  output: 'static',
  integrations: [db()],
});
