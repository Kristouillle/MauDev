import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://kshtech.ca/',
  output: 'server',
  security: {
    allowedDomains: [{
      hostname: 'kshtech.ca',
      protocol: 'https'
    }, {
      hostname: '**.kshtech.ca',
      protocol: 'https'
    }, {
      hostname: 'localhost',
      protocol: 'http',
      port: '4321'
    }]
  },
  integrations: [db()],
  adapter: node({
    mode: 'standalone',
    staticHeaders: true,
  }),
});
