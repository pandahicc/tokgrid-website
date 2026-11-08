export interface ScreenshotDefinition {
  /** Public URL base without the file extension. */
  base: string;
  title: string;
  description: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Drop a real capture into public/images/screenshots/ using the expected base
 * name (for example overlay-hover.webp) and the slot will render the image on
 * the next build instead of the labelled placeholder. Keep width/height in sync
 * with the file so the layout reserves the right aspect ratio.
 */
export const SCREENSHOTS = {
  overlay: {
    base: '/images/screenshots/overlay-hover',
    title: 'Page overlay and hover details',
    description:
      'A public TikTok page with TokGrid badges for views, engagement rate, and commerce/ad status, plus the hover card.',
    alt: 'TokGrid overlay badges and hover card on a public TikTok video page.',
    width: 796,
    height: 711,
  },
  'data-list': {
    base: '/images/screenshots/data-list-filters',
    title: 'Video list with quick filters',
    description:
      'The TokGrid Data tab showing covers, metrics, quick filters, and the sort controls.',
    alt: 'TokGrid data list with video covers, metrics, filters, and sorting controls.',
    width: 382,
    height: 1090,
  },
  'preview-sort-filters': {
    base: '/images/screenshots/preview-sort-filters',
    title: 'Video preview with sorting and filters',
    description:
      'The Video preview modal with Cards/List view, quick filters, more filters, sort order, selection, and Pro download/export actions.',
    alt: 'TokGrid video preview modal with card and list views, filters, sorting, selection, and download/export controls.',
    width: 1154,
    height: 1173,
  },
  analytics: {
    base: '/images/screenshots/analytics-overview',
    title: 'Analytics overview and Top 10',
    description:
      'The Stats tab summary cards, coverage counts, and the Top 10 ranking for a filtered sample.',
    alt: 'TokGrid analytics overview with sample medians, coverage, and a Top 10 ranking.',
    width: 382,
    height: 1090,
  },
  scatter: {
    base: '/images/screenshots/scatter-plot',
    title: 'Views by engagement scatter plot',
    description:
      'The free scatter view plotting valid views against engagement rate for the current sample.',
    alt: 'TokGrid scatter plot of video views against engagement rate.',
    width: 1024,
    height: 899,
  },
  products: {
    base: '/images/screenshots/product-research',
    title: 'Product tab and product cards',
    description:
      'The Products tab showing product covers, category paths, seller IDs, and SKU counts.',
    alt: 'TokGrid product tab with product cards, categories, seller IDs, and SKU counts.',
    width: 383,
    height: 1091,
  },
  categories: {
    base: '/images/screenshots/product-categories',
    title: 'Category distribution',
    description:
      'The product category distribution view with first-, second-, or third-level category totals.',
    alt: 'TokGrid product category distribution chart and uncategorized counts.',
    width: 381,
    height: 472,
  },
  download: {
    base: '/images/screenshots/download-subtitle',
    title: 'Single video and subtitle download',
    description:
      'The download controls for an available video quality and the original/translated subtitle tracks.',
    alt: 'TokGrid single video quality picker and subtitle download controls.',
    width: 672,
    height: 438,
  },
  batch: {
    base: '/images/screenshots/batch-download',
    title: 'Batch download progress',
    description:
      'A Pro batch download with the folder picker, overall progress, item status, failures, and cancel control.',
    alt: 'TokGrid Pro batch download progress with per-item status and failure reporting.',
    width: 383,
    height: 495,
  },
  export: {
    base: '/images/screenshots/export-fields',
    title: 'Export fields and CSV preview',
    description:
      'The export field picker, format selection, selected count, and a CSV preview.',
    alt: 'TokGrid export field picker and CSV preview for selected videos.',
    width: 381,
    height: 941,
  },
  'auto-load': {
    base: '/images/screenshots/auto-load',
    title: 'Auto-load control',
    description:
      'The auto-load control shown on a supported list page, with its current attempt and item count.',
    alt: 'TokGrid auto-load control on a supported TikTok list page.',
    width: 376,
    height: 576,
  },
  creator: {
    base: '/images/screenshots/creator-publishing',
    title: 'Creator publishing view',
    description:
      'The content and publishing view showing per-author posting frequency, duration distribution, and engagement composition.',
    alt: 'TokGrid creator publishing frequency and content distribution view.',
    width: 383,
    height: 1091,
  },
  privacy: {
    base: '/images/screenshots/settings-privacy',
    title: 'Settings and privacy center',
    description:
      'The Settings tab with overlay fields, naming, export fields, storage usage, activity log, and data-clearing controls.',
    alt: 'TokGrid settings and privacy center with storage and activity log controls.',
    width: 383,
    height: 1091,
  },
} as const satisfies Record<string, ScreenshotDefinition>;

export type ScreenshotId = keyof typeof SCREENSHOTS;
