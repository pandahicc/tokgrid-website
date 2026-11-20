const envGaMeasurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;

export const SITE = {
  url: 'https://tokgrid.app',
  name: 'TokGrid',
  title: 'TokGrid — TikTok Analytics & Research Chrome Extension',
  description:
    'A local-first Chrome extension that turns public TikTok pages into a filterable list: page analytics, product research, video and subtitle downloads, CSV/JSON export.',
  storeUrl:
    'https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl',
  version: '0.1.3',
  supportEmail: 'pandahi.cc@gmail.com',
  gaMeasurementId:
    envGaMeasurementId ?? (import.meta.env.PROD ? 'G-8SL1Y6HB4Q' : ''),
};

export const NAV = [
  { label: 'Features', href: '/features/' },
  { label: 'Extension', href: '/chrome-extension/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Changelog', href: '/changelog/' },
  { label: 'Privacy', href: '/privacy/' },
] as const;

export const FEATURES = [
  {
    id: 'video-analytics',
    title: 'Video Analytics',
    href: '/features/video-analytics/',
    icon: 'chart',
    description:
      'Review the views, likes, comments, shares, saves, and engagement rate of the videos already loaded on a public TikTok page.',
  },
  {
    id: 'product-research',
    title: 'Product Research',
    href: '/features/product-research/',
    icon: 'package',
    description:
      'Turn product anchors into structured cards with category paths, seller IDs, SKU counts, and product IDs.',
  },
  {
    id: 'bulk-download',
    title: 'TikTok Video Downloader',
    href: '/features/bulk-download/',
    icon: 'download',
    description:
      'Download a public video without a watermark in an available quality, or save subtitles as VTT/SRT. Single downloads are free; Pro adds batch downloads to a folder.',
  },
  {
    id: 'data-export',
    title: 'Structured Data Export',
    href: '/features/data-export/',
    icon: 'table',
    description:
      'Export selected videos or product data as CSV or JSON with configurable fields. Part of the Pro workflow.',
  },
] as const;

export const USE_CASES = [
  {
    title: 'Competitor content research',
    icon: 'search',
    description:
      'Open a competitor profile, hashtag, or search result and compare the videos that are actually loaded in the page sample.',
  },
  {
    title: 'Creator performance research',
    icon: 'chart',
    description:
      'Review medians, coverage, posting frequency, and interaction composition for the creator content visible on the page.',
  },
  {
    title: 'Product discovery',
    icon: 'package',
    description:
      'Organize product anchors by category, seller, and SKU count to understand which products appear around a topic.',
  },
  {
    title: 'Content trend analysis',
    icon: 'spark',
    description:
      'Use filters, rankings, and engagement structure to study patterns inside a page sample, without treating it as platform-wide data.',
  },
] as const;

export const GUIDE_CATEGORIES = [
  'Video analytics',
  'Competitor research',
  'Product research',
  'Data export',
  'Downloads',
] as const;

export const FOOTER_COLUMNS = [
  {
    title: 'Features',
    links: [
      { label: 'All features', href: '/features/' },
      { label: 'Chrome Extension', href: '/chrome-extension/' },
      { label: 'Video Analytics', href: '/features/video-analytics/' },
      { label: 'Product Research', href: '/features/product-research/' },
      { label: 'TikTok Video Downloader', href: '/features/bulk-download/' },
      { label: 'Data Export', href: '/features/data-export/' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'All guides', href: '/guides/' },
      {
        label: 'Analyze video performance',
        href: '/guides/how-to-analyze-tiktok-video-performance/',
      },
      {
        label: 'Calculate engagement rate',
        href: '/guides/how-to-calculate-tiktok-engagement-rate/',
      },
      {
        label: 'Research competitors',
        href: '/guides/how-to-research-tiktok-competitors/',
      },
      {
        label: 'Export video data to CSV',
        href: '/guides/how-to-export-tiktok-video-data-to-csv/',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Support', href: '/support/' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Changelog', href: '/changelog/' },
      { label: 'Email support', href: `mailto:${SITE.supportEmail}` },
    ],
  },
] as const;

/**
 * Curated guide links shown on each feature page. Keeping this explicit means
 * every guide is reachable from a feature page in two clicks from the homepage,
 * and the order can match the workflow instead of the publication date.
 */
export const FEATURE_GUIDES: Record<string, readonly string[]> = {
  '/features/video-analytics/': [
    'how-to-analyze-tiktok-video-performance',
    'how-to-calculate-tiktok-engagement-rate',
    'how-to-find-high-performing-tiktok-videos',
    'how-to-analyze-tiktok-creator-content',
    'how-to-research-tiktok-competitors',
  ],
  '/features/product-research/': [
    'how-to-find-tiktok-products-by-category',
    'how-to-research-tiktok-competitors',
  ],
  '/features/data-export/': [
    'how-to-export-tiktok-video-data-to-csv',
    'how-to-preview-sort-and-filter-tiktok-videos',
  ],
  '/features/bulk-download/': [
    'how-to-bulk-download-tiktok-videos',
    'how-to-export-tiktok-video-data-to-csv',
  ],
};

export const RELATED_TOOLS = [
  {
    name: 'ATK — TikTok Live Monitor',
    href: 'https://atk-live.com/',
  },
  {
    name: 'TikTok Subtitle Export',
    href: 'https://tiktoksubtitleexport.com/',
  },
  {
    name: 'BVT — TikTok Batch Downloader',
    href: 'https://bvtdownloader.app/',
  },
] as const;

export function storeUrl(campaign: string): string {
  const url = new URL(SITE.storeUrl);
  url.searchParams.set('utm_source', 'tokgrid.app');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', campaign);
  return url.toString();
}

export function canonicalUrl(pathname = '/'): string {
  const url = new URL(pathname, SITE.url);
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) {
    url.pathname += '/';
  }
  return url.href;
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE.url).href;
}
