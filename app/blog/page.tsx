import type { Metadata } from 'next';
import BlogContent from './BlogContent';
import { articles, articleCategories } from '@/content/articles';

export const metadata: Metadata = {
  title: 'Blog | AI Quality Engineering Insights',
  description:
    'Data-backed guides on AI quality engineering, LLM testing, and choosing an AI testing partner, from the Kaycore engineering team.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = [...articles]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((a) => ({
      id: a.slug,
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      date: a.date,
      author: a.author,
      category: a.category,
      readTime: a.readTime,
      image: a.image,
    }));

  return <BlogContent posts={posts} categories={articleCategories} />;
}
