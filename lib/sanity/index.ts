/**
 * Sanity CMS Module Barrel Export
 * 
 * Centralized access to all Sanity CMS utilities
 * 
 * @example
 * import { client, getAllPosts } from '@/lib/sanity';
 * import type { SanityPost } from '@/lib/sanity';
 */

export { client, default } from './client';
export {
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
  getRecentPosts,
  getAllCaseStudies,
  getCaseStudyBySlug,
  getCaseStudySlugs,
  getAllServices,
  getServiceBySlug,
  getServiceSlugs,
} from './queries';

export type { SanityPost, SanityCaseStudy, SanityService, BlockContent } from './queries';
