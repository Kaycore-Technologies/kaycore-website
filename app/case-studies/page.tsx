'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ScrollReveal,
  StaggerContainer,
  AnimatedItem,
  TextReveal,
} from '@/components/animations';
import { BeforeAfterSlider, MagneticButton, ParallaxSection } from '@/components/ui';
import { caseStudies } from '@/components/company-data';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filteredStudies = activeIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.industry === activeIndustry);

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-brand-accent selection:text-white">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
        className="h-[60vh] flex items-center"
        overlayOpacity={0.8}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextReveal
              text="Transformational Stories"
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            />
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light mb-10">
              Explore how we partner with global enterprises to solve complex challenges through engineering excellence.
            </p>
          </motion.div>

          <div className="flex justify-center gap-4">
            <Link href="#projects">
              <MagneticButton className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] transition-all">
                View Interactions
              </MagneticButton>
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-30 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {['All', 'Financial Services', 'Retail', 'Healthcare', 'Manufacturing', 'Media & Entertainment'].map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeIndustry === industry
                  ? 'bg-white text-[#020617]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh]">
        <div className="mb-16">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((caseStudy) => (
              <AnimatedItem key={caseStudy.id}>
                <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full">
                  <div className="h-full bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-brand-accent/30 group-hover:-translate-y-2 flex flex-col relative">
                    <div className="relative h-64 overflow-hidden">
                      {/* Dark gradient overlay for text legibility if image fails or for style */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10 opacity-60" />
                      {/* Pseudo-image since we don't have real files yet, keeping placeholder logic safe */}
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-brand-accent/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg border border-white/10">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 relative z-20">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-brand-accent transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed flex-1">
                        {caseStudy.overview}
                      </p>

                      <div className="space-y-4 border-t border-white/10 pt-6">
                        {Object.entries(caseStudy.results).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-bold text-sky-300 font-mono">{value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center text-sm font-bold text-brand-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Read Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Impact by the Numbers</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                We pair strategy with delivery to move critical metrics—whether that is reliability, speed, or cost.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  ['Projects', '100+'],
                  ['Client Savings', '$50M+'],
                  ['Industries', '15+'],
                  ['Uptime', '99.99%']
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#020617]/50 border border-white/10 rounded-2xl p-6 text-center hover:border-brand-accent/30 transition-colors">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">{label}</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white font-mono">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#020617] border border-white/10 rounded-3xl p-2 shadow-2xl">
              <div className="bg-white/5 rounded-2xl p-6 md:p-8">
                <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider">Drag to Compare</p>
                <BeforeAfterSlider
                  beforeSrc="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='800' height='500' fill='%230f172a'/><path d='M0 0h800v500H0z' fill='none' stroke='%23334155' stroke-width='2'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%23ef4444' font-family='sans-serif' font-weight='bold'>Before</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%2394a3b8' font-family='sans-serif'>Legacy Monolith</text></svg>"
                  afterSrc="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><defs><linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23020617;stop-opacity:1' /><stop offset='100%' style='stop-color:%231e3a8a;stop-opacity:1' /></linearGradient></defs><rect width='800' height='500' fill='url(%23grad1)'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%2310b981' font-family='sans-serif' font-weight='bold'>After</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23e2e8f0' font-family='sans-serif'>Microservices Architecture</text></svg>"
                  beforeLabel="Legacy"
                  afterLabel="Modernized"
                  alt="Before and after modernization metrics"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-blue-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            From strategy to execution, we help you navigate your modernization initiatives with confidence.
          </p>
          <div className="pt-8">
            <Link href="/contact">
              <MagneticButton className="bg-white text-[#020617] font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-2xl">
                Start Your Project
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
