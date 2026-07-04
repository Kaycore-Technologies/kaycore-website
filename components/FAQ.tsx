'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  eyebrow?: string;
}

/**
 * Accessible FAQ built on native <details>/<summary> (keyboard-operable, no JS required)
 * plus FAQPage JSON-LD so the answers are eligible for Google rich results and
 * citable by AI answer engines (GEO).
 */
export function FAQ({ items, title = 'Frequently Asked Questions', eyebrow = 'FAQ' }: FAQProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-display font-bold text-white">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-1 open:bg-white/[0.07] transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 text-lg font-semibold text-white marker:hidden">
                {item.q}
                <Plus className="w-5 h-5 shrink-0 text-brand-accent transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="text-gray-400 leading-relaxed pb-5 pr-8">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
