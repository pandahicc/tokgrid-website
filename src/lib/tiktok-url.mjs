/**
 * Pure helpers for the download page link preview.
 *
 * The site is static, so this module only decides whether an input is a single
 * public TikTok video and normalises it for TikTok's public oEmbed endpoint. It
 * never fetches anything and never resolves a media URL.
 */

const MAX_INPUT_LENGTH = 2048;

const VIDEO_HOSTS = new Set(['tiktok.com', 'www.tiktok.com', 'm.tiktok.com']);
const SHORT_HOSTS = new Set(['vm.tiktok.com', 'vt.tiktok.com']);

/** @typedef {'video' | 'short'} TikTokLinkKind */
/**
 * @typedef {{ ok: true, kind: TikTokLinkKind, canonicalUrl: string }} TikTokLinkOk
 * @typedef {{ ok: false, reason: 'empty' | 'too-long' | 'invalid-url' | 'not-tiktok' | 'not-video' }} TikTokLinkError
 * @typedef {TikTokLinkOk | TikTokLinkError} TikTokLinkResult
 */

/** @param {TikTokLinkError['reason']} reason @returns {TikTokLinkError} */
function fail(reason) {
  return { ok: false, reason };
}

/** @param {TikTokLinkKind} kind @param {string} canonicalUrl @returns {TikTokLinkOk} */
function pass(kind, canonicalUrl) {
  return { ok: true, kind, canonicalUrl };
}

function hasScheme(value) {
  return /^[a-z][a-z0-9+.-]*:\/\//i.test(value);
}

/**
 * Accept a full URL or a bare TikTok domain, and return a normalised single-video
 * URL. Profiles, hashtags, live links and other hosts are rejected on purpose so
 * the preview never promises something the extension is needed for.
 *
 * @param {unknown} input
 * @returns {TikTokLinkResult}
 */
export function parseTikTokVideoUrl(input) {
  if (typeof input !== 'string') return fail('empty');

  let value = input.trim();
  if (value === '') return fail('empty');
  if (value.length > MAX_INPUT_LENGTH) return fail('too-long');

  if (!hasScheme(value)) value = `https://${value.replace(/^\/+/, '')}`;

  /** @type {URL} */
  let url;
  try {
    url = new URL(value);
  } catch {
    return fail('invalid-url');
  }

  if (url.protocol !== 'https:' && url.protocol !== 'http:') return fail('invalid-url');
  if (url.username !== '' || url.password !== '') return fail('invalid-url');

  const host = url.hostname.toLowerCase();
  url.protocol = 'https:';
  url.search = '';
  url.hash = '';

  if (SHORT_HOSTS.has(host)) {
    const code = /^\/([A-Za-z0-9_-]{5,})\/?$/.exec(url.pathname);
    if (!code) return fail('not-video');
    return pass('short', `https://${host}/${code[1]}/`);
  }

  if (!VIDEO_HOSTS.has(host)) return fail('not-tiktok');

  const profileVideo = /^\/@[^/]+\/video\/(\d{6,})\/?$/.exec(url.pathname);
  if (profileVideo) {
    const path = url.pathname.replace(/\/+$/, '');
    return pass('video', `https://www.tiktok.com${path}`);
  }

  const legacyVideo = /^\/v\/(\d{6,})\.html$/.exec(url.pathname);
  if (legacyVideo) {
    // Only the mobile /v/ form is accepted by oEmbed; the www form returns 400.
    return pass('video', `https://m.tiktok.com/v/${legacyVideo[1]}.html`);
  }

  const shortPath = /^\/t\/([A-Za-z0-9_-]{5,})\/?$/.exec(url.pathname);
  if (shortPath) {
    return pass('short', `https://www.tiktok.com/t/${shortPath[1]}/`);
  }

  return fail('not-video');
}

export { MAX_INPUT_LENGTH };
