import type { APIRoute } from 'astro';

const getBaseUrl = (requestOrigin: string) => {
  const configuredSite = import.meta.env.PUBLIC_SITE;
  const base = configuredSite && configuredSite.length > 0 ? configuredSite : requestOrigin;
  return base.endsWith('/') ? base.slice(0, -1) : base;
};

export const GET: APIRoute = ({ url }) => {
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

  const baseUrl = getBaseUrl(url.origin);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
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
