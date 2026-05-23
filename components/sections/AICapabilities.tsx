'use client';

import { motion } from 'framer-motion';
import { SectionHeader, GlassCard } from '@/components/ui';
import { Cpu, ShieldCheck, Zap, GitBranch } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: "AI-Powered Test Generation",
    description: "Automatically generate comprehensive test cases from user stories, PRD documents, and API specs using our proprietary LLM workflows."
  },
  {
    icon: Zap,
    title: "Self-Healing Automation",
    description: "Our AI frameworks automatically detect UI changes and heal broken test selectors, reducing maintenance overhead by 70%."
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
      className="py-24 lg:py-32 relative overflow-hidden bg-[#030712] border-y border-white/5"
    >
      {/* High-fidelity abstract noise and gradient meshes */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/></svg>')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
      <div className="absolute -top-1/2 left-1/4 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <SectionHeader
          badge="AI Capabilities"
          title="Testing Reimagined with"
          highlight="Artificial Intelligence"
          description="We embed AI directly into the QA lifecycle, turning testing from a bottleneck into a competitive advantage."
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
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-[50px] group-hover:bg-brand-accent/15 transition-all duration-700 pointer-events-none" />
                  
                  {/* Advanced Animated Icon Container */}
                  <div className="w-16 h-16 shrink-0 rounded-2xl relative overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(14,165,233,0.1)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.25)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-[#030712] opacity-80" />
                    {/* Spinning Conic Gradient Border Effect */}
                    <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,211,238,0.6)_360deg)]" />
                    <div className="absolute inset-[2px] rounded-[14px] bg-[#030712] flex items-center justify-center">
                       <Icon className="w-7 h-7 text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{cap.title}</h3>
                    <p className="text-gray-300 text-base leading-relaxed">{cap.description}</p>
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
