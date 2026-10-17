import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getCaseStudy, caseStudies, caseStudiesPublished } from '@/content/case-studies';
import { LeadFormCTA } from '@/components/LeadFormCTA';

const baseUrl = 'https://www.kaycore.com';
const ogImage = {
  url: '/assets/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Kaycore Technologies: we test AI, and everything AI builds',
};

// White card with a soft navy-tinted shadow, as on the rest of the light theme.
const glassPanel = 'glass-surface rounded-3xl';

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
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

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
    <div className="min-h-screen text-ink font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article>
        <header className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 inset-x-0 h-[420px] bg-grid [mask-image:linear-gradient(to_bottom,black_40%,transparent)] pointer-events-none" />
          <div className="orb orb-accent w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted">
                <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-body truncate max-w-[40%]" aria-current="page">{study.title}</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy leading-tight tracking-tight mb-6">
              {study.title}
            </h1>
            <p className="text-lg sm:text-xl text-body leading-relaxed mb-6">{study.summary}</p>
            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {study.tags.map((tag) => (
                <li key={tag} className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="orb orb-purple w-[520px] h-[520px] top-20 -left-48 opacity-15 pointer-events-none" />
          <div className="orb orb-cyan w-[460px] h-[460px] bottom-10 -right-40 opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {study.body.map((section, i) => (
              <section key={section.heading ?? `intro-${i}`} className={`article-prose p-6 sm:p-8 lg:p-10 ${glassPanel}`}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-display font-bold text-navy mb-8">More case studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((r) => (
            <Link key={r.slug} href={`/case-studies/${r.slug}`} className={`group block p-6 glass-card ${glassPanel}`}>
              <p className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-2">{r.tags[0]}</p>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-brand-accent transition-colors">{r.title}</h3>
              <span className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-semibold">
                Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted hover:text-navy transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All case studies
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
