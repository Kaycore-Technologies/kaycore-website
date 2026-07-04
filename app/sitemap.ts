import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kaycore.com';

  const routes = [
    '',
    '/services',
    '/industries',
    '/about',
    '/case-studies',
    '/blog',
    '/careers',
    '/contact',
    '/kayhealth',
    '/security-policy',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
