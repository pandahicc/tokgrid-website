import { existsSync, statSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const BASE = 'https://tokgrid.app';
const GA_ID = process.env.PUBLIC_GA_MEASUREMENT_ID ?? 'G-8SL1Y6HB4Q';
const GA_ENABLED = GA_ID !== '';
const errors = [];
const warnings = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function relUrl(file) {
  const relative = path.relative(DIST, file).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
}

function metaContent(html, key, value) {
  const tagRe = new RegExp(`<meta[^>]+${key}=["']${value}["'][^>]*>`, 'i');
  const tag = tagRe.exec(html);
  if (!tag) return null;
  const content = /content=["']([^"']*)["']/i.exec(tag[0]);
  return content ? content[1] : null;
}

function linkHref(html, rel) {
  const tagRe = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*>`, 'i');
  const tag = tagRe.exec(html);
  if (!tag) return null;
  const href = /href=["']([^"']*)["']/i.exec(tag[0]);
  return href ? href[1] : null;
}

function resolveLocal(urlPath) {
  const clean = urlPath.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;
  const local = path.join(DIST, clean.replace(/^\//, ''));
  if (existsSync(local) && statSync(local).isFile()) return local;
  const asDir = path.join(local, 'index.html');
  if (existsSync(asDir)) return asDir;
  const asHtml = `${local}.html`;
  if (existsSync(asHtml)) return asHtml;
  return null;
}

const htmlFiles = (await walk(DIST)).filter((file) => file.endsWith('.html'));
const htmlCache = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  htmlCache.set(file, html);
}

for (const file of htmlFiles) {
  const html = htmlCache.get(file);
  const page = relUrl(file);
  const is404 = page === '/404.html';

  if (!/<html[^>]+lang=["']en["']/i.test(html)) {
    errors.push(`${page}: missing <html lang="en">`);
  }

  const titleMatch = /<title>([^<]*)<\/title>/i.exec(html);
  if (!titleMatch || titleMatch[1].trim().length < 10) {
    errors.push(`${page}: missing or too-short <title>`);
  } else if (titleMatch[1].length > 80) {
    errors.push(`${page}: title is ${titleMatch[1].length} chars (max 80)`);
  }

  const description = metaContent(html, 'name', 'description');
  if (!description) {
    errors.push(`${page}: missing meta description`);
  } else if (description.length < 50 || description.length > 200) {
    errors.push(`${page}: description is ${description.length} chars (expected 50-200)`);
  }

  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) {
    errors.push(`${page}: expected exactly one <h1>, found ${h1Count}`);
  }

  if (!is404) {
    const canonical = linkHref(html, 'canonical');
    if (!canonical) {
      errors.push(`${page}: missing canonical`);
    } else if (!canonical.startsWith(BASE)) {
      errors.push(`${page}: canonical does not use ${BASE}`);
    } else {
      const expected = page === '/' ? `${BASE}/` : `${BASE}${page}`;
      if (canonical !== expected) {
        errors.push(`${page}: canonical ${canonical} does not match ${expected}`);
      }
    }
  } else if (!/name=["']robots["'][^>]+noindex/i.test(html)) {
    errors.push(`${page}: 404 page must be noindex`);
  }

  const ogTitle = metaContent(html, 'property', 'og:title');
  const ogDescription = metaContent(html, 'property', 'og:description');
  const ogImage = metaContent(html, 'property', 'og:image');
  const ogUrl = metaContent(html, 'property', 'og:url');
  const twitterCard = metaContent(html, 'name', 'twitter:card');
  if (!ogTitle || !ogDescription || !ogImage || !twitterCard) {
    errors.push(`${page}: incomplete Open Graph/Twitter metadata`);
  }
  if (ogImage && !ogImage.startsWith(`${BASE}/`)) {
    errors.push(`${page}: og:image is not absolute on ${BASE}`);
  }
  if (!is404 && ogUrl && !ogUrl.startsWith(BASE)) {
    errors.push(`${page}: og:url is not absolute on ${BASE}`);
  }

  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let scriptMatch;
  while ((scriptMatch = scriptRe.exec(html)) !== null) {
    const attrs = scriptMatch[1];
    const body = scriptMatch[2];
    if (/application\/ld\+json/i.test(attrs)) {
      try {
        JSON.parse(body.trim());
      } catch {
        errors.push(`${page}: invalid JSON-LD`);
      }
      continue;
    }
    if (
      GA_ENABLED &&
      (/googletagmanager\.com/i.test(attrs) || /\bgtag\(/.test(body))
    ) {
      continue;
    }
    errors.push(`${page}: unexpected client script`);
  }

  if (/(\bTODO\b|lorem ipsum)/i.test(html)) {
    errors.push(`${page}: contains a TODO or lorem ipsum marker`);
  }

  if (/US\$\s?\d[\d.,]*|\$\s?\d[\d.,]*|Pricing is shown/i.test(html)) {
    errors.push(`${page}: subscription price text detected`);
  }

  if (
    (page === '/support/' || page === '/privacy/') &&
    !html.includes('pandahi.cc@gmail.com')
  ) {
    errors.push(`${page}: missing support email`);
  }

  const hrefRe = /href=["']([^"']+)["']/gi;
  let hrefMatch;
  const seenLinks = new Set();
  while ((hrefMatch = hrefRe.exec(html)) !== null) {
    const href = hrefMatch[1];
    if (
      !href ||
      seenLinks.has(href) ||
      href.startsWith('#') ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('data:') ||
      href.startsWith('javascript:')
    ) {
      continue;
    }
    seenLinks.add(href);
    const target = resolveLocal(href);
    if (!target) {
      errors.push(`${page}: broken internal link ${href}`);
      continue;
    }
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const hash = href.slice(hashIndex + 1);
      if (hash) {
        const targetHtml = htmlCache.get(target) ?? (await readFile(target, 'utf8'));
        const idRe = new RegExp(`id=["']${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`);
        if (!idRe.test(targetHtml)) {
          errors.push(`${page}: missing anchor #${hash} in ${href}`);
        }
      }
    }
  }

  const srcRe = /src=["']([^"']+)["']/gi;
  let srcMatch;
  const seenSrc = new Set();
  while ((srcMatch = srcRe.exec(html)) !== null) {
    const src = srcMatch[1];
    if (
      !src ||
      seenSrc.has(src) ||
      src.startsWith('http://') ||
      src.startsWith('https://') ||
      src.startsWith('data:') ||
      src.startsWith('//')
    ) {
      continue;
    }
    seenSrc.add(src);
    if (!resolveLocal(src)) {
      errors.push(`${page}: missing asset ${src}`);
    }
  }
}

let sitemapCount = 0;
const sitemapPath = path.join(DIST, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  errors.push('dist/sitemap.xml is missing');
} else {
  const sitemap = await readFile(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  sitemapCount = locs.length;
  if (locs.length !== 20) {
    errors.push(`sitemap has ${locs.length} URLs; expected 20`);
  }
  for (const loc of locs) {
    if (!loc.startsWith(BASE)) {
      errors.push(`sitemap URL is outside ${BASE}: ${loc}`);
      continue;
    }
    const localPath = loc.slice(BASE.length) || '/';
    if (!resolveLocal(localPath)) {
      errors.push(`sitemap URL has no built page: ${loc}`);
    }
  }
  if (locs.some((loc) => loc.includes('/404'))) {
    errors.push('sitemap must not include the 404 page');
  }
}

const robotsPath = path.join(DIST, 'robots.txt');
if (!existsSync(robotsPath)) {
  errors.push('dist/robots.txt is missing');
} else {
  const robots = await readFile(robotsPath, 'utf8');
  if (!robots.includes(`Sitemap: ${BASE}/sitemap.xml`)) {
    errors.push('robots.txt does not point to the sitemap');
  }
}

if (errors.length > 0) {
  console.error(`Site check failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Site check passed: ${htmlFiles.length} HTML pages, ${sitemapCount} sitemap URLs.`);
  if (GA_ENABLED) {
    console.log(`GA4 is enabled for this build (${GA_ID}); GA scripts were allowed.`);
  } else {
    console.log('GA4 is disabled for this build; no GA scripts were allowed.');
  }
  if (warnings.length > 0) {
    for (const warning of warnings) console.warn(`  warning: ${warning}`);
  }
}
