import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatBot } from '@/components/ChatBot';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kaycore Technologies | AI-Powered QA & Test Automation',
    template: '%s | Kaycore Technologies',
  },
  description:
    'Kaycore Technologies delivers AI-powered QA services, test automation, and dedicated QA teams. Enterprise-grade quality engineering for SaaS, Fintech, Healthcare & AI startups.',
  keywords: [
    'AI QA services',
    'Test automation company',
    'AI testing solutions',
    'Offshore QA team',
    'Healthcare QA testing',
    'API automation',
    'Performance testing',
    'QA consulting',
    'Dedicated QA teams',
    'AI test automation',
  ],
  authors: [{ name: 'Kaycore Technologies' }],
  creator: 'Kaycore Technologies',
  metadataBase: new URL('https://www.kaycore.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaycore.tech',
    title: 'Kaycore Technologies | AI-Powered QA & Test Automation',
    description:
      'Enterprise-grade AI QA services, test automation, and dedicated QA teams. Ship faster. Break nothing.',
    siteName: 'Kaycore Technologies',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaycore Technologies - AI-Powered Quality Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaycore Technologies | AI-Powered QA & Test Automation',
    description:
      'AI-powered QA services, test automation, and dedicated QA teams for enterprise software.',
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
    description:
      'AI-powered QA services, test automation, and dedicated QA teams for enterprise software teams.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'KA',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@kaycore.tech',
    },
    sameAs: [
      'https://twitter.com/kaycoretech',
      'https://linkedin.com/company/kaycore-technologies',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} antialiased flex flex-col min-h-screen bg-[#030712] text-gray-50 font-sans`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WR8N8H8VRC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WR8N8H8VRC');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
