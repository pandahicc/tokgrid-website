import test from 'node:test';
import assert from 'node:assert/strict';

import { MAX_INPUT_LENGTH, parseTikTokVideoUrl } from '../src/lib/tiktok-url.mjs';

const VIDEO = 'https://www.tiktok.com/@creator/video/7312345678901234567';

test('accepts a full video URL and strips query and hash', () => {
  const result = parseTikTokVideoUrl(
    `${VIDEO}?is_from_webapp=1&sender_device=pc#comments`,
  );
  assert.deepEqual(result, {
    ok: true,
    kind: 'video',
    canonicalUrl: VIDEO,
  });
});

test('accepts a bare domain without a scheme', () => {
  const result = parseTikTokVideoUrl('www.tiktok.com/@creator/video/7312345678901234567');
  assert.equal(result.ok, true);
  assert.equal(result.canonicalUrl, VIDEO);
});

test('accepts an uppercase host and a trailing slash', () => {
  const result = parseTikTokVideoUrl('https://WWW.TIKTOK.COM/@creator/video/7312345678901234567/');
  assert.equal(result.ok, true);
  assert.equal(result.canonicalUrl, VIDEO);
});

test('normalises the mobile host to www', () => {
  const result = parseTikTokVideoUrl('https://m.tiktok.com/@creator/video/7312345678901234567');
  assert.equal(result.canonicalUrl, VIDEO);
});

test('accepts the legacy /v/ video path', () => {
  const result = parseTikTokVideoUrl('https://m.tiktok.com/v/7312345678901234567.html');
  assert.deepEqual(result, {
    ok: true,
    kind: 'video',
    canonicalUrl: 'https://m.tiktok.com/v/7312345678901234567.html',
  });
});

test('accepts vm and vt short links', () => {
  const vm = parseTikTokVideoUrl('https://vm.tiktok.com/ZMabcdefg/');
  assert.deepEqual(vm, {
    ok: true,
    kind: 'short',
    canonicalUrl: 'https://vm.tiktok.com/ZMabcdefg/',
  });

  const vt = parseTikTokVideoUrl('vt.tiktok.com/ZMabcdefg');
  assert.equal(vt.ok, true);
  assert.equal(vt.kind, 'short');
});

test('accepts the /t/ short path on www', () => {
  const result = parseTikTokVideoUrl('https://www.tiktok.com/t/ZMabcdefg/');
  assert.equal(result.ok, true);
  assert.equal(result.kind, 'short');
  assert.equal(result.canonicalUrl, 'https://www.tiktok.com/t/ZMabcdefg/');
});

test('rejects a profile, hashtag, or live link', () => {
  for (const input of [
    'https://www.tiktok.com/@creator',
    'https://www.tiktok.com/tag/tiktokmademebuyit',
    'https://www.tiktok.com/live/1234567890',
  ]) {
    assert.equal(parseTikTokVideoUrl(input).ok, false, input);
    assert.equal(parseTikTokVideoUrl(input).reason, 'not-video', input);
  }
});

test('rejects other hosts and lookalike domains', () => {
  for (const input of [
    'https://example.com/@creator/video/7312345678901234567',
    'https://www.tiktok.com.evil.example/@creator/video/7312345678901234567',
    'https://not-tiktok.com/@creator/video/7312345678901234567',
  ]) {
    const result = parseTikTokVideoUrl(input);
    assert.equal(result.ok, false, input);
    assert.equal(result.reason, 'not-tiktok', input);
  }
});

test('rejects empty, non-string, oversized, and malformed input', () => {
  assert.equal(parseTikTokVideoUrl('').reason, 'empty');
  assert.equal(parseTikTokVideoUrl('   ').reason, 'empty');
  assert.equal(parseTikTokVideoUrl(null).reason, 'empty');
  assert.equal(parseTikTokVideoUrl(undefined).reason, 'empty');
  assert.equal(parseTikTokVideoUrl(42).reason, 'empty');

  const oversized = `${VIDEO}${'a'.repeat(MAX_INPUT_LENGTH)}`;
  assert.equal(parseTikTokVideoUrl(oversized).reason, 'too-long');

  assert.equal(parseTikTokVideoUrl('not a url at all').ok, false);
});

test('does not accept a short numeric video path without a video segment', () => {
  const result = parseTikTokVideoUrl('https://www.tiktok.com/1234567890');
  assert.equal(result.ok, false);
  assert.equal(result.reason, 'not-video');
});
