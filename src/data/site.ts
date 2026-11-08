export const SITE = {
  url: 'https://tokgrid.app',
  name: 'TokGrid',
  title: 'TokGrid — TikTok Video Analytics & Product Research',
  description:
    'Analyze TikTok video performance, research competitors, explore products, and export structured data with TokGrid, a local-first Chrome extension.',
  storeUrl:
    'https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl',
  version: '0.1.2',
  supportEmail: null as string | null,
  gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '',
};

export const NAV = [
  { label: 'Features', href: '/features/' },
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
    title: 'Video & Subtitle Downloads',
    href: '/features/bulk-download/',
    icon: 'download',
    description:
      'Save a single video in an available quality, or download original and translated subtitles as VTT/SRT. Pro adds batch downloads.',
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
      { label: 'Video Analytics', href: '/features/video-analytics/' },
      { label: 'Product Research', href: '/features/product-research/' },
      { label: 'Video & Subtitle Downloads', href: '/features/bulk-download/' },
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
    ],
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
