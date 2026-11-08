# TokGrid screenshot slots

Every product screenshot on the site is a slot. If the expected file is missing, the
site renders a labelled placeholder. Add a real capture with the exact base name and
rebuild; the placeholder is replaced automatically.

## Rules

- Put files in `public/images/screenshots/`.
- Use WebP or AVIF first, then PNG/JPG. The slot checks `.webp`, `.avif`, `.png`,
  `.jpg`, `.jpeg` in that order.
- Recommended size: 1280×800 or 1600×1000 (16:10).
- Use real TokGrid UI on a public TikTok page. Do not mock the interface.
- Remove or mask personal data, account handles, and anything you do not have
  permission to publish.
- Keep the alt text and caption accurate. If the UI changes, update
  `src/data/screenshots.ts`.
- Rebuild after adding a file. The check is performed at build time.

## Required screenshots

| # | Name / expected file | Where it appears | What it should show |
|---|---|---|---|
| 1 | `overlay-hover.webp` | Home product preview; How to Calculate TikTok Engagement Rate | Public TikTok page with TokGrid overlay badges for views, engagement rate, and commerce/ad status, plus the hover card. |
| 2 | `data-list-filters.webp` | Home hero; TikTok Video Analytics | Data tab with video covers, metrics, quick filters, sort controls, and pagination. |
| 3 | `analytics-overview.webp` | Home product preview; TikTok Video Analytics; How to Analyze TikTok Video Performance | Stats overview with sample size, median views/engagement, valid coverage, and Top 10. |
| 4 | `scatter-plot.webp` | TikTok Video Analytics; How to Find High-Performing TikTok Videos | Views-by-engagement scatter, including the valid/missing/zero-view explanation and linear/log scale control. |
| 5 | `product-research.webp` | TikTok Product Research; How to Research TikTok Competitors | Products tab with product covers, titles, category paths, seller IDs, and SKU counts. |
| 6 | `product-categories.webp` | TikTok Product Research; How to Find TikTok Products by Category | Category distribution with first/second/third-level totals and uncategorized/incomplete counts. |
| 7 | `download-subtitle.webp` | TikTok Video and Subtitle Downloads | Single-video quality picker and original/translated subtitle download controls (VTT/SRT). |
| 8 | `batch-download.webp` | TikTok Video and Subtitle Downloads; How to Bulk Download TikTok Videos | Pro batch download with overall progress, per-item status, failure list, cancel, and optional SRT sidecar. |
| 9 | `export-fields.webp` | Export TikTok Research Data; How to Export TikTok Video Data to CSV | Export field picker, CSV/JSON format choice, selected count, and a CSV preview. |
| 10 | `auto-load.webp` | TikTok Video Analytics | Auto-load control on a supported list page, with current attempts/items and stop state. |
| 11 | `creator-publishing.webp` | How to Analyze TikTok Creator Content | Content and publishing view with posting frequency, duration distribution, and engagement composition. |
| 12 | `settings-privacy.webp` | Privacy Policy | Settings/privacy center with overlay fields, export fields, storage usage, activity log, and data-clearing controls. |

## Adding a file

```bash
# Example: the data-list capture
cp ~/captures/tokgrid-data-list.webp public/images/screenshots/data-list-filters.webp
npm run build
```

If the image has a different filename, edit the matching `base` value in
`src/data/screenshots.ts` instead of renaming the file.
