/**
 * TikTok's public oEmbed endpoint is the only third party this site calls from
 * the browser, and only after the visitor submits a link. The endpoint returns a
 * player embed id, not a media file, so the site can preview a link but cannot
 * download it.
 */

const OEMBED_ENDPOINT = 'https://www.tiktok.com/oembed';
const PLAYER_BASE = 'https://www.tiktok.com/player/v1/';
const DEFAULT_TIMEOUT_MS = 8000;
const EMBED_ID_PATTERN = /^\d{6,25}$/;

/**
 * @param {string} canonicalUrl
 * @returns {string}
 */
export function buildOembedUrl(canonicalUrl) {
  const url = new URL(OEMBED_ENDPOINT);
  url.searchParams.set('url', canonicalUrl);
  return url.toString();
}

/**
 * Build the player URL ourselves from a validated numeric product id instead of
 * injecting the HTML string returned by oEmbed.
 *
 * @param {unknown} embedId
 * @param {{ autoplay?: boolean }} [options]
 * @returns {string | null}
 */
export function buildPlayerUrl(embedId, options = {}) {
  const id = String(embedId ?? '').trim();
  if (!EMBED_ID_PATTERN.test(id)) return null;

  const url = new URL(`${PLAYER_BASE}${id}`);
  url.searchParams.set('embed_from', 'oembed');
  url.searchParams.set('autoplay', options.autoplay ? '1' : '0');
  return url.toString();
}

/**
 * @param {unknown} payload
 * @returns {{ playerUrl: string, width: number, height: number } | null}
 */
export function pickPreview(payload) {
  if (payload === null || typeof payload !== 'object') return null;

  const record = /** @type {Record<string, unknown>} */ (payload);
  const playerUrl = buildPlayerUrl(record.embed_product_id);
  if (playerUrl === null) return null;

  const width = Number.parseInt(String(record.width ?? ''), 10);
  const height = Number.parseInt(String(record.height ?? ''), 10);
  const hasSize = Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0;

  return {
    playerUrl,
    width: hasSize ? width : 9,
    height: hasSize ? height : 16,
  };
}

/**
 * @param {string} canonicalUrl
 * @param {{
 *   signal?: AbortSignal,
 *   timeoutMs?: number,
 *   fetchImpl?: typeof fetch,
 * }} [options]
 * @returns {Promise<
 *   | { ok: true, preview: { playerUrl: string, width: number, height: number } }
 *   | { ok: false, reason: 'http' | 'invalid' | 'timeout' | 'network' }
 * >}
 */
export async function fetchTikTokPreview(canonicalUrl, options = {}) {
  const {
    signal,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    fetchImpl = globalThis.fetch,
  } = options;

  if (typeof fetchImpl !== 'function') return { ok: false, reason: 'network' };

  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  const forwardAbort = () => controller.abort();
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', forwardAbort, { once: true });
  }

  try {
    const response = await fetchImpl(buildOembedUrl(canonicalUrl), {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      referrerPolicy: 'strict-origin-when-cross-origin',
      signal: controller.signal,
    });

    if (!response.ok) return { ok: false, reason: 'http' };

    const payload = await response.json();
    const preview = pickPreview(payload);
    return preview ? { ok: true, preview } : { ok: false, reason: 'invalid' };
  } catch {
    if (timedOut) return { ok: false, reason: 'timeout' };
    if (signal?.aborted) return { ok: false, reason: 'network' };
    return { ok: false, reason: 'network' };
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', forwardAbort);
  }
}

export { DEFAULT_TIMEOUT_MS, OEMBED_ENDPOINT, PLAYER_BASE };
