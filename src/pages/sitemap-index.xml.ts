import type { APIRoute } from 'astro';

const url = 'http://localhost:4321'

export const GET: APIRoute = () => {
  const pages = [
    '/fr',
    '/fr/about',
    '/fr/projects',
    '/fr/contact',
    '/en',
    '/en/about',
    '/en/projects',
    '/en/contact'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${url}${page}</loc>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};