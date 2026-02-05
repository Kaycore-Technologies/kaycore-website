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
    default: 'Kaycore Technologies | AI Quality Engineering & Validation',
    template: '%s | Kaycore Technologies',
  },
  description:
    'The enterprise standard for AI Quality Engineering. We validate, secure, and optimize AI systems for reliability, compliance, and business impact.',
  keywords: [
    'AI Quality Engineering',
    'AI Validation',
    'LLM Testing',
    'AI Governance',
    'Machine Learning Security',
    'Kaycore',
    'Enterprise AI',
  ],
  authors: [{ name: 'Kaycore Technologies' }],
  creator: 'Kaycore Technologies',
  metadataBase: new URL('https://www.kaycore.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaycore.tech',
    title: 'Kaycore Technologies | AI Quality Engineering & Validation',
    description: 'The enterprise standard for AI Quality Engineering. Ensuring your AI systems are safe, reliable, and compliant.',
    siteName: 'Kaycore Technologies',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaycore Technologies - AI Quality Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaycore Technologies | AI Quality Engineering',
    description: 'We validate and secure AI systems for enterprise reliability.',
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
