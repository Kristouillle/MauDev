import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mau-dev.ca/',
  output: 'server',

  security: {
    allowedDomains: [
      { hostname: 'mau-dev.ca', protocol: 'https' },
      { hostname: '**.mau-dev.ca', protocol: 'https' },
      { hostname: '*.vercel.app', protocol: 'https' },
      { hostname: '**.vercel.app', protocol: 'https' },
      { hostname: 'localhost', protocol: 'http', port: '4321' }
    ]
  },

  integrations: [db()],
  adapter: vercel()
});