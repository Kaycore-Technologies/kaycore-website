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
    default: 'Kaycore Technologies | We Test AI, and Everything AI Builds',
    template: '%s | Kaycore Technologies',
  },
  description:
    'Kaycore Technologies is a founder-led AI Quality Engineering firm. We test AI systems, and the websites and apps AI builds, for startups and enterprises.',
  keywords: [
    'AI quality engineering',
    'AI testing services',
    'LLM testing',
    'Generative AI testing',
    'AI risk audit',
    'QA for AI-built apps',
    'AI QA automation frameworks',
    'Healthcare AI QA',
    'Test automation',
    'Performance testing',
    'QA consulting',
  ],
  authors: [{ name: 'Kaycore Technologies' }],
  creator: 'Kaycore Technologies',
  metadataBase: new URL('https://www.kaycore.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaycore.com',
    title: 'Kaycore Technologies | We Test AI, and Everything AI Builds',
    description:
      'We test AI, and everything AI builds. Founder-led AI Quality Engineering for startups and enterprises.',
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
    title: 'Kaycore Technologies | We Test AI, and Everything AI Builds',
    description:
      'We test AI, and everything AI builds. Founder-led AI Quality Engineering for startups and enterprises.',
    images: ['/assets/og-image.jpg'],
    creator: '@kaycore',
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
    url: 'https://www.kaycore.com',
    logo: 'https://www.kaycore.com/assets/logo.png',
    description:
      'Kaycore Technologies is a founder-led AI Quality Engineering firm. We test AI systems, and the websites and apps AI builds, for startups and enterprises.',
    slogan: 'We test AI, and everything AI builds.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'KA',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'admin@kaycore.com',
    },
    sameAs: [
      'https://x.com/kaycore',
      'https://linkedin.com/company/kaycore',
      'https://youtube.com/@kaycore',
      'https://instagram.com/kaycore',
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Ayushi Shukla',
      jobTitle: 'Founder and CEO',
      sameAs: 'https://www.linkedin.com/in/dr-ayushi-shukla-646700a8/',
    },
    employee: {
      '@type': 'Person',
      name: 'Kulish Kulshrestha',
      jobTitle: 'CTO',
      sameAs: 'https://www.linkedin.com/in/kulish-kulshrestha/',
    },
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kaycore Technologies',
    url: 'https://www.kaycore.com',
    publisher: {
      '@type': 'Organization',
      name: 'Kaycore Technologies',
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
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
