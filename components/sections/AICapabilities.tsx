'use client';

import { motion } from 'framer-motion';
import { SectionHeader, GlassCard } from '@/components/ui';
import { Cpu, ShieldCheck, Zap, GitBranch } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: "AI-Powered Test Generation",
    description: "Automatically generate comprehensive test cases from user stories, PRD documents, and API specs using LLM workflows built for your stack."
  },
  {
    icon: Zap,
    title: "Self-Healing Automation",
    description: "Our AI frameworks are built to detect UI changes and repair broken test selectors, so your team spends less time maintaining tests and more time shipping."
  },
  {
    icon: ShieldCheck,
    title: "Predictive Defect Analysis",
    description: "Analyze historical code commits and test failures to predict where bugs are most likely to occur in upcoming releases."
  },
  {
    icon: GitBranch,
    title: "Intelligent Test Selection",
    description: "Run only the tests affected by code changes. Dramatically reduce CI/CD pipeline execution time without sacrificing coverage."
  }
];

export function AICapabilities() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 lg:py-20 relative overflow-hidden bg-white/40 border-y border-line"
    >
      {/* Soft light blobs */}
      <div className="absolute -top-1/2 left-1/4 w-[800px] h-[800px] bg-c2/10 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-c1/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <SectionHeader
          badge="Custom AI QA Frameworks"
          title="Testing Reimagined with"
          highlight="Artificial Intelligence"
          description="We build custom AI QA automation frameworks into your QA lifecycle, so testing keeps pace with how fast you ship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              >
                <GlassCard className="p-5 sm:p-8 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 h-full hover:border-brand-accent/40 transition-all duration-500 group overflow-hidden relative">
                  {/* Subtle inner card glow on hover */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-c2/10 rounded-full blur-[50px] group-hover:bg-c2/20 transition-all duration-700 pointer-events-none" />
                  
                  {/* Icon tile */}
                  <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border border-brand-accent/20 bg-brand-accent/10 group-hover:shadow-card transition-all duration-500">
                    <Icon className="w-7 h-7 text-brand-accent group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-brand-accent transition-colors">{cap.title}</h3>
                    <p className="text-body text-base leading-relaxed">{cap.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
