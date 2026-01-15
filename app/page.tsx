import { getRecentNews } from '@/lib/sanity/queries';
import HomeContent from './HomeContent';

// Mock data for news (Fallback)
const mockNewsItems = [
  {
    id: 1,
    title: 'Kaycore Partners with Leading FinTech for AI Transformation',
    date: 'October 15, 2025',
    category: 'Press Release',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Strategic partnership aims to revolutionize fraud detection systems using advanced machine learning models.',
  },
  {
    id: 2,
    title: 'The Future of Cloud Security: 2026 Trends Report',
    date: 'November 2, 2025',
    category: 'Insights',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Our experts analyze emerging threats and the zero-trust architectures needed to combat them.',
  },
  {
    id: 3,
    title: 'Kaycore Expands Operations into APAC Region',
    date: 'December 10, 2025',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'New regional headquarters in Singapore will support our growing client base in Asia-Pacific.',
  },
];

export const metadata = {
  title: 'Kaycore Technologies - Core Tech Clear Vision',
  description: 'Innovative technology solutions for modern businesses. Services in web development, cloud infrastructure, and digital transformation.',
  openGraph: {
    title: 'Kaycore Technologies - Core Tech Clear Vision',
    description: 'Innovative technology solutions for modern businesses. Services in web development, cloud infrastructure, and digital transformation.',
    images: [{ url: '/assets/og-image.jpg' }],
  },
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
