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
      className="pt-24 pb-24 lg:pb-32 relative z-10 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 max-w-2xl mx-auto">
          {trustSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
              {signal}
            </li>
          ))}
        </ul>

        <div className="max-w-2xl mx-auto text-left">
          <LeadForm theme="dark" />
        </div>
      </div>
    </motion.section>
  );
}
