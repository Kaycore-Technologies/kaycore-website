import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { getCaseStudy, caseStudies, caseStudyDisclosure } from '@/content/case-studies';
import { LeadFormCTA } from '@/components/LeadFormCTA';

const baseUrl = 'https://www.kaycore.com';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: 'Case Study Not Found | Kaycore Technologies' };

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: 'article',
      title: study.title,
      description: study.summary,
      url: `${baseUrl}/case-studies/${study.slug}`,
      images: [{ url: study.image, width: 1600, height: 900, alt: study.title }],
    },
  };
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const { Body } = study;
  const url = `${baseUrl}/case-studies/${study.slug}`;
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.summary,
    image: study.image,
    datePublished: study.date,
    dateModified: study.date,
    author: { '@type': 'Organization', name: 'Kaycore Technologies' },
    publisher: {
      '@type': 'Organization',
      name: 'Kaycore Technologies',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/assets/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: study.industry,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${baseUrl}/case-studies` },
      { '@type': 'ListItem', position: 3, name: study.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article>
        <header className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 inset-x-0 h-[420px] bg-grid opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-300 truncate max-w-[40%]">{study.industry}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold">{study.industry}</span>
              <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">{study.client}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight">
              {study.title}
            </h1>
          </div>
        </header>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
            <Image src={study.image} alt={study.title} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {study.outcomes.map((o) => (
              <div key={o.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <div className="text-2xl font-bold text-brand-accent mb-2">{o.value}</div>
                <div className="text-xs text-gray-400 leading-snug">{o.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className="article-prose mb-2">
            <h2>The challenge</h2>
            <p>{study.challenge}</p>
          </div>

          {/* Approach */}
          <div className="article-prose">
            <h2>Our approach</h2>
            <ul>
              {study.approach.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>

          {/* Body */}
          <div className="article-prose mt-2">
            <Body />
          </div>

          {/* Disclosure */}
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-gray-500 mt-14">
            <Info className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
            <p>{caseStudyDisclosure}</p>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-display font-bold text-white mb-8">More case studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((r) => (
            <Link key={r.slug} href={`/case-studies/${r.slug}`} className="group block rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-brand-accent/30 transition-all">
              <p className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">{r.industry}</p>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{r.title}</h3>
              <span className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-semibold">
                Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> All case studies
          </Link>
        </div>
      </section>

      <LeadFormCTA
        title="Have a similar system to validate?"
        description="Talk to our lead quality engineers about testing your AI for production. You keep the test suites, datasets, and results."
      />
    </div>
  );
}
