/**
 * Centralized type definitions for the entire application
 * Includes CMS data types, API types, and UI component types
 */

// ==================== CMS DATA TYPES ====================

/**
 * Block type for Sanity portable text / rich content
 * Represents array of content blocks (paragraphs, headings, lists, etc.)
 */
export type BlockContent = Array<{
  _type: string;
  _key?: string;
  [key: string]: unknown;
}>;

/**
 * Blog post document from Sanity CMS
 */
export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  author: string;
  category: string;
  coverImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  content: BlockContent;
  publishedAt: string;
  readTime: number;
}

/**
 * Case study document from Sanity CMS
 */
export interface SanityCaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  industry: string;
  overview: string;
  problem: BlockContent;
  solution: BlockContent;
  results: {
    metrics: Array<{ label: string; value: string }>;
    achievements: string[];
  };
  coverImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  duration: string;
  technologies: string[];
  publishedAt: string;
  emoji?: string;
}

/**
 * Service document from Sanity CMS
 */
export interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  icon: string;
  fullDescription: BlockContent;
  features: string[];
  coverImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

/**
 * Home page singleton document from Sanity CMS
 */
export interface SanityHome {
  _id: string;
  title: string;
  heroHeadline: string;
  heroSubheading: string;
  heroCta: string;
  featuredCaseStudy?: SanityCaseStudy;
  testimonials?: Array<{
    _key: string;
    name: string;
    role: string;
    company: string;
    quote: string;
    avatar?: { asset: { url: string } };
  }>;
}

// ==================== API TYPES ====================

/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact form validation errors
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * API response wrapper for contact form submission
 */
export interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}

// ==================== UI COMPONENT TYPES ====================

/**
 * Generic badge/tag component props
 */
export interface BadgeProps {
  label: string;
  variant?: 'blue' | 'green' | 'purple' | 'orange';
  size?: 'sm' | 'md';
}

/**
 * Card component props for reusable card layouts
 */
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

/**
 * Stat item for statistics displays
 */
export interface StatItem {
  value: string;
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

/**
 * Service card item for service listings
 */
export interface ServiceCardItem {
  _id: string;
  title: string;
  description: string;
  icon: string;
  slug: { current: string };
}

/**
 * Blog post preview for listings
 */
export interface BlogPostPreview {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  author: string;
  category: string;
  publishedAt: string;
  coverImage?: {
    asset: { url: string };
    alt?: string;
  };
}

/**
 * Case study preview for listings
 */
export interface CaseStudyPreview {
  _id: string;
  title: string;
  slug: { current: string };
  industry: string;
  overview: string;
  emoji?: string;
  coverImage?: {
    asset: { url: string };
    alt?: string;
  };
}

// ==================== SECTION TYPES ====================

/**
 * Hero section configuration
 */
export interface HeroSectionProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundVariant?: 'blue' | 'gradient';
}

/**
 * Feature/Why Us item
 */
export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

/**
 * Team member
 */
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

/**
 * Testimonial
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
