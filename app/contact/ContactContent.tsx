'use client';

import { motion } from 'framer-motion';
import ClientContactForm from '@/components/ClientContactForm';
import { GlassCard } from '@/components/ui';
import { Mail, Linkedin, Github, Youtube, Instagram, CheckCircle2 } from 'lucide-react';

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans selection:bg-brand-accent/30 selection:text-white pt-44 pb-24">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-accent w-[600px] h-[600px] top-0 right-0 -translate-y-1/4 opacity-20 pointer-events-none" />
      <div className="orb orb-cyan w-[500px] h-[500px] bottom-0 left-0 translate-y-1/4 opacity-10 pointer-events-none" />

      <div className="section-container relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT: Context & Promise */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6 leading-tight">
                Start a <br /><span className="text-gradient">Conversation.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We are engineers, not salespeople. Tell us how you want to ensure your AI-enabled features are reliable and stable. Select the task you need help with: QA automation, readiness review, generative AI testing, or ongoing support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <GlassCard className="p-8">
                <h3 className="text-white font-bold text-lg mb-6">What happens next?</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-gray-200 block mb-1">Technical Review:</strong> 
                      A lead architect reviews your request, not a BDR.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-gray-200 block mb-1">Response in 24h:</strong> 
                      We'll schedule a technical discovery call, or let you know if we're not the right fit.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-gray-200 block mb-1">Zero Spam:</strong> 
                      Your email stays in our system. You won't be added to a marketing dripper.
                    </span>
                  </li>
                </ul>
              </GlassCard>

              <div className="flex flex-wrap gap-6 items-center">
                <a href="mailto:admin@kaycore.com" className="flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  admin@kaycore.com
                </a>
                <div className="hidden sm:block h-4 w-px bg-white/10" />
                <div className="flex gap-4">
                  <a href="https://x.com/kaycore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com/@kaycore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/kaycore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/company/kaycore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Kaycore-Technologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: High Intent Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-8 sm:p-12 relative overflow-visible">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 blur-[60px] rounded-full pointer-events-none" />
                <ClientContactForm />
              </GlassCard>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
