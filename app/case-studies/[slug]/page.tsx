import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Scale, TrendingUp, Wrench, type LucideIcon } from 'lucide-react';
import { getCaseStudy, caseStudies, caseStudiesPublished } from '@/content/case-studies';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import { getArticle } from '@/content/articles';
import { caseStudyIcons, caseStudyImage } from '@/components/case-study-icons';
import Image from 'next/image';

const baseUrl = 'https://www.kaycore.com';
const ogImage = {
  url: '/assets/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Kaycore Technologies: we test AI, and everything AI builds',
};

// White card with a soft navy-tinted shadow, as on the rest of the light theme.
const glassPanel = 'glass-surface rounded-3xl';

// Each approved section heading gets its own treatment, so the story reads as a sequence
// rather than a stack of identical boxes. The copy itself is unchanged.
const sectionStyle: Record<string, { icon: LucideIcon; frame: string }> = {
  'What we built': { icon: Wrench, frame: `${glassPanel}` },
  'The decision that mattered': {
    icon: Scale,
    frame: 'rounded-3xl bg-gradient-to-br from-c1/15 via-white to-c2/20 border border-c2/30 shadow-card',
  },
  'What it produced': { icon: TrendingUp, frame: `${glassPanel} border-l-4 border-l-c2` },
};

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
  if (!study) return { title: 'Case Study Not Found' };

  const ogTitle = study.seoTitle ?? `${study.title} | Case Study | Kaycore`;

  return {
    title: study.seoTitle ? { absolute: study.seoTitle } : `${study.title} | Case Study`,
    description: study.summary,
    keywords: study.tags,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: 'article',
      title: ogTitle,
      description: study.summary,
      url: `${baseUrl}/case-studies/${study.slug}`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: study.summary,
      images: [ogImage.url],
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

  const url = `${baseUrl}/case-studies/${study.slug}`;
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const previous = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const guide = getArticle(study.guide);
  const Icon = caseStudyIcons[study.slug];

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.summary,
    image: `${baseUrl}${ogImage.url}`,
    datePublished: caseStudiesPublished,
    dateModified: caseStudiesPublished,
    keywords: study.tags.join(', '),
    author: { '@type': 'Organization', name: 'Kaycore Technologies' },
    publisher: {
      '@id': `${baseUrl}/#organization`,
      '@type': 'Organization',
      name: 'Kaycore Technologies',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/assets/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
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
    <div className="min-h-screen text-ink font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article>
        <header className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 inset-x-0 h-[420px] bg-grid [mask-image:linear-gradient(to_bottom,black_40%,transparent)] pointer-events-none" />
          <div className="orb orb-accent w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted">
                <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-body truncate max-w-[40%]" aria-current="page">{study.title}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              {Icon && (
                <span className="inline-flex w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-c1 to-c2 text-white items-center justify-center shadow-card" aria-hidden="true">
                  <Icon className="w-7 h-7" />
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy leading-tight tracking-tight mb-6">
                {study.title}
              </h1>
              <p className="text-lg sm:text-xl text-body leading-relaxed">{study.summary}</p>
            </div>
            <div className="lg:col-span-5 relative aspect-video rounded-3xl overflow-hidden border border-line shadow-card">
              <Image src={caseStudyImage(study.slug)} alt="" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
            </div>

            {/* Headline figures, quoted exactly from the case study */}
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.highlights.map((h) => (
                <div key={h.label} className={`relative overflow-hidden flex flex-col-reverse p-6 ${glassPanel}`}>
                  <div className="absolute inset-x-0 top-0 h-1 k-accent-bar" aria-hidden="true" />
                  <dt className="mt-3 text-sm text-body leading-snug">{h.label}</dt>
                  <dd className="text-4xl sm:text-5xl font-bold leading-none tracking-tight text-gradient">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="orb orb-purple w-[520px] h-[520px] top-20 -left-48 opacity-15 pointer-events-none" />
          <div className="orb orb-cyan w-[460px] h-[460px] bottom-10 -right-40 opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              {study.body.map((section, i) => {
                if (!section.heading) {
                  // The opening section has no heading in the copy: shown as the lede.
                  return (
                    <section key={`intro-${i}`} className={`p-6 sm:p-8 lg:p-10 ${glassPanel}`}>
                      {section.paragraphs.map((p, j) => (
                        <p key={p} className={j === 0 ? 'text-lg sm:text-xl text-ink leading-relaxed' : 'mt-5 text-body leading-relaxed'}>
                          {p}
                        </p>
                      ))}
                    </section>
                  );
                }
                const style = sectionStyle[section.heading] ?? { icon: null, frame: glassPanel };
                const SectionIcon = style.icon;
                return (
                  <section key={section.heading} className={`article-prose p-6 sm:p-8 lg:p-10 ${style.frame}`}>
                    <div className="flex items-center gap-3 mb-2">
                      {SectionIcon && (
                        <span className="w-10 h-10 shrink-0 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex items-center justify-center" aria-hidden="true">
                          <SectionIcon className="w-5 h-5" />
                        </span>
                      )}
                      <h2 className="!m-0">{section.heading}</h2>
                    </div>
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </section>
                );
              })}
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className={`p-6 ${glassPanel}`}>
                <h2 className="text-sm font-mono text-brand-accent uppercase tracking-[0.2em] mb-4">Stack</h2>
                <ul className="flex flex-wrap gap-2" aria-label="Tags">
                  {study.tags.map((tag) => (
                    <li key={tag} className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden p-6 rounded-3xl bg-gradient-to-br from-c1/20 via-white to-c2/25 border border-c2/30 shadow-card">
                <h2 className="text-lg font-bold text-navy mb-2">Facing something similar?</h2>
                <p className="text-sm text-body leading-relaxed mb-5">
                  Talk to our lead quality engineers about your suite. We will go deeper on this work on a call, under NDA where that helps.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-2 transition-colors">
                  Discuss a similar engagement <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {guide && (
                <Link href={`/blog/${guide.slug}`} className={`group block p-6 ${glassPanel} glass-card`}>
                  <p className="flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
                    <BookOpen className="w-4 h-4" aria-hidden="true" /> Related guide
                  </p>
                  <p className="font-bold text-navy leading-snug group-hover:text-brand-accent transition-colors">{guide.title}</p>
                </Link>
              )}
            </aside>
          </div>
        </div>
      </article>

      {/* Previous and next */}
      <nav aria-label="More case studies" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href={`/case-studies/${previous.slug}`} className={`group block p-6 glass-card ${glassPanel}`}>
            <p className="flex items-center gap-1.5 text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" /> Previous case study
            </p>
            <p className="text-lg font-bold text-navy group-hover:text-brand-accent transition-colors">{previous.title}</p>
          </Link>
          <Link href={`/case-studies/${next.slug}`} className={`group block p-6 sm:text-right glass-card ${glassPanel}`}>
            <p className="flex items-center sm:justify-end gap-1.5 text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">
              Next case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </p>
            <p className="text-lg font-bold text-navy group-hover:text-brand-accent transition-colors">{next.title}</p>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted hover:text-navy transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All case studies
          </Link>
        </div>
      </nav>

      <LeadFormCTA
        title="Have a similar system to validate?"
        description="Talk to our lead quality engineers about testing your AI for production. You keep the test suites, datasets, and results."
      />
    </div>
  );
}
