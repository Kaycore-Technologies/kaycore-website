'use client';

import { motion } from 'framer-motion';
import { ProductHero } from '@/components/kayhealth/ProductHero';
import { MedicalCTA } from '@/components/kayhealth/MedicalCTA';
import { LeadForm } from '@/components/LeadForm';
import Link from 'next/link';
import { ShieldCheck, Lock, FileCheck, HeartPulse, ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'KayScribe',
    tagline: 'AI Medical Scribe',
    description: 'Automate clinical documentation in real-time. Reduce physician burnout and reclaim hours lost to paperwork.',
    href: '/kayhealth/kayscribe',
    media: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    comingSoon: true,
  }
];

const complianceBadges = [
  { icon: ShieldCheck, label: 'HIPAA Compliant' },
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: FileCheck, label: 'HL7 FHIR Ready' },
  { icon: HeartPulse, label: 'FDA 21 CFR Part 11' },
];

export default function KayHealthContent() {
  return (
    <div className="font-sans selection:bg-blue-200/50 selection:text-blue-900 bg-slate-50">

      {/* Hero */}
      <ProductHero
        badge="KayHealth — AI for Healthcare"
        productName="AI for the People"
        tagline="Who Heal."
        description="We build AI-powered tools that reduce physician burnout, automate clinical workflows, and bring intelligent care to every patient interaction."
        ctaText="Explore Products"
        ctaHref="#products"
        secondaryCtaText="Talk to Us"
        secondaryCtaHref="/contact"
      />

      <div className="section-divider-light" />

      {/* Mission */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 md:py-32 relative overflow-hidden bg-white"
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Healthcare Deserves <br />
                <span className="text-blue-600">Better Technology.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Physicians spend over <strong className="text-slate-900 font-semibold">2 hours on documentation</strong> for every 1 hour of patient care. Administrative burden is the #1 driver of clinician burnout.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                KayHealth exists to flip that ratio. Our AI tools integrate directly into clinical workflows to automate notes, streamline consultations, and give doctors their time back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stat Cards */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">2x</div>
                <div className="text-xs font-mono tracking-wider uppercase text-slate-500">Documentation Efficiency</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-xs font-mono tracking-wider uppercase text-slate-500">Less Burnout</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
                <div className="text-xs font-mono tracking-wider uppercase text-slate-500">Transcription Accuracy</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">&lt;3min</div>
                <div className="text-xs font-mono tracking-wider uppercase text-slate-500">Average Note Time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Bento */}
      <motion.section 
        id="products" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 md:py-32 relative overflow-hidden bg-slate-50 border-y border-slate-200"
      >
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">Our Products</p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              Built for <span className="text-gradient-health-light">Clinicians</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Purpose-built AI products designed with physicians, for physicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, idx) => {
              if (product.comingSoon) {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-2xl border border-slate-200 h-96 flex flex-col justify-end p-10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-[8px] scale-105 pointer-events-none"
                      style={{ backgroundImage: `url('${product.media}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/70" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-600/20 bg-blue-50/80 text-blue-600 text-[10px] font-mono uppercase tracking-wider mb-4 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        Coming Soon
                      </div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">{product.tagline}</p>
                      <h3 className="text-3xl font-bold text-slate-400 mb-3">{product.title}</h3>
                      <p className="text-slate-400 mb-4 leading-relaxed">{product.description}</p>
                      <span className="inline-flex items-center text-slate-400 text-sm font-semibold gap-1 select-none">
                        In Development <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                );
              }

              return (
                <Link href={product.href} key={idx} className="block group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-2xl border border-slate-200 h-96 flex flex-col justify-end p-10 bg-white shadow-sm group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
                      style={{ backgroundImage: `url(${product.media})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30" />
                    
                    <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                      <p className="text-blue-600 text-xs font-mono uppercase tracking-wider mb-2">{product.tagline}</p>
                      <h3 className="text-3xl font-bold text-slate-900 mb-3">{product.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{product.description}</p>
                      <span className="inline-flex items-center text-blue-600 text-sm font-semibold group-hover:gap-3 gap-1 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
            
            {/* Masked / Blurred Coming Soon Tile - Generic AI OS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 h-96 flex flex-col justify-end p-10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Blurred Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-[8px] scale-105 pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80')` }}
              />
              {/* Soft white overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/70" />
              
              <div className="relative z-10">
                {/* Coming Soon status tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-600/20 bg-blue-50/80 text-blue-600 text-[10px] font-mono uppercase tracking-wider mb-4 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Coming Soon
                </div>

                <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">AI Hospital OS</p>
                <h3 className="text-3xl font-bold text-slate-400 mb-3">Clinical Intelligence</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Next-generation clinical orchestration and hospital OS systems built to streamline operations, enhance diagnostics, and automate patient triage securely.
                </p>
                <span className="inline-flex items-center text-slate-400 text-sm font-semibold gap-1 select-none">
                  In Development <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust & Compliance */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 md:py-32 bg-white border-b border-slate-200"
      >
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">Compliance & Security</p>
            <h2 className="text-3xl font-display font-bold text-slate-900">
              Enterprise-Grade <span className="text-gradient-health-light">Trust</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {complianceBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white border border-slate-200 p-6 text-center rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <span className="text-sm text-slate-700 font-medium">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Embedded Lead Form - Clinical Theme */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-24 pb-24 lg:pb-32 relative z-10 bg-slate-50 overflow-hidden border-b border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 tracking-tight">
            Bring AI to Your Clinical Workflows
          </h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to reduce paperwork and focus entirely on patient care? Schedule a validation or consult with our specialized clinical technology integration team.
          </p>
          <div className="max-w-2xl mx-auto text-left">
            <LeadForm theme="light" challengesPlaceholder="Tell us about your clinic's documentation or operational challenges..." />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
