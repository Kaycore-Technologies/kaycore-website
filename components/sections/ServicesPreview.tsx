'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui';
import Link from 'next/link';
import { services } from '@/components/company-data';

// The six core services (the first six in company-data), with homepage-only art keyed by slug
const previewArt: Record<string, { bgClass: string; media: string }> = {
  'ai-quality-risk-audit': { bgClass: "bg-gradient-to-br from-purple-900/40 to-blue-900/40", media: "photo-1677442136019-21780ecad995" },
  'llm-generative-ai-testing': { bgClass: "bg-cyan-900/20", media: "photo-1550751827-4bd374c3f58b" },
  'qa-for-ai-built-apps': { bgClass: "bg-sky-900/20", media: "photo-1555949963-ff9fe0c870eb" },
  'custom-ai-qa-automation-frameworks': { bgClass: "bg-gradient-to-bl from-slate-800 to-indigo-900/40", media: "photo-1605810230434-7631ac76ec81" },
  'continuous-quality-retainers': { bgClass: "bg-emerald-900/20", media: "photo-1551288049-bebda4e38f71" },
  'regulated-healthcare-ai-qa': { bgClass: "bg-rose-900/20", media: "photo-1516549655169-df83a0774514" },
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
    media: `https://images.unsplash.com/${previewArt[service.slug].media}?auto=format&fit=crop&w=${isWide ? 800 : 500}&q=80`,
  };
});

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeader badge="Capabilities" title="The Architecture of" highlight="Reliability" description="We test AI, and everything AI builds, for startups and enterprises." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, idx) => (
            <Link href="/services" key={idx} className={`block ${item.colSpan}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border border-white/10 group h-64 sm:h-80 flex flex-col justify-end p-5 sm:p-8 ${item.bgClass}`}
              >
                {/* Media Background with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${item.media})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
                
                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
