import type { Metadata } from 'next';

const defaultImage = '/assets/og-image.jpg';
const defaultImageAlt = 'Kaycore Technologies: we test AI, and everything AI builds';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  /** Render the title as-is instead of through the "%s | Kaycore" template. */
  absoluteTitle?: boolean;
}

/**
 * Per-page metadata with a self-referencing canonical and matching Open Graph
 * and Twitter tags. Relative URLs resolve against metadataBase in app/layout.tsx.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | Kaycore`;
  const imageUrl = image ?? defaultImage;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Kaycore Technologies',
      url: path,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt ?? defaultImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
