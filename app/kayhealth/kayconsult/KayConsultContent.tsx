'use client';

import { motion } from 'framer-motion';
import { ProductHero } from '@/components/kayhealth/ProductHero';
import { FeatureGrid } from '@/components/kayhealth/FeatureGrid';
import { MedicalCTA } from '@/components/kayhealth/MedicalCTA';

const features = [
  {
    title: 'AI-Powered Triage',
    description: 'Intelligent symptom assessment and urgency classification before the clinician even joins the call.',
    colSpan: 'md:col-span-2',
    media: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Symptom Analysis',
    description: 'AI cross-references patient history with current symptoms to surface differential diagnoses.',
    colSpan: 'md:col-span-1',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
  },
  {
    title: 'Prescription Assistance',
    description: 'Drug interaction checks, dosage recommendations, and formulary validation in real-time.',
    colSpan: 'md:col-span-1',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  },
  {
    title: 'Follow-Up Automation',
    description: 'Automatically schedule follow-ups, send care plans to patients, and track outcomes over time.',
    colSpan: 'md:col-span-2',
    media: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
];

const integrations = [
  'Epic', 'Cerner', 'Athenahealth', 'Meditech', 'eClinicalWorks', 'NextGen',
];

export default function KayConsultContent() {
  return (
    <div className="font-sans selection:bg-blue-200/50 selection:text-blue-900">

      <ProductHero
        badge="KayConsult — AI Telemedicine"
        productName="Intelligent"
        tagline="Telemedicine."
        description="AI-driven consultation support that helps clinicians deliver better care remotely, with intelligent triage, real-time analysis, and automated follow-up."
        ctaText="Request a Demo"
        ctaHref="/contact"
        secondaryCtaText="View KayScribe"
        secondaryCtaHref="/kayhealth/kayscribe"
      />

      <div className="section-divider-light" />

      {/* Problem/Solution */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-sm"
            >
              <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">The Gap</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Telemedicine Needs an{' '}
                <span className="text-gradient-health-light">Intelligence Layer.</span>
              </h2>
              <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
                <p>
                  Over <span className="text-slate-900 font-semibold">80% of telemedicine visits</span> are simple follow-ups or triage cases that could benefit from AI pre-assessment.
                </p>
                <p>
                  KayConsult adds an AI intelligence layer to every virtual encounter. It prepares clinicians with structured intake data and surfaces relevant clinical insights before the call begins.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '40%', label: 'Shorter Consult Times' },
                { value: '3x', label: 'More Patients per Day' },
                { value: '94%', label: 'Clinician Satisfaction' },
                { value: '24/7', label: 'AI Pre-Triage Available' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 text-center rounded-2xl hover:shadow-md transition-shadow">
                  <div className="text-3xl font-display font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureGrid
        badge="Core Capabilities"
        title="Smarter Consultations,"
        highlight="Better Outcomes"
        description="From the first patient interaction to post-visit follow-up, our AI works alongside clinicians at every step."
        features={features}
      />

      {/* EHR Integrations */}
      <section className="py-24 md:py-32 border-y border-slate-200 bg-slate-50">
        <div className="section-container text-center">
          <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">Integrations</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12">
            Works With Your <span className="text-gradient-health-light">EHR</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {integrations.map((name, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-slate-200 px-8 py-4 rounded-xl text-slate-700 font-medium text-sm shadow-sm hover:shadow-md transition-shadow"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <MedicalCTA
        title="See KayConsult"
        highlight="In Action"
        description="Book a live demo and see how AI-powered telemedicine can transform your practice."
        ctaText="Request a Demo"
        ctaHref="/contact"
      />
    </div>
  );
}
