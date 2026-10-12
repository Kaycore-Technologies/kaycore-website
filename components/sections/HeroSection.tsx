'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';

// Kaycore's two problem statements, worded as on its LinkedIn page
const heroProblems = [
  {
    title: 'AI systems that behave unpredictably.',
    body: 'LLMs and generative AI are probabilistic, so the same input can produce different outputs. We validate, test, and safeguard these systems for accuracy, safety, and consistency in production, not just in demos.',
  },
  {
    title: 'Software built by AI.',
    body: 'Websites and apps created with Claude Code, Cursor, and other AI coding tools ship quickly, but often with hidden defects. We catch those defects before launch, so you release sooner and spend less fixing problems afterwards.',
  },
];

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
          Founder-led AI Quality Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.05]"
        >
          We test AI, and{' '}
          <span className="md:block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg">
            everything AI builds.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          Kaycore Technologies is a founder-led AI Quality Engineering firm. We partner with startups and enterprises on two problems that traditional QA was never designed for.
        </motion.p>

        {/* The two problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mt-8"
        >
          {heroProblems.map((problem, i) => (
            <div key={problem.title} className="p-5 md:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <p className="text-sm font-mono text-brand-accent mb-3">0{i + 1}</p>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3">{problem.title}</h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">{problem.body}</p>
            </div>
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
          <span>Senior Engineers Only</span><span className="hidden xs:inline">•</span><span>AI-First Approach</span><span className="hidden xs:inline">•</span><span>No Junior Hand-offs</span>
        </motion.div>
      </div>
    </section>
  );
}