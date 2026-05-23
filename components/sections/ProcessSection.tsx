'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui';
import { processSteps } from '@/components/company-data';

export function ProcessSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 lg:py-32 bg-[#020408]"
    >
      <div className="section-container">
        <SectionHeader
          badge="Our Process"
          title="How We"
          highlight="Work Together"
          description="A proven, transparent methodology for integrating seamlessly with your engineering team."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Subtle gradient timeline line */}
          <div className="absolute left-0 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/80 via-blue-500/20 to-transparent md:block hidden" />
          <div className="absolute left-0 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/80 via-blue-500/20 to-transparent block md:hidden" />
          
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="relative pl-10 md:pl-24 py-6 md:py-8"
            >
              {/* Step Number Badge */}
              <motion.div 
                whileInView={{ scale: 1.2, backgroundColor: "#3b82f6", boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)", borderColor: "#3b82f6" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-0 top-6 md:top-8 -translate-x-1/2 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center z-10"
              >
                <span className="text-white font-mono font-bold text-sm">{step.num}</span>
              </motion.div>

              <div className="bg-white/[0.02] border border-white/5 p-5 sm:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
              </div>
            </motion.div>
          ))}
          {/* No terminal dot */}
        </div>
      </div>
    </motion.section>
  );
}
