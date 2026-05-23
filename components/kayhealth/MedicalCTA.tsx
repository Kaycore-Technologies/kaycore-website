'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Lock, FileCheck, HeartPulse } from 'lucide-react';

interface MedicalCTAProps {
  title?: string;
  highlight?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  showBadges?: boolean;
}

const complianceBadges = [
  { icon: ShieldCheck, label: 'HIPAA' },
  { icon: Lock, label: 'SOC 2' },
  { icon: FileCheck, label: 'HL7 FHIR' },
  { icon: HeartPulse, label: 'FDA 21 CFR' },
];

export function MedicalCTA({
  title = 'Transform Your',
  highlight = 'Practice',
  description = 'Join leading healthcare organizations using AI to reduce administrative burden and improve patient outcomes.',
  ctaText = 'Request a Demo',
  ctaHref = '/contact',
  showBadges = true,
}: MedicalCTAProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 md:p-20 shadow-2xl"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />
          {/* Glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {title}{' '}
              <span className="text-blue-200">{highlight}</span>
            </h2>
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] shadow-lg"
            >
              {ctaText}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>

            {showBadges && (
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/20">
                {complianceBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.label} className="flex items-center gap-2 text-xs font-mono text-blue-200/70 uppercase tracking-wider">
                      <Icon className="w-4 h-4" />
                      {badge.label}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
