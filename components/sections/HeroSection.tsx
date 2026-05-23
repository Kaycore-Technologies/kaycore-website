'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Media Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          src="/assets/videos/hero-background.mp4" 
        />
        {/* Strict Black Overlay with Blur */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-10" />
      </div>

      <div className="relative z-20 text-center space-y-8 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          Next-Generation Quality Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-[1.05]"
        >
          Ship Faster.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg">
            Break Nothing.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          We help teams ship AI systems that behave reliably, safely, and consistently in production, not just demos.
        </motion.p>

        {/* AI-QE Definition Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-4xl mx-auto p-5 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-left mt-8 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">What is AI Quality Engineering?</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Systematic validation for probabilistic software. Traditional QA asserts that <code className="bg-black/50 px-1.5 py-0.5 rounded text-cyan-400 font-mono text-xs md:text-sm">if(x) return y</code>. It fails with LLMs because they are non-deterministic, infinite-state systems. AI Quality Engineering (AI-QE) combines data science, adversarial security, and behavioral psychology to bound the uncertainty of generative models.
          </p>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {['Hallucination Rates', 'Drift Detection', 'Adversarial Attacks'].map((badge, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-medium backdrop-blur-sm">
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col xs:flex-row gap-4 justify-center items-center pt-8 w-full px-2"
        >
          <GlowButton href="/contact" variant="primary" showArrow className="px-8 py-4 text-lg">
            Book a Free Discovery Call
          </GlowButton>
          <GlowButton href="/services" variant="secondary" className="px-8 py-4 text-lg backdrop-blur-md bg-white/5 border border-white/10">
            Explore Services
          </GlowButton>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12 text-xs font-mono text-gray-500 tracking-widest uppercase flex flex-wrap justify-center gap-x-4 gap-y-1"
        >
          <span>Senior Engineers Only</span><span className="hidden xs:inline">•</span><span>AI-First Approach</span><span className="hidden xs:inline">•</span><span>Zero Outsourcing</span>
        </motion.div>
      </div>
    </section>
  );
}