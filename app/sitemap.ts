import type { MetadataRoute } from 'next';
import { articles } from '@/content/articles';
import { caseStudies } from '@/content/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kaycore.com';

  const routes = [
    '',
    '/services',
    '/products',
    '/industries',
    '/about',
    '/case-studies',
    '/blog',
    '/resources/llm-readiness-checklist',
    '/careers',
    '/contact',
    '/kayhealth',
    '/security-policy',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(a.updated || a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${baseUrl}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries, ...caseStudyEntries];
}
