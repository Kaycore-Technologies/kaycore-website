'use client';

import { motion } from 'framer-motion';
import ClientContactForm from '@/components/ClientContactForm';
import {
  ScrollReveal,
  TextReveal,
  StaggerContainer,
  AnimatedItem
} from '@/components/animations';
import { TiltCard } from '@/components/ui';
import {
  Mail,
  Linkedin,
  Github,
  Check,
  ArrowRight
} from 'lucide-react';

export default function ContactContent() {
  return (
    <div className="bg-brand-dark text-white selection:bg-brand-accent/30 min-h-screen">

      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Liquid Navy Gradient Mesh */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-brand-accent/10 blur-[150px] rounded-full mix-blend-screen opacity-60 animate-blob" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#0A1A3F] blur-[150px] rounded-full mix-blend-screen opacity-80 animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[30%] w-[800px] h-[800px] bg-purple-900/10 blur-[180px] rounded-full mix-blend-screen opacity-50 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* LEFT: Context & Promise */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-6xl font-bold font-serif tracking-tight text-white mb-6 leading-tight">
                  Start a <br /><span className="text-brand-accent">Conversation.</span>
                </h1>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  We are engineers, not salespeople. Tell us about your architecture, your risks, or your goals. We'll give you a technical perspective, not a pitch deck.
                </p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-white font-bold text-lg mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="bg-green-500/20 p-1 rounded-full text-green-500 mt-1 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-400 text-sm leading-relaxed">
                      <strong>Technical Review:</strong> A lead architect reviews your use request, not a BDR.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-green-500/20 p-1 rounded-full text-green-500 mt-1 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-400 text-sm leading-relaxed">
                      <strong>Response in 24h:</strong> We&apos;ll schedule a technical discovery call — or let you know if we&apos;re not the right fit (typically within 1 business day).
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-green-500/20 p-1 rounded-full text-green-500 mt-1 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-400 text-sm leading-relaxed">
                      <strong>Zero Spam:</strong> Your email stays in our system. You won't be added to a marketing dripper.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-6 items-center">
                <a href="mailto:admin@kaycore.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  admin@kaycore.com
                </a>
                <div className="h-4 w-px bg-white/10" />
                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/kaycore" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/kaycore" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High Intent Form */}
          <div className="lg:col-span-1 border-l border-white/5 hidden lg:block" /> {/* Divider */}

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0B1121] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[60px] rounded-full point-events-none" />
              <ClientContactForm />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
