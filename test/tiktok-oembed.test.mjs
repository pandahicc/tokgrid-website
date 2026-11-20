import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildOembedUrl,
  buildPlayerUrl,
  fetchTikTokPreview,
  pickPreview,
} from '../src/lib/tiktok-oembed.mjs';

const VIDEO = 'https://www.tiktok.com/@creator/video/7312345678901234567';

test('buildOembedUrl encodes the video URL as a query parameter', () => {
  const url = buildOembedUrl(VIDEO);
  assert.equal(url.startsWith('https://www.tiktok.com/oembed?url='), true);
  assert.equal(
    url.includes(encodeURIComponent(VIDEO)),
    true,
  );
});

test('buildPlayerUrl only accepts a numeric product id', () => {
  assert.equal(
    buildPlayerUrl('7312345678901234567'),
    'https://www.tiktok.com/player/v1/7312345678901234567?embed_from=oembed&autoplay=0',
  );
  assert.equal(
    buildPlayerUrl('7312345678901234567', { autoplay: true }),
    'https://www.tiktok.com/player/v1/7312345678901234567?embed_from=oembed&autoplay=1',
  );
  assert.equal(buildPlayerUrl(''), null);
  assert.equal(buildPlayerUrl('abc'), null);
  assert.equal(buildPlayerUrl('12<script>'), null);
  assert.equal(buildPlayerUrl(null), null);
  assert.equal(buildPlayerUrl(undefined), null);
});

test('pickPreview reads the embed id and dimensions', () => {
  const preview = pickPreview({
    embed_product_id: '7312345678901234567',
    width: '325',
    height: '578',
    html: '<iframe></iframe>',
  });
  assert.equal(preview.width, 325);
  assert.equal(preview.height, 578);
  assert.equal(
    preview.playerUrl,
    'https://www.tiktok.com/player/v1/7312345678901234567?embed_from=oembed&autoplay=0',
  );
});

test('pickPreview falls back to a 9:16 ratio when dimensions are missing', () => {
  const preview = pickPreview({ embed_product_id: '7312345678901234567' });
  assert.deepEqual(
    { width: preview.width, height: preview.height },
    { width: 9, height: 16 },
  );
});

test('pickPreview rejects payloads without a usable id', () => {
  assert.equal(pickPreview(null), null);
  assert.equal(pickPreview({}), null);
  assert.equal(pickPreview({ embed_product_id: 'nope' }), null);
});

test('fetchTikTokPreview returns a preview for a 200 JSON response', async () => {
  const fetchImpl = async () => ({
    ok: true,
    json: async () => ({
      embed_product_id: '7312345678901234567',
      width: '325',
      height: '578',
    }),
  });

  const result = await fetchTikTokPreview(VIDEO, { fetchImpl });
  assert.equal(result.ok, true);
  assert.equal(result.preview.width, 325);
});

test('fetchTikTokPreview reports HTTP and payload failures', async () => {
  const httpError = await fetchTikTokPreview(VIDEO, {
    fetchImpl: async () => ({ ok: false, status: 400, json: async () => ({}) }),
  });
  assert.deepEqual(httpError, { ok: false, reason: 'http' });

  const badPayload = await fetchTikTokPreview(VIDEO, {
    fetchImpl: async () => ({ ok: true, json: async () => ({ html: '<iframe></iframe>' }) }),
  });
  assert.deepEqual(badPayload, { ok: false, reason: 'invalid' });
});

test('fetchTikTokPreview reports network errors', async () => {
  const result = await fetchTikTokPreview(VIDEO, {
    fetchImpl: async () => {
      throw new TypeError('Failed to fetch');
    },
  });
  assert.deepEqual(result, { ok: false, reason: 'network' });
});

test('fetchTikTokPreview aborts after the timeout', async () => {
  const fetchImpl = (_url, init) =>
    new Promise((_resolve, reject) => {
      init.signal.addEventListener('abort', () => reject(new Error('aborted')), {
        once: true,
      });
    });

  const result = await fetchTikTokPreview(VIDEO, { fetchImpl, timeoutMs: 5 });
  assert.deepEqual(result, { ok: false, reason: 'timeout' });
});
