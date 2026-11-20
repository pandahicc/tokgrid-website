import { getCollection, type CollectionEntry } from 'astro:content';
import { FEATURE_GUIDES } from '../data/site';

export type Guide = CollectionEntry<'guides'>;

export async function getPublishedGuides(): Promise<Guide[]> {
  const guides = await getCollection('guides', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  return guides.sort((a, b) => {
    const byDate = b.data.pubDate.getTime() - a.data.pubDate.getTime();
    if (byDate !== 0) return byDate;
    return a.data.title.localeCompare(b.data.title);
  });
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function formatMonth(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(date);
}

export function guidePath(entry: Guide): string {
  return `/guides/${entry.id}/`;
}

export function getRelatedGuides(entry: Guide, all: Guide[], limit = 3): Guide[] {
  const bySlug = new Map(all.map((guide) => [guide.id, guide]));
  const related: Guide[] = [];

  for (const slug of entry.data.related) {
    const match = bySlug.get(slug);
    if (match && match.id !== entry.id && !related.some((item) => item.id === match.id)) {
      related.push(match);
    }
  }

  if (related.length < limit) {
    const sameCategory = all.filter(
      (guide) =>
        guide.id !== entry.id &&
        guide.data.category === entry.data.category &&
        !related.some((item) => item.id === guide.id),
    );
    related.push(...sameCategory);
  }

  if (related.length < limit) {
    const fallback = all.filter(
      (guide) => guide.id !== entry.id && !related.some((item) => item.id === guide.id),
    );
    related.push(...fallback);
  }

  return related.slice(0, limit);
}

export function getPrevNext(
  entry: Guide,
  all: Guide[],
): { prev: Guide | null; next: Guide | null } {
  const index = all.findIndex((guide) => guide.id === entry.id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  };
}

export function getGuidesForFeature(
  featureHref: string,
  all: Guide[],
  limit = 2,
): Guide[] {
  return all.filter((guide) => guide.data.featureHref === featureHref).slice(0, limit);
}

/**
 * Feature pages use a curated list so every guide is reachable from its related
 * feature page. Falls back to the frontmatter `featureHref` when no list exists.
 */
export function getGuidesForFeaturePage(featureHref: string, all: Guide[]): Guide[] {
  const slugs = FEATURE_GUIDES[featureHref];
  if (!slugs) return getGuidesForFeature(featureHref, all, 3);

  const bySlug = new Map(all.map((guide) => [guide.id, guide]));
  const picked: Guide[] = [];

  for (const slug of slugs) {
    const guide = bySlug.get(slug);
    if (guide && !picked.some((item) => item.id === guide.id)) picked.push(guide);
  }

  return picked.length > 0 ? picked : getGuidesForFeature(featureHref, all, 3);
}
