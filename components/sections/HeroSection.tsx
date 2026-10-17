'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/GlowButton';
import { useIsDark } from '@/lib/theme';

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

// Hero videos per theme. To use a new one, replace the files, keeping the names.
const HERO_MEDIA = {
  light: { video: '/assets/videos/hero-background-light.mp4', poster: '/assets/videos/hero-background-light-poster.jpg' },
  dark: { video: '/assets/videos/hero-background-dark.mp4', poster: '/assets/videos/hero-background-dark-poster.jpg' },
};

export function HeroSection() {
  const media = HERO_MEDIA[useIsDark() ? 'dark' : 'light'];
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Media Background */}
      <div className="absolute inset-0 -z-20">
        <video 
          key={media.video}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster={media.poster}
          src={media.video}
        />
        {/* Veil in the page colour: calmer behind the text, the video shows through at the edges */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(246,248,252,0.88)_0%,rgba(246,248,252,0.7)_55%,rgba(246,248,252,0.45)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(7,11,20,0.82)_0%,rgba(7,11,20,0.6)_55%,rgba(7,11,20,0.35)_100%)]" />
      </div>


      <div className="relative z-20 text-center space-y-8 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-surface inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-body"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          Founder-led AI Quality Engineering
        </motion.div>

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.05] text-navy"
        >
          We test AI, and{' '}
          <span className="md:block text-gradient-hero">
            everything AI builds.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-body max-w-3xl mx-auto leading-relaxed"
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
          {heroProblems.map((problem) => (
            <div key={problem.title} className="glass-surface p-5 md:p-7 rounded-2xl border-t-4 border-t-c2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-navy mb-3">{problem.title}</h2>
              <p className="text-base md:text-lg text-body leading-relaxed">{problem.body}</p>
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
          <GlowButton href="/services" variant="secondary" className="px-8 py-4 text-lg">
            Explore Services
          </GlowButton>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-12 text-xs font-mono text-muted tracking-widest uppercase flex flex-wrap justify-center gap-x-4 gap-y-1"
        >
          <span>Senior Engineers Only</span><span className="hidden xs:inline">•</span><span>AI-First Approach</span><span className="hidden xs:inline">•</span><span>No Junior Hand-offs</span>
        </motion.div>
      </div>
    </section>
  );
}