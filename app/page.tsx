import type { Metadata } from 'next';
import { getRecentNews } from '@/lib/sanity/queries';
import HomeContent from './HomeContent';

// Mock data for news (Fallback)
const mockNewsItems = [
  {
    id: 1,
    title: 'Kaycore Releases Framework for EU AI Act Compliance',
    date: 'October 15, 2025',
    category: 'Regulation',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Our new open-source toolkit helps enterprises map their model inventory to risk categories defined by the latest EU legislation.',
  },
  {
    id: 2,
    title: 'Mitigating Hallucinations in Financial RAG Systems',
    date: 'November 2, 2025',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1639322537228-ad7117a767f1?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Case study: How we reduced error rates by 94% for a global wealth management firm using facts-first decoding.',
  },
  {
    id: 3,
    title: 'The Rise of Adversarial Attacks on Agentic Workflows',
    date: 'December 10, 2025',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Detailed analysis of new threat vectors targeting autonomous agents and how semantic firewalls can prevent them.',
  },
];

export const metadata: Metadata = {
  title: 'AI Quality Engineering & LLM Testing Services | Kaycore',
  description: 'Kaycore helps teams validate and trust AI systems with expert AI Quality Engineering, LLM testing, and AI risk validation for production readiness.',
  keywords: ['AI Quality Engineering', 'AI Testing Services', 'LLM Validation', 'AI Risk Assessment', 'Enterprise AI Reliability'],
};

export default async function Home() {
  const sanityNews = await getRecentNews();

  // Transform Sanity news to match the component's expected structure
  const transformedSanityNews = sanityNews.map((item: any) => ({
    id: item._id,
    title: item.title,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    category: item.category,
    image: item.image,
    excerpt: item.excerpt,
  }));

  const newsItems = transformedSanityNews.length > 0 ? transformedSanityNews : mockNewsItems;

  return <HomeContent newsItems={newsItems} />;
}
