import { blogPosts } from '@/components/company-data';
import BlogContent from './BlogContent';

export const metadata = {
  title: 'Blog | Kaycore Technologies',
  description: 'Insights, trends, and playbooks from the teams shipping cloud, data, and AI solutions.',
  openGraph: {
    title: 'Blog | Kaycore Technologies',
    description: 'Insights, trends, and playbooks from the teams shipping cloud, data, and AI solutions.',
  },
};

export default function Blog() {
  // Extract unique categories from blogPosts
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return <BlogContent posts={blogPosts} categories={categories} />;
}


