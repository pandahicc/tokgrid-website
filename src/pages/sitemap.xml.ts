import type { APIRoute } from 'astro';
import { getPublishedGuides } from '../lib/content';
import { canonicalUrl } from '../data/site';

const STATIC_PATHS = [
  '/',
  '/features/',
  '/features/video-analytics/',
  '/features/product-research/',
  '/features/bulk-download/',
  '/features/data-export/',
  '/guides/',
  '/privacy/',
  '/support/',
  '/about/',
  '/changelog/',
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export const GET: APIRoute = async () => {
  const guides = await getPublishedGuides();
  const entries: Array<{ loc: string; lastmod?: string }> = STATIC_PATHS.map((path) => ({
    loc: canonicalUrl(path),
  }));

  for (const guide of guides) {
    entries.push({
      loc: canonicalUrl(`/guides/${guide.id}/`),
      lastmod: isoDate(guide.data.updatedDate ?? guide.data.pubDate),
    });
  }

  const urls = entries
    .map((entry) => {
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : '';
      return `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>${lastmod}\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
