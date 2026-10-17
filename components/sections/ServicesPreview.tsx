'use client';

import { motion } from 'framer-motion';
import { SectionHeader, CardMedia } from '@/components/ui';
import Link from 'next/link';
import { services } from '@/components/company-data';

// The six core services (the first six in company-data), with homepage-only art keyed by slug
const previewArt: Record<string, { bgClass: string; media: string }> = {
  'ai-quality-risk-audit': { bgClass: "bg-surface", media: "photo-1677442136019-21780ecad995" },
  'llm-generative-ai-testing': { bgClass: "bg-surface", media: "photo-1550751827-4bd374c3f58b" },
  'qa-for-ai-built-apps': { bgClass: "bg-surface", media: "photo-1555949963-ff9fe0c870eb" },
  'custom-ai-qa-automation-frameworks': { bgClass: "bg-surface", media: "photo-1605810230434-7631ac76ec81" },
  'continuous-quality-retainers': { bgClass: "bg-surface", media: "photo-1519389950473-47ba0277781c" },
  'regulated-healthcare-ai-qa': { bgClass: "bg-surface", media: "photo-1516549655169-df83a0774514" },
};

// Bento spans match the Services page: the three longest descriptions get the wide cards
const wideSlugs = new Set(['ai-quality-risk-audit', 'qa-for-ai-built-apps', 'regulated-healthcare-ai-qa']);
const bentoItems = services.slice(0, 6).map((service) => {
  const isWide = wideSlugs.has(service.slug);
  return {
    title: service.title,
    desc: service.description,
    colSpan: isWide ? "md:col-span-2" : "md:col-span-1",
    bgClass: previewArt[service.slug].bgClass,
    href: service.sample?.href ?? `/services#${service.slug}`,
    sampleLabel: service.sample?.label,
    media: `https://images.unsplash.com/${previewArt[service.slug].media}?auto=format&fit=crop&w=${isWide ? 800 : 500}&q=80`,
  };
});

export function ServicesPreview() {
  return (
    <section className="py-16 lg:py-20 relative">
      <div className="section-container">
        <SectionHeader badge="Capabilities" title="The Architecture of" highlight="Reliability" description="We test AI, and everything AI builds, for startups and enterprises." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, idx) => (
            <Link href={item.href} key={idx} className={`block h-full ${item.colSpan}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border border-line shadow-card hover:shadow-card-hover transition-shadow group h-full flex flex-col ${item.bgClass}`}
              >
                <CardMedia
                  src={item.media}
                  alt=""
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-36 sm:h-40"
                />

                <div className="relative px-5 pb-6 pt-3 sm:px-8 sm:pb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-body">{item.desc}</p>
                  {item.sampleLabel && (
                    <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-accent">
                      {item.sampleLabel} <span aria-hidden="true">&rarr;</span>
                    </span>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
