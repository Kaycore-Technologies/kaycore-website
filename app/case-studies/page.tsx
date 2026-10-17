import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies, caseStudiesIntro } from '@/content/case-studies';
import { pageMetadata } from '@/lib/seo';
import { caseStudyIcons, caseStudyImage } from '@/components/case-study-icons';
import { CardMedia } from '@/components/ui';
import { DotGridBackground } from '@/components/ui/DotGridBackground';

// White card with a soft navy-tinted shadow, as on the rest of the light theme.
const glassPanel = 'glass-surface rounded-3xl';

// Approved heading "Selected work": last word takes the site's gradient accent, as on About.
const headingWords = caseStudiesIntro.heading.split(' ');
const headingAccent = headingWords.pop();
const headingLead = headingWords.join(' ');

export const metadata = pageMetadata({
  title: 'QA and Test Automation Case Studies',
  description:
    'Four test automation engagements on a multi-tenant commerce operations platform: Playwright UI suites, GraphQL API testing, CI stability and AI-assisted QA.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen text-ink font-sans overflow-x-hidden relative">
      <DotGridBackground />

      {/* Hero */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 inset-x-0 h-[420px] bg-grid [mask-image:linear-gradient(to_bottom,black_40%,transparent)] pointer-events-none" />
        <div className="orb orb-accent w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-5">Case Studies</p>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-navy leading-tight tracking-tight mb-6">
            {headingLead} <span className="text-gradient">{headingAccent}</span>
          </h1>
          <div className="space-y-4 max-w-2xl mx-auto">
            {caseStudiesIntro.paragraphs.map((p) => (
              <p key={p} className="text-lg text-body leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="orb orb-purple w-[520px] h-[520px] top-10 -left-40 opacity-15 pointer-events-none" />
        <div className="orb orb-cyan w-[460px] h-[460px] bottom-0 -right-32 opacity-10 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => {
            const Icon = caseStudyIcons[study.slug];
            return (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block h-full">
                <article className={`relative h-full flex flex-col overflow-hidden hover:-translate-y-1 duration-500 ${glassPanel} glass-card`}>
                  <div className="absolute inset-x-0 top-0 z-10 h-1 k-accent-bar" aria-hidden="true" />
                  <CardMedia src={caseStudyImage(study.slug)} alt="" sizes="(max-width: 768px) 100vw, 50vw" className="h-40 sm:h-48" />
                  <div className="px-7 pb-7 pt-3 sm:px-8 sm:pb-8 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      {Icon && (
                        <span className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-c1 to-c2 text-white flex items-center justify-center shadow-card" aria-hidden="true">
                          <Icon className="w-6 h-6" />
                        </span>
                      )}
                      <h2 className="text-xl sm:text-2xl font-bold text-navy leading-snug group-hover:text-brand-accent transition-colors">
                        {study.title}
                      </h2>
                    </div>

                    {/* Headline figures, quoted exactly from the case study */}
                    <dl className="grid grid-cols-2 gap-4 mb-6 rounded-2xl bg-soft/80 border border-line p-5">
                      {study.highlights.slice(0, 2).map((h) => (
                        <div key={h.label} className="flex flex-col-reverse">
                          <dt className="mt-2 text-xs text-body leading-snug">{h.label}</dt>
                          <dd className="text-3xl sm:text-4xl font-bold leading-none tracking-tight text-gradient">{h.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <p className="text-sm text-body leading-relaxed mb-6 flex-1">{study.summary}</p>
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
            );
          })}
        </div>
      </section>
    </div>
  );
}
