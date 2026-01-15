import { MetadataRoute } from 'next';
import { getPostSlugs, getCaseStudySlugs, getServiceSlugs } from '@/lib/sanity/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.kaycore.tech';

  // Dynamic routes
  const postSlugs = await getPostSlugs();
  const caseStudySlugs = await getCaseStudySlugs();
  const serviceSlugs = await getServiceSlugs();

  const posts = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const caseStudies = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const services = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...posts, ...caseStudies, ...services];
}
