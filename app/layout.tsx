import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kaycore Technologies - Core Tech Clear Vision',
    template: '%s | Kaycore Technologies',
  },
  description:
    'Innovative technology solutions for modern businesses. Services in web development, cloud infrastructure, and digital transformation.',
  keywords: ['Technology Consulting', 'Web Development', 'Cloud Infrastructure', 'Digital Transformation', 'AI Solutions', 'Kaycore'],
  authors: [{ name: 'Kaycore Technologies' }],
  creator: 'Kaycore Technologies',
  metadataBase: new URL('https://www.kaycore.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaycore.tech',
    title: 'Kaycore Technologies - Core Tech Clear Vision',
    description: 'Innovative technology solutions for modern businesses.',
    siteName: 'Kaycore Technologies',
    images: [
      {
        url: '/assets/og-image.jpg', // Ensure this image exists
        width: 1200,
        height: 630,
        alt: 'Kaycore Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaycore Technologies',
    description: 'Innovative technology solutions for modern businesses.',
    images: ['/assets/og-image.jpg'],
    creator: '@kaycoretech',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kaycore Technologies',
    url: 'https://www.kaycore.tech',
    logo: 'https://www.kaycore.tech/assets/logo.png',
    description: 'Innovative technology solutions for modern businesses.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '250 Vesey Street',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10281',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/kaycoretech',
      'https://linkedin.com/company/kaycore-technologies',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-[#020617] text-slate-50 transition-colors font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
