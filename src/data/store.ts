/**
 * Chrome Web Store signals shown on the site.
 *
 * These values were read from the public listing on 2026-11-20:
 * https://chromewebstore.google.com/detail/tokgrid-—-video-analytics/cilbojljfiabbejnafhjlkofbanoflcl
 *
 * Do not hand-edit these into marketing copy without re-checking the listing.
 * The site deliberately hides social proof until it is meaningful: 9 users and
 * no ratings is negative proof, not a trust signal.
 */
export const STORE_SIGNALS = {
  rating: 0,
  ratingCount: 0,
  users: 9,
  checkedAt: '2026-11-20',
} as const;

export const SOCIAL_PROOF_MINIMUMS = {
  ratingCount: 10,
  users: 100,
} as const;

export function hasSocialProof(): boolean {
  return (
    STORE_SIGNALS.ratingCount >= SOCIAL_PROOF_MINIMUMS.ratingCount ||
    STORE_SIGNALS.users >= SOCIAL_PROOF_MINIMUMS.users
  );
}
