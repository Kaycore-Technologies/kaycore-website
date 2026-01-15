/**
 * CMS content model schemas
 * Define your content structures here
 */

/**
 * Example Blog Post schema
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  tags: string[];
}

/**
 * Example Page schema
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
