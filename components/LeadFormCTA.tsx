'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface LeadFormCTAProps {
  title?: string;
  description?: string;
}

// Real, verifiable trust signals placed directly above the form, where doubt peaks.
const trustSignals = [
  'Senior engineers only',
  'You keep the code and datasets',
  'A lead architect reviews your request',
  'Zero spam, no BDRs',
];

export function LeadFormCTA({
  title = "Ready for a Real Partner?",
  description = "Let's build something that survives the real world. Reach out to our leads directly and let us engineer custom risk protocols for your application."
}: LeadFormCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      {/* Light call-to-action block: a translucent panel (the homepage dot grid shows through) with a soft
          logo-colour glow, holding LeadForm's solid white variant. */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-white/60 border border-line shadow-card px-5 py-12 sm:px-10 lg:px-16 lg:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 k-accent-bar" aria-hidden="true" />
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-c1/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-c2/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        <h2 className="relative text-4xl md:text-5xl font-display font-bold mb-6 text-navy tracking-tight">
          {title}
        </h2>
        <p className="relative text-lg text-body mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <ul className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 max-w-2xl mx-auto">
          {trustSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-2 text-sm text-body">
              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
              {signal}
            </li>
          ))}
        </ul>

        <div className="relative max-w-2xl mx-auto text-left">
          <LeadForm theme="kaycore" />
        </div>
      </div>
    </motion.section>
  );
}
