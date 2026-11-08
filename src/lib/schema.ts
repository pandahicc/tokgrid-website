import { absoluteUrl, canonicalUrl, SITE } from '../data/site';
import type { FaqItem } from '../data/faqs';

const ORGANIZATION = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl('/images/tokgrid-icon-128.png'),
  sameAs: [SITE.storeUrl],
};

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    ...ORGANIZATION,
    description:
      'TokGrid is an independent Chrome extension for TikTok video analytics, product research, and structured data export.',
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'en',
    description: SITE.description,
  };
}

export function softwareApplicationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome 111 or later',
    softwareVersion: SITE.version,
    description:
      'A local-first Chrome extension for TikTok video analytics, product research, video and subtitle downloads, and structured data export.',
    url: SITE.url,
    installUrl: SITE.storeUrl,
    image: absoluteUrl('/og/tokgrid-og.png'),
    sameAs: [SITE.storeUrl],
    featureList: [
      'TikTok page overlay with views, engagement rate, and commerce/ad labels',
      'Filterable and sortable video data list',
      'Sample analytics with medians, coverage, Top 10, and scatter view',
      'Product research cards with category paths, seller IDs, and SKU counts',
      'Single video and subtitle downloads',
      'Pro batch downloads with optional subtitle sidecars',
      'Pro CSV and JSON export for selected videos and product data',
    ],
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };
}

export function faqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
  category: string;
}): Record<string, unknown> {
  const url = canonicalUrl(input.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified ?? input.datePublished).toISOString(),
    articleSection: input.category,
    inLanguage: 'en',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: ORGANIZATION,
    publisher: ORGANIZATION,
    image: absoluteUrl('/og/tokgrid-og.png'),
    url,
  };
}

export function itemListSchema(
  items: Array<{ name: string; href: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.href),
    })),
  };
}
