# Chrome Web Store listing update (copy pack)

This is an operational copy pack for the public listing:

<https://chromewebstore.google.com/detail/tokgrid-%E2%80%94-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl>

The Chrome Web Store has no listing-write API. Apply these changes in the developer
dashboard by hand, then re-check the public page.

## What the listing showed on 2026-11-20

| Field | Current value |
|---|---|
| Name | `TokGrid — Video Analytics & Downloader` |
| Short description | `TikTok page analytics: views, engagement, product categories, rankings, video/subtitle downloads. Pro adds batch & CSV/JSON export.` |
| Rating | `0 out of 5`, `No ratings` |
| Users | 9 |
| Screenshots | 5, all 1280×800 |
| Version | 0.1.3, updated November 14, 2026 |
| Homepage / Support | `https://tokgrid.app` / `https://tokgrid.app/support/` |
| Developer email | `pandahi.ltd@gmail.com` (the site uses `pandahi.cc@gmail.com`) |

Screenshot *content* was not verified pixel by pixel. Open the five images and confirm
the first two show the installed panel on a real TikTok page and the Pro batch queue.

## Name

Preferred:

```text
TokGrid — TikTok Analytics & Bulk Downloader
```

44 characters, within the 75-character limit. It contains both target clusters:
`TikTok Analytics` and `Bulk Downloader`.

**Risk:** the extension repo's `docs/store-listing.md` deliberately kept `TikTok` out of
the name. Adding it may attract a trademark or impersonation review, even though several
competitors use the same pattern. Fallback if review objects:

```text
TokGrid — Analytics & Bulk Downloader for TikTok
```

48 characters, and it reads more clearly as a third-party tool.

## Short description (129/132)

```text
TikTok analytics, video & subtitle downloads, and Pro bulk download. Local-first Chrome extension with CSV/JSON export. No login.
```

## Full description — opening

Replace the current analytics-first opening with these two sentences, then keep the
existing feature sections:

```text
TokGrid is a Chrome extension for TikTok page analytics and downloads. Open a public video, save it in an available quality without a watermark, grab subtitles as SRT/VTT, or batch-download a profile on Pro — then export the list as CSV/JSON.
```

Keep the existing privacy, supported-pages, data-limits, and non-affiliation sections.
They match the extension's actual permissions and are a trust asset.

## Screenshots (5/5 used)

- Keep five. The order matters more than the count.
- Image 1: the TokGrid panel open on a public TikTok video page, with the download
  controls visible. This is the "after install" shot.
- Image 2: the Pro batch queue with folder, progress, and failure list.
- Images 3–5: data list, analytics/scatter, product research.
- CWS does not render captions, so burn a short line into the image if the UI alone is
  not self-explanatory (for example, "On the TikTok page — no separate dashboard").
- Do not use screenshots that imply an official TikTok relationship.

## Ratings and reviews

The listing had **no ratings** and 9 users. This cannot be fixed from the website, and it
must not be fabricated. The extension already has a review-reward flow (Tally form B,
`rewardFormUrl` in `src/services/feedback/config.ts`). The lever is usage volume and a
post-install prompt, not listing copy. Revisit once the listing has enough installs for a
first review.

## Manual checklist

1. Update the name and short description.
2. Replace the opening of the full description.
3. Confirm the first two screenshots.
4. Save and wait for review (name and description changes can trigger re-review).
5. Open the public listing in a signed-out window and confirm the title, description,
   version, and screenshots.
6. Update the site's `src/data/store.ts` signals after the listing changes, so
   `StoreProof` starts rendering once the thresholds are met.
7. Keep `https://tokgrid.app/support/` as the support URL; it is already set.
