'use client';

import { industries } from '@/components/company-data';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations';
import { GlowButton, CardMedia } from '@/components/ui';
import { LeadFormCTA } from '@/components/LeadFormCTA';

// Unsplash images keyed by slug so reordering industries never mismatches a card and its image
const industryImages: Record<string, string> = {
  'ai-startups': 'photo-1509062522246-3755977927d7',
  saas: 'photo-1498050108023-c5249f4df085',
  fintech: 'photo-1611974789855-9c2a0a7236a3',
  healthcare: 'photo-1516549655169-df83a0774514',
  retail: 'photo-1556742049-0cfed4f6a45d',
  logistics: 'photo-1578575437130-527eed3abbec',
};

export default function IndustriesContent() {
  return (
    <div className="min-h-screen text-ink font-sans relative overflow-x-hidden">

      {/* Hero Section: centered, consistent with Home/Services/About */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="orb orb-accent w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-6">Industries</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-navy mb-8 leading-tight tracking-tight">
              Industries{' '}
              <span className="text-gradient">We Serve</span>
            </h1>
            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-3xl mx-auto">
              We serve AI startups, SaaS platforms, FinTech, and healthcare and healthtech companies, delivering trust, compliance, and confidence before go-live.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Industry Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {industries.map((ind, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <div className="glass-surface relative overflow-hidden rounded-3xl hover:shadow-card-hover transition-shadow group h-full flex flex-col">
                    <CardMedia
                      src={`https://images.unsplash.com/${industryImages[ind.slug]}?auto=format&fit=crop&w=600&q=80`}
                      alt={ind.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="h-44 sm:h-48"
                    />

                    <div className="relative flex flex-col px-8 pb-8 pt-3 lg:px-10 lg:pb-10">

                      <h2 className="text-2xl font-bold text-navy mb-3">{ind.name}</h2>
                      <p className="text-body leading-relaxed text-sm max-w-sm transition-all duration-300 group-hover:mb-4">{ind.description}</p>

                      <div className="space-y-3 overflow-hidden transition-all duration-500 ease-out max-h-[200px] opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-[160px] md:group-hover:opacity-100">
                        {ind.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-body">
                            <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                            <span>{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <div className="section-divider" />
      <LeadFormCTA
        title="Don't see your industry?"
        description="We test AI, and everything AI builds. If your product uses AI or was built with it, talk to us about shipping it with certainty."
      />
    </div>
  );
}
