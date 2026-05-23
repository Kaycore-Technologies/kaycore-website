'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui';

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="orb orb-accent w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
      
      <div className="section-container relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-20 rounded-[3rem] border border-brand-accent/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Transform Your QA?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Talk to our team about how AI-powered testing can accelerate your releases and eliminate production bugs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlowButton href="/contact" showArrow className="px-10 py-5 text-lg">
              Schedule a Discovery Call
            </GlowButton>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest font-mono">
            No Sales Pressure • Direct to Engineering
          </p>
        </motion.div>
      </div>
    </section>
  );
}
