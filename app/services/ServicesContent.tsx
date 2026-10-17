'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SampleAuditSection } from '@/components/sections/SampleAuditSection';
import { SectionHeader, GlassCard, GlowButton, CardMedia } from '@/components/ui';
import { services } from '@/components/company-data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/animations';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import { FAQ, type FAQItem } from '@/components/FAQ';

const servicesFaqs: FAQItem[] = [
  {
    q: 'What services does Kaycore offer?',
    a: 'AI risk and readiness audits, LLM and generative AI testing, QA for AI-built websites and apps, custom AI QA automation frameworks, continuous quality retainers, and regulated and healthcare AI QA, plus performance testing, embedded QA engineers, and QA consulting. In short: we test AI, and everything AI builds.',
  },
  {
    q: 'Do you offer ongoing support or only one-off projects?',
    a: 'Both. Our Continuous Quality Retainers embed senior QA engineers for continuous regression and release coverage plus ongoing AI risk monitoring, with flexible month-to-month capacity. We also run fixed-scope audits and project engagements.',
  },
  {
    q: 'How does an engagement work?',
    a: 'Four stages: Discovery & Audit (we map your product, codebase, and current QA), Strategy & Planning (a test strategy tailored to your stack and release cadence), Build & Automate (frameworks integrated into your CI/CD), and Monitor & Optimize (continuous coverage that improves each sprint).',
  },
  {
    q: 'How is testing AI different from traditional QA?',
    a: 'AI systems are probabilistic and have an effectively infinite input space, so they can hallucinate, drift, or fail under adversarial prompts. We use statistical evaluation, adversarial testing, and continuous monitoring rather than the fixed pass/fail assertions traditional QA relies on.',
  },
];

// Images keyed by slug so reordering or adding services never mismatches a card and its image
const serviceImages: Record<string, string> = {
  'ai-quality-risk-audit': 'photo-1550751827-4bd374c3f58b',
  'llm-generative-ai-testing': 'photo-1677442136019-21780ecad995',
  'qa-for-ai-built-apps': 'photo-1555949963-ff9fe0c870eb',
  'custom-ai-qa-automation-frameworks': 'photo-1605810230434-7631ac76ec81',
  'continuous-quality-retainers': 'photo-1519389950473-47ba0277781c',
  'regulated-healthcare-ai-qa': 'photo-1516549655169-df83a0774514',
  'performance-testing': 'photo-1518770660439-4636190af475',
  'embedded-qa-engineers': 'photo-1522071820081-009f0129c71c',
  'qa-consulting': 'photo-1542621334-a254cf47733d',
};

const wideServices = new Set(['ai-quality-risk-audit', 'qa-for-ai-built-apps', 'regulated-healthcare-ai-qa']);

export default function ServicesContent() {
  const servicesLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        serviceType: 'AI Quality Engineering',
        provider: {
          '@type': 'Organization',
          name: 'Kaycore Technologies',
          url: 'https://www.kaycore.com',
        },
        areaServed: 'Global',
      },
    })),
  };

  return (
    <div className="min-h-screen text-ink font-sans relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
      <div className="absolute top-0 inset-x-0 h-[500px] bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-accent w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />

      {/* Hero: center-aligned, matching Home pattern */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-6">Our Services</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-navy mb-8 leading-tight tracking-tight">
              Services for Startups <span className="text-gradient">&amp; Enterprises</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-body leading-relaxed">
              We test AI, and everything AI builds: LLM and generative AI systems, and the websites and apps created with AI coding tools. Senior engineers only, from a fixed-scope audit to a continuous quality retainer.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Bento Box Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 lg:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(400px,auto)]">
            {services.map((service, idx) => {
              // Bento spans: rows of wide + narrow, then the three additional services as a row of three
              const isWide = wideServices.has(service.slug);
              const spanClass = isWide ? "md:col-span-2" : "md:col-span-1";
              const image = `https://images.unsplash.com/${serviceImages[service.slug]}?auto=format&fit=crop&w=${isWide ? 1200 : 600}&q=80`;

              return (
                <motion.div
                  key={service.id}
                  id={service.slug}
                  className={`${spanClass} scroll-mt-28`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <div className="glass-surface relative w-full h-full overflow-hidden rounded-3xl hover:shadow-card-hover transition-shadow group flex flex-col">
                    <CardMedia
                      src={image}
                      alt={service.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-36 sm:h-40"
                    />

                    <div className="relative flex flex-col flex-1 justify-between px-8 pb-8 pt-3">
                      <div className="pb-14 transform group-hover:-translate-y-2 transition-transform duration-300">
                        <h2 className="text-3xl font-display font-bold text-navy mb-3">{service.title}</h2>
                        <p className="text-body leading-relaxed max-w-lg mb-6">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-body">
                              <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {service.sample && (
                          <Link
                            href="#sample-audit"
                            className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-accent hover:text-navy transition-colors"
                          >
                            {service.sample.label}
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                      
                      <div className="opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 absolute bottom-8 md:translate-y-4 md:group-hover:translate-y-0 pb-2">
                        <GlowButton href="/contact" variant="secondary" showArrow className="px-6 py-2 text-sm bg-white border border-line text-navy hover:bg-soft">
                          Discuss this service
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Sample deliverable for QA for AI-Built Websites & Apps */}
      <SampleAuditSection id="sample-audit" />

      <FAQ items={servicesFaqs} />

      {/* Embedded Lead Form */}
      <LeadFormCTA
        title="Secure Your AI Systems Today"
        description="Ready to deploy flawless software? Reach out to our leads directly and let us engineer custom risk protocols for your application."
      />
    </div>
  );
}
