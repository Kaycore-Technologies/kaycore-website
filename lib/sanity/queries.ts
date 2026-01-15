/**
 * Sanity CMS Query Module
 *
 * Handles all data fetching from Sanity CMS for:
 * - Blog posts
 * - Case studies
 * - Services
 *
 * Features:
 * - Type-safe queries with TypeScript interfaces
 * - Comprehensive error handling with fallbacks
 * - Optimized GROQ queries for performance
 *
 * @module lib/sanity/queries
 */

import { client } from './client';
import type {
  SanityPost,
  SanityCaseStudy,
  SanityService,
  BlockContent,
} from '../types';

// Re-export types for convenience
export type { SanityPost, SanityCaseStudy, SanityService, BlockContent };

// ==================== BLOG POST QUERIES ====================

/**
 * Fetch all published blog posts ordered by publication date (newest first)
 *
 * @returns Promise<SanityPost[]> - Array of all blog posts
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const posts = await getAllPosts();
 */
export async function getAllPosts(): Promise<SanityPost[]> {
  const isConfigured = client.config().projectId !== 'not-configured';
  if (!isConfigured) {
    console.warn('Sanity not configured, returning empty list');
    return [];
  }

  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      category,
      coverImage,
      content,
      publishedAt,
      readTime,
    }
  `;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}


/**
 * Fetch a single blog post by its slug
 *
 * @param slug - The post slug to fetch
 * @returns Promise<SanityPost | null> - The matching post or null if not found
 * @throws Logs error to console if fetch fails, returns null
 *
 * @example
 * const post = await getPostBySlug('my-first-post');
 */
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      author,
      category,
      coverImage,
      content,
      publishedAt,
      readTime,
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

/**
 * Fetch all post slugs for static site generation
 * Used by Next.js generateStaticParams in dynamic routes
 *
 * @returns Promise<string[]> - Array of post slugs
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const slugs = await getPostSlugs();
 */
export async function getPostSlugs(): Promise<string[]> {
  const query = `
    *[_type == "post"] {
      "slug": slug.current
    }
  `;
  try {
    const posts = await client.fetch(query);
    return posts.map((post: { slug: string }) => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

/**
 * Fetch the most recent blog posts
 * Used for homepage blog preview section
 *
 * @param limit - Maximum number of posts to fetch (default: 3)
 * @returns Promise<SanityPost[]> - Array of recent posts
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const recentPosts = await getRecentPosts(5);
 */
export async function getRecentPosts(limit: number = 3): Promise<SanityPost[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      author,
      category,
      coverImage,
      publishedAt,
      readTime,
    }
  `;
  try {
    return await client.fetch(query, { limit: limit - 1 });
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}

// ==================== CASE STUDY QUERIES ====================

/**
 * Fetch all case studies ordered by publication date (newest first)
 *
 * @returns Promise<SanityCaseStudy[]> - Array of all case studies
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const studies = await getAllCaseStudies();
 */
export async function getAllCaseStudies(): Promise<SanityCaseStudy[]> {
  const query = `
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      industry,
      overview,
      problem,
      solution,
      results,
      coverImage,
      duration,
      technologies,
      publishedAt,
      emoji,
    }
  `;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

/**
 * Fetch a single case study by its slug
 *
 * @param slug - The case study slug to fetch
 * @returns Promise<SanityCaseStudy | null> - The matching case study or null
 * @throws Logs error to console if fetch fails, returns null
 *
 * @example
 * const caseStudy = await getCaseStudyBySlug('acme-transformation');
 */
export async function getCaseStudyBySlug(slug: string): Promise<SanityCaseStudy | null> {
  const query = `
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      industry,
      overview,
      problem,
      solution,
      results,
      coverImage,
      duration,
      technologies,
      publishedAt,
      emoji,
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching case study by slug:', error);
    return null;
  }
}

/**
 * Fetch all case study slugs for static site generation
 *
 * @returns Promise<string[]> - Array of case study slugs
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const slugs = await getCaseStudySlugs();
 */
export async function getCaseStudySlugs(): Promise<string[]> {
  const query = `
    *[_type == "caseStudy"] {
      "slug": slug.current
    }
  `;
  try {
    const studies = await client.fetch(query);
    return studies.map((study: { slug: string }) => study.slug);
  } catch (error) {
    console.error('Error fetching case study slugs:', error);
    return [];
  }
}

// ==================== SERVICE QUERIES ====================

/**
 * Fetch all services ordered alphabetically by title
 *
 * @returns Promise<SanityService[]> - Array of all services
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const services = await getAllServices();
 */
export async function getAllServices(): Promise<SanityService[]> {
  const isConfigured = client.config().projectId !== 'not-configured';
  if (!isConfigured) {
    console.warn('Sanity not configured, returning empty list');
    return [];
  }

  const query = `
    *[_type == "service"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      icon,
      fullDescription,
      features,
      coverImage,
    }
  `;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}


/**
 * Fetch a single service by its slug
 *
 * @param slug - The service slug to fetch
 * @returns Promise<SanityService | null> - The matching service or null
 * @throws Logs error to console if fetch fails, returns null
 *
 * @example
 * const service = await getServiceBySlug('web-development');
 */
export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  const query = `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      icon,
      fullDescription,
      features,
      coverImage,
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return null;
  }
}

/**
 * Fetch all service slugs for static site generation
 *
 * @returns Promise<string[]> - Array of service slugs
 * @throws Logs error to console if fetch fails, returns empty array
 *
 * @example
 * const slugs = await getServiceSlugs();
 */
export async function getServiceSlugs(): Promise<string[]> {
  const query = `
    *[_type == "service"] {
      "slug": slug.current
    }
  `;
  try {
    const services = await client.fetch(query);
    return services.map((service: { slug: string }) => service.slug);
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    return [];
  }
}

/**
 * Fetch the most recent news items
 *
 * @returns Promise<any[]> - Array of recent news
 */
export async function getRecentNews(): Promise<any[]> {
  const isConfigured = client.config().projectId !== 'not-configured';
  if (!isConfigured) {
    console.warn('Sanity not configured, returning empty list');
    return [];
  }

  const query = `
    *[_type == "news"] | order(date desc)[0...3] {
      _id,
      title,
      date,
      category,
      excerpt,
      "image": image.asset->url,
      link,
      "slug": slug.current
    }
  `;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
