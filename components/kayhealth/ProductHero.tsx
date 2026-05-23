'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductHeroProps {
  badge: string;
  productName: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function ProductHero({
  badge,
  productName,
  tagline,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: ProductHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        {/* Cinematic Clinical Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none scale-105 z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')` }}
        />
        {/* Light Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10" />
        
        {/* Soft blobs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[180px] animate-blob pointer-events-none z-[11]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-200/15 rounded-full blur-[150px] animate-blob pointer-events-none z-[11]" style={{ animationDelay: '2s' }} />
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-[12]" style={{
        backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-20 text-center space-y-8 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-md text-sm font-medium text-blue-700"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight leading-[1.05] text-slate-900"
        >
          {productName}
          <br />
          <span className="text-gradient-health-light">{tagline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            {ctaText}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 ease-in-out hover:scale-105"
            >
              {secondaryCtaText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
