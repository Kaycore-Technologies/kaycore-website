import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies, caseStudiesIntro } from '@/content/case-studies';

const baseUrl = 'https://www.kaycore.com';

export const metadata: Metadata = {
  title: 'Case Studies | Selected Work',
  description: caseStudiesIntro.paragraphs[0],
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    title: 'Case Studies | Selected Work',
    description: caseStudiesIntro.paragraphs[0],
    url: `${baseUrl}/case-studies`,
    images: [{ url: '/assets/og-image.jpg', alt: 'Kaycore Technologies - AI-Powered Quality Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Selected Work',
    description: caseStudiesIntro.paragraphs[0],
    images: ['/assets/og-image.jpg'],
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 inset-x-0 h-[420px] bg-grid opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-5">Case Studies</p>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-6">
            {caseStudiesIntro.heading}
          </h1>
          <div className="space-y-4 max-w-2xl mx-auto">
            {caseStudiesIntro.paragraphs.map((p) => (
              <p key={p} className="text-lg text-gray-400 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block h-full">
              <article className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-500">
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{study.summary}</p>
                  <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tags">
                    {study.tags.map((tag) => (
                      <li key={tag} className="px-2.5 py-1 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-semibold mt-auto">
                    Read the case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
