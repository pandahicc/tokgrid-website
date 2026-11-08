# TokGrid official website

The official static website and Guides blog for **TokGrid**, an independent, local-first
Chrome extension for TikTok video analytics, product research, downloads, and structured
data export.

- Production URL: `https://tokgrid.app/`
- Chrome Web Store: [TokGrid — Video Analytics & Downloader](https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl)
- Content language: English
- Current extension version referenced by the site: `0.1.2`
- Support and privacy email: `pandahi.cc@gmail.com`

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 7.4.7, static output |
| Styling | Tailwind CSS 4.3.5 via `@tailwindcss/vite` |
| Content | Astro Content Collections + MDX (`@astrojs/mdx` 8.1.3) |
| Hosting | Cloudflare Pages (recommended), or any static host |
| Client JS | No framework client JS; JSON-LD plus GA4 (production default) |
| Analytics | GA4 enabled by default in production with `G-8SL1Y6HB4Q`; env override/disable |

The site has no backend, database, CMS, user accounts, or contact form.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run check      # link, metadata, JSON-LD, sitemap and asset checks
npm run verify     # build + check
npm run preview    # preview the production build
```

The project requires Node 22.23.4 or newer. `.nvmrc` pins CI to Node 22.

If the default npm cache is not writable in this environment, use:

```bash
npm install --cache /tmp/npm-cache
```

## Project structure

```text
src/
  components/           Shared UI (header, footer, CTA, FAQ, SEO, screenshot slot, GA)
  content/guides/       8 MDX guides
  content.config.ts     Guides collection schema
  data/                 Site config, FAQ copy, screenshot registry
  layouts/              BaseLayout and ArticleLayout
  lib/                  Content helpers and JSON-LD schema builders
  pages/                All routes, including sitemap.xml.ts
  styles/global.css     Tailwind theme, prose, placeholders, print/reduced-motion
public/
  images/               Brand icon files
  images/screenshots/   Drop real captures here; slots replace placeholders on build
  og/                   Default 1200×630 Open Graph image
  robots.txt
  _headers              Cloudflare Pages security/cache headers
docs/screenshot-guide.md
scripts/check-site.mjs
```

## Content authoring

Guides are MDX files in `src/content/guides/`. Frontmatter:

```yaml
---
title: How to Analyze TikTok Video Performance
description: A short, unique description used for cards and metadata.
pubDate: 2026-11-08
updatedDate: 2026-11-08
readingTime: 7
category: Video analytics
featured: true
featureHref: /features/video-analytics/
featureLabel: TikTok Video Analytics
related:
  - how-to-calculate-tiktok-engagement-rate
  - how-to-find-high-performing-tiktok-videos
takeaways:
  - One key takeaway.
draft: false
---
```

Rules:

- Do not start the body with an H1; the article layout renders the title.
- Use H2/H3 headings. The table of contents is generated from them.
- Link to the relevant feature page and at least two related guides.
- Include a limits section. Never imply complete TikTok coverage, sales data, or
  affiliation with TikTok.
- Keep `draft: true` for unfinished content; drafts are excluded from production
  builds, the Guides index, and the sitemap.
- Use `<ScreenshotSlot id="..." />` for product captures and `<Callout>` for notes.

## Screenshot slots

See [docs/screenshot-guide.md](docs/screenshot-guide.md) for the full list.

The slot component checks `public/images/screenshots/` at build time for
`.webp`, `.avif`, `.png`, `.jpg`, or `.jpeg`. If a file exists, the real image is
rendered with its registered alt text and dimensions. If not, the site renders a clearly
labelled placeholder. No fake product UI is generated.

Example:

```bash
cp ~/captures/tokgrid-data-list.webp public/images/screenshots/data-list-filters.webp
npm run build
```

Screenshots must be real captures of the current extension, with personal data removed.
Recommended size: 1280×800 or 1600×1000.

## Google Analytics

Production builds load Google Analytics 4 with measurement ID **`G-8SL1Y6HB4Q`** by
default. Development builds do not load GA unless a measurement ID is provided.

To override or disable:

```bash
# Override with another property
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build

# Disable for a build
PUBLIC_GA_MEASUREMENT_ID='' npm run build
```

When enabled:

- `GoogleAnalytics.astro` adds the `gtag.js` script and inline configuration.
- The Privacy page renders the “analytics enabled” section and mentions GA cookies.
- `scripts/check-site.mjs` allows the GA scripts; when explicitly disabled, it rejects
  client scripts that are not JSON-LD.

GA sets `_ga` cookies and may collect page views, approximate location, and device/
browser signals. Review cookie/consent requirements for your audience. This build does
**not** include a cookie-consent banner; add one or disable GA if your jurisdiction
requires opt-in consent before analytics loads.

## SEO

- Per-page title, description, canonical URL, Open Graph and Twitter metadata.
- JSON-LD: `SoftwareApplication`, `Organization`, `WebSite`, `FAQPage`,
  `BreadcrumbList`, `Article`, and `ItemList`.
- Custom `src/pages/sitemap.xml.ts` includes all 19 indexable pages, with guide
  `lastmod` dates.
- `public/robots.txt` points to `https://tokgrid.app/sitemap.xml`.
- Canonical URLs use the root domain and trailing slashes.
- Draft guides are excluded from production output and the sitemap.

## Deployment

### Cloudflare Pages (recommended)

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project and connect the repository.
3. Configure:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Optional environment variable to override/disable GA: `PUBLIC_GA_MEASUREMENT_ID`
4. Deploy to the preview domain and verify the routes, sitemap, robots, and 404.
5. Add `tokgrid.app` as a custom domain only after confirming the current DNS setup.
   Do not overwrite existing DNS records without checking.
6. After the site is live, update the Chrome Web Store homepage and support URLs.

The repository includes `public/_headers` for Cloudflare Pages. Other hosts may ignore it.

### GitHub

The repository is pushed to
[pandahicc/tokgrid-website](https://github.com/pandahicc/tokgrid-website) on `main`,
using the SSH remote `git@github.com:pandahicc/tokgrid-website.git`.

```bash
git push
```

The CI workflow in `.github/workflows/ci.yml` runs `npm ci` and `npm run verify` on
pushes and pull requests to `main`. The production build uses the default GA4 ID; set
`PUBLIC_GA_MEASUREMENT_ID` in the workflow environment only when you need an override.

GitHub Pages is not the default target. A project-site subpath (`/<repo>/`) would break
the root-relative links; use a custom domain or Cloudflare Pages unless a base-path
refactor is added.

## Testing

- `npm run verify` builds and checks all 20 HTML pages, metadata, JSON-LD, internal
  links, assets, sitemap URLs, and robots.
- Manual responsive checks use Chrome at 390, 768, and 1440 widths.
- Lighthouse results and current deployment status are recorded in
  `DELIVERY_REPORT.md` after verification.

## Accuracy guardrails

The website must not claim:

- complete TikTok coverage or a complete account history;
- official affiliation with TikTok or ByteDance;
- sales, revenue, conversion, or virality predictions;
- cross-page merge, historical snapshots, seller distribution, creator ratings, or
  automated outreach as current features;
- every video is downloadable or every video has subtitles;
- Excel/Google Sheets integration, a subscription price, or a pricing table.

Page data is processed locally. Subscription validation is a separate license check and
does not include page data. See `/privacy/` for the precise distinction.

## Pending inputs

- Real product screenshots (see `docs/screenshot-guide.md`).
- Chrome Web Store Support URL (email is set to `pandahi.cc@gmail.com`).
- GitHub remote URL and credentials.
- Cloudflare Pages/DNS access.
- GA consent/cookie compliance review for the target audience; no consent banner is
  included in this build.
- Chrome Web Store homepage/support URL updates and Search Console/Bing submission.

Subscription pricing is intentionally not displayed. The product-price field described
on the Product Research page is a data field, not a subscription price.

Until the remaining inputs are supplied, the site uses labelled screenshot placeholders
and does not claim to be deployed.
