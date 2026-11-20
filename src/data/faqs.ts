export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'What is TokGrid?',
    a: 'TokGrid is a Chrome extension that organizes TikTok data already loaded on public pages into a filterable, reviewable list. It covers video analytics, product research, video and subtitle downloads, and structured data export.',
  },
  {
    q: 'Is TokGrid free?',
    a: 'Core features are free, including the page overlay, data list, filters, sample analytics, product browsing, single video download, and single subtitle download. Pro adds batch downloads, selected-video CSV/JSON export, and product data export. Pro is a paid upgrade; current plan details are available in the extension.',
  },
  {
    q: 'Does TokGrid require an account?',
    a: 'No account is required for core features. Pro activation uses the extension’s subscription flow and license check.',
  },
  {
    q: 'Which TikTok pages are supported?',
    a: 'The extension is built for public Home, For You, and Following pages; video detail pages; hashtag pages; search results; user profiles; Explore; and music detail video lists. It is intended for logged-out public pages and does not bypass login, CAPTCHA, or rate limits.',
  },
  {
    q: 'Does TokGrid collect every video?',
    a: 'No. It only processes cards that are already rendered on the page. Auto-load can ask the page to load more in supported lists, but it is best-effort and may stop at login walls, rate limits, page changes, or its own limits. It does not promise a complete account history or a complete TikTok database.',
  },
  {
    q: 'Can I export data?',
    a: 'Yes. Pro can export selected videos as CSV or JSON, with configurable fields, and can export product data as CSV or JSON. The export uses the same selected-video set as batch download. Cross-page merging and historical snapshots are not available.',
  },
  {
    q: 'Does TokGrid support bulk downloads?',
    a: 'Pro supports batch downloads to a folder you choose, with a three-way queue, streaming writes, progress, failure reporting, cancellation, and an optional original-language SRT sidecar. Single video and single subtitle downloads are free.',
  },
  {
    q: 'Is TokGrid affiliated with TikTok?',
    a: 'No. TokGrid is an independent browser extension and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. TikTok and related marks belong to their respective owners.',
  },
  {
    q: 'What happens to my page data?',
    a: 'Page data is processed locally in the browser and is not uploaded. Subscription validation contacts the license server with an account identifier, token, channel, and operation type, but not page data. See the Privacy page for the full distinction.',
  },
];

export const VIDEO_ANALYTICS_FAQS: FaqItem[] = [
  {
    q: 'Is the engagement rate a TikTok official metric?',
    a: 'No. TokGrid calculates engagement rate from the page fields: (likes + comments + shares + saves) divided by views, multiplied by 100. When views are zero or missing, no rate is shown. If all four interaction counters are missing, no rate is shown; if only some are missing, the missing counters count as zero.',
  },
  {
    q: 'Does TokGrid show every video from an account?',
    a: 'No. It only processes cards that are rendered in the page. Auto-load can request more cards on supported list pages, but it does not guarantee a complete history and may stop when the page stops returning new items.',
  },
  {
    q: 'Are the statistics live TikTok data?',
    a: 'The metrics are a snapshot of the fields available when the page was read. The extension does not continuously refresh counts in the background. Reload the page or rescan to update the sample.',
  },
  {
    q: 'What do the medians and coverage numbers mean?',
    a: 'Medians describe the current filtered sample and are less sensitive to extreme values than an average. Coverage shows how many records had a valid value for that metric. Missing values do not participate and are not treated as zero.',
  },
  {
    q: 'Can TokGrid predict sales or virality?',
    a: 'No. It describes the visible sample and does not forecast sales, revenue, virality, or platform-wide performance. A high view count or engagement rate is not proof of commercial results.',
  },
];

export const PRODUCT_RESEARCH_FAQS: FaqItem[] = [
  {
    q: 'Does TokGrid provide a TikTok Shop product database?',
    a: 'No. It organizes product information that is already present in the public page data, such as product anchors attached to a video. It does not provide a complete TikTok Shop catalog.',
  },
  {
    q: 'Which product fields are available?',
    a: 'Available fields include product title, category path (up to three levels), seller ID, SKU count, cover image, product ID, SEO link, page-displayed price, gallery images, and related videos. Some fields may be missing or incomplete.',
  },
  {
    q: 'Is the price reliable?',
    a: 'The price is a page-displayed value and may be empty. A displayed zero is not a reliable indicator of the real price. Do not use it as a verified commercial price.',
  },
  {
    q: 'Can I export product data?',
    a: 'Yes. Product CSV/JSON export is a Pro feature. It includes fields such as product ID, title, category path, seller ID, SKU count, price, currency, source, cover URL, SEO URL, linked video IDs, and occurrence count.',
  },
  {
    q: 'Does TokGrid estimate sales or revenue?',
    a: 'No. It does not estimate sales, revenue, advertising performance, or seller distribution. Category distribution describes the loaded products only.',
  },
];

export const BULK_DOWNLOAD_FAQS: FaqItem[] = [
  {
    q: 'Can I download every video with TokGrid?',
    a: 'No. Only videos with a playable address in the available page data can be downloaded. Some videos have no playable source, and the available qualities depend on what the page exposes.',
  },
  {
    q: 'Can I download a video from this website?',
    a: 'No. This page can preview a single public video with TikTok’s oEmbed player, but the file and subtitle downloads happen in the TokGrid Chrome extension on the video page. The extension is available for desktop Chrome 111 or newer.',
  },
  {
    q: 'Does TokGrid remove the watermark?',
    a: 'The saved file does not carry the TikTok watermark: TokGrid downloads the page’s playable source rather than the watermarked download file, and it does not strip or re-encode the video. If a video exposes only a download source, the file can differ.',
  },
  {
    q: 'What is free and what requires Pro?',
    a: 'Single video download and single subtitle download are free. Batch downloads, selected-video CSV/JSON export, and product data export require Pro.',
  },
  {
    q: 'Which subtitle formats are supported?',
    a: 'Subtitles can be saved as VTT or SRT. Original-language and translated tracks are supported when available. The extension falls back to a backup subtitle source when the primary URL fails. Not every video has subtitles.',
  },
  {
    q: 'What does batch download do?',
    a: 'On Pro, batch download writes selected videos to a folder you choose using a three-way queue and streaming writes. It shows total and per-item progress, reports failures, supports cancellation, and can optionally save one original-language SRT per video.',
  },
  {
    q: 'Can I use TokGrid to bypass access controls?',
    a: 'No. TokGrid does not bypass login, CAPTCHA, DRM, or other access controls. Only download content you have the rights to use, and follow applicable law, TikTok’s terms, and the content owner’s permissions.',
  },
  {
    q: 'Why do I need Chrome 111 or newer?',
    a: 'Batch download uses the File System Access API to write into a folder you choose. The extension sets Chrome 111 as its minimum supported version.',
  },
];

export const DATA_EXPORT_FAQS: FaqItem[] = [
  {
    q: 'Which formats can I export?',
    a: 'TokGrid exports selected video data as CSV or JSON. Product data can also be exported as CSV or JSON. It does not integrate with Excel, Google Sheets, or other spreadsheet services.',
  },
  {
    q: 'Which videos are included in an export?',
    a: 'The export uses the same selected-video set as batch download: selected videos from the current filtered candidates plus selections retained across filters. It does not merge data from other pages or other browser tabs.',
  },
  {
    q: 'Which fields can I include?',
    a: 'Fields cover video basics, engagement metrics, author details, content details, product details, and flags such as ad and commerce status. You can choose fields in Settings, and the selection is used for both CSV and JSON.',
  },
  {
    q: 'Is CSV export Excel-friendly?',
    a: 'The CSV includes a UTF-8 BOM and CRLF rows so that spreadsheet applications can open it more reliably. That is file-format compatibility, not an Excel integration.',
  },
  {
    q: 'Does export require Pro?',
    a: 'Yes. Selected-video CSV/JSON export and product data export are Pro features. Single-item copying and single video/subtitle downloads remain free.',
  },
];

export const SUPPORT_FAQS: FaqItem[] = [
  {
    q: 'How do I install TokGrid?',
    a: 'Open the Chrome Web Store listing, add the extension to Chrome, and pin it if you want quick access. Open a supported public TikTok page and the TokGrid panel should appear. If it is collapsed, use the button in the lower-right corner to reopen it.',
  },
  {
    q: 'Why does the panel not appear?',
    a: 'Confirm that the extension is enabled, that you are on a supported tiktok.com page, and that the page has finished loading. Try refreshing the page. Private or logged-in-only content is outside the supported scope.',
  },
  {
    q: 'Why are no videos listed?',
    a: 'TokGrid only reads cards that are already rendered. Scroll the page to load more, or use auto-load on a supported list page. A page can also be blocked by a login wall or rate limit, in which case the extension cannot continue.',
  },
  {
    q: 'Why did a download fail?',
    a: 'Media URLs can expire, the network can fail, or the video may not expose a playable source. Refresh the page and try again. A failed item in a batch does not stop the rest of the queue.',
  },
  {
    q: 'Why are subtitles missing?',
    a: 'Not every video has subtitle tracks. TokGrid can save original and translated tracks when the page exposes them, and can fall back to a backup subtitle source, but it cannot create subtitles that do not exist.',
  },
  {
    q: 'How do I activate Pro?',
    a: 'Open the extension’s subscription flow from Settings and complete checkout. When you return, TokGrid can refresh the license status. If activation does not appear immediately, use the restore or refresh control in Settings.',
  },
  {
    q: 'Does TokGrid work on private or logged-in content?',
    a: 'No. It is intended for public, logged-out pages and does not bypass login, CAPTCHA, or rate limits.',
  },
  {
    q: 'Where can I get help?',
    a: 'Email pandahi.cc@gmail.com for support or privacy questions. Do not send page data, account credentials, or subscription tokens in a support request.',
  },
];

export const CHROME_EXTENSION_FAQS: FaqItem[] = [
  {
    q: 'How do I install TokGrid?',
    a: 'Open the Chrome Web Store listing, choose Add to Chrome, and confirm the permission prompt. Then pin the TokGrid icon from the puzzle-piece Extensions menu. Open a public tiktok.com page and the panel appears on the right.',
  },
  {
    q: 'Where is the TokGrid icon after I install it?',
    a: 'TokGrid installs a toolbar icon. Chrome may hide it behind the puzzle-piece Extensions menu; pin it there for one-click access. On the page itself, the panel starts collapsed on the Home, Explore, and video detail pages, so use the right-edge tab to open it.',
  },
  {
    q: 'Why does TokGrid need to read tiktok.com pages?',
    a: 'The extension reads the video and product cards that the public page has already rendered, using a read-only page script. It does not override fetch or XHR, does not intercept network requests, and does not call TikTok APIs in the background to collect data.',
  },
  {
    q: 'Does TokGrid upload my page data?',
    a: 'No. Page data is processed in your browser and is not uploaded to TokGrid. Subscription validation is a separate license check that does not include page data. The extension contains no analytics or telemetry.',
  },
  {
    q: 'Is there a web version I can use without installing anything?',
    a: 'The website can preview one public video through TikTok’s oEmbed player, but it cannot download a file. Downloads, subtitles, sample analytics, and CSV/JSON export run in the Chrome extension on the page itself.',
  },
  {
    q: 'Which browsers and versions are supported?',
    a: 'TokGrid targets desktop Chrome 111 or newer. Chromium-based browsers may work, but they are not officially supported. Chrome for Android and Chrome for iOS do not support extensions, so TokGrid is desktop only.',
  },
  {
    q: 'What is free and what requires Pro?',
    a: 'The page overlay, data list, filters, sample analytics, product browsing, single video download, and single subtitle download are free. Pro adds batch downloads, selected-video CSV/JSON export, and product data export. Pro is a paid upgrade; current plan details are in the extension.',
  },
  {
    q: 'Why is batch download limited to Chrome 111 or newer?',
    a: 'Batch download uses the File System Access API to write into a folder you choose, and the page reader uses a MAIN-world content script. Both require a modern desktop Chrome. An individual batch run is also best-effort: it uses the cards the page has loaded, up to the auto-load limits.',
  },
  {
    q: 'Does TokGrid work on private or logged-in pages?',
    a: 'No. TokGrid is designed for public pages that are accessible without logging in. It does not bypass login, CAPTCHA, DRM, rate limits, or other access controls.',
  },
];
