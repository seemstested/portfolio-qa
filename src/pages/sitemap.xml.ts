import type { APIRoute } from 'astro';
import { site } from '../data/site.config';

const pages = [
  { url: '/', lastMod: new Date().toISOString(), priority: 1.0 },
];

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site.url}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
