import type { Metadata } from 'next';

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaycore.com';

export function generateMetadata(
  title: string,
  description: string,
  pathname: string,
  image?: string,
  ogType: 'website' | 'article' = 'website',
  additionalMeta?: Record<string, string>
): Metadata {
  const url = `${baseUrl}${pathname}`;
  const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/og-image.png`;

  return {
    title: `${title} | Kaycore Technologies`,
    description,
    keywords: [
      'cloud computing',
      'digital transformation',
      'AI & ML',
      'DevOps',
      'cybersecurity',
      'technology consulting',
      ...Object.values(additionalMeta || {}),
    ],
    authors: [{ name: 'Kaycore Technologies LLP' }],
    creator: 'Kaycore Technologies',
    publisher: 'Kaycore Technologies',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: `${title} | Kaycore Technologies`,
      description,
      url,
      siteName: 'Kaycore Technologies',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      type: ogType,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Kaycore Technologies`,
      description,
      images: [imageUrl],
      creator: '@kaycore_tech',
    },
    alternates: {
      canonical: url,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
  };
}

export function generateBlogMetadata(
  post: {
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    slug: string | { current: string };
    coverImage?: { asset?: { url: string } };
  }
): Metadata {
  const slug = typeof post.slug === 'string' ? post.slug : post.slug.current;
  const pathname = `/blog/${slug}`;
  const image = post.coverImage?.asset?.url;

  return generateMetadata(
    post.title,
    post.excerpt,
    pathname,
    image,
    'article',
    {
      'article:author': post.author,
      'article:published_time': new Date(post.publishedAt).toISOString(),
    }
  );
}

export function generateCaseStudyMetadata(
  caseStudy: {
    title: string;
    overview: string;
    slug: string | { current: string };
    client: string;
    industry: string;
    coverImage?: { asset?: { url: string } };
  }
): Metadata {
  const slug = typeof caseStudy.slug === 'string' ? caseStudy.slug : caseStudy.slug.current;
  const pathname = `/case-studies/${slug}`;
  const image = caseStudy.coverImage?.asset?.url;

  return generateMetadata(
    caseStudy.title,
    `${caseStudy.client} - ${caseStudy.industry} | ${caseStudy.overview.substring(0, 100)}...`,
    pathname,
    image,
    'article',
    {
      'article:tag': caseStudy.industry,
    }
  );
}
