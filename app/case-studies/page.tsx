import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import { caseStudies, caseStudyDisclosure } from '@/content/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies | AI Quality Engineering in Practice',
  description:
    'Representative AI quality engineering engagements across fintech, healthcare, AI SaaS, and e-commerce, showing how Kaycore validates AI systems for production.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  const studies = [...caseStudies].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 inset-x-0 h-[420px] bg-grid opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-5">Case Studies</p>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-6">
            AI quality engineering in practice
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            How we validate AI systems for production across regulated and high-stakes industries. Each
            engagement leaves the team with the test suites and datasets to keep.
          </p>
        </div>
      </section>

      {/* Disclosure */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-gray-400">
          <Info className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
          <p>{caseStudyDisclosure}</p>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block h-full">
              <article className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-500">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-xs font-bold text-brand-accent border border-white/10">
                    {study.industry}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">{study.client}</p>
                  <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-accent transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{study.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.outcomes.slice(0, 3).map((o) => (
                      <span key={o.label} className="px-2.5 py-1 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold">
                        {o.value}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-semibold mt-auto">
                    Read the case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
