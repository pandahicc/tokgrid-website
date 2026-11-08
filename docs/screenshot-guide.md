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

## Slots

| Slot | Expected file | Used on | Capture |
|---|---|---|---|
| `overlay` | `overlay-hover.webp` | Home, Video Analytics, engagement guide | Page overlay badges plus the hover card |
| `data-list` | `data-list-filters.webp` | Home, Video Analytics | Data list with covers, metrics, quick filters, sorting |
| `analytics` | `analytics-overview.webp` | Home, Video Analytics, performance guide | Stats overview, medians/coverage, Top 10 |
| `scatter` | `scatter-plot.webp` | Video Analytics, high-performing guide | Views by engagement scatter |
| `products` | `product-research.webp` | Home, Product Research, competitor guide | Products tab with product cards |
| `categories` | `product-categories.webp` | Product Research, product guide | Category distribution |
| `download` | `download-subtitle.webp` | Home, Bulk Download | Single video quality picker and subtitle controls |
| `batch` | `batch-download.webp` | Bulk Download, bulk download guide | Batch progress, failure list, cancel |
| `export` | `export-fields.webp` | Home, Data Export, CSV guide | Export field picker and CSV preview |
| `auto-load` | `auto-load.webp` | Video Analytics, creator guide | Auto-load control |
| `creator` | `creator-publishing.webp` | Creator guide | Content/publishing view |
| `privacy` | `settings-privacy.webp` | Privacy, Support, About | Settings and privacy center |

## Adding a file

```bash
# Example: the data list capture
cp ~/captures/tokgrid-data-list.webp public/images/screenshots/data-list-filters.webp
npm run build
```

If the image has a different filename, edit the matching `base` value in
`src/data/screenshots.ts` instead of renaming the file.
