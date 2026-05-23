'use client';

import { motion } from 'framer-motion';
import { ProductHero } from '@/components/kayhealth/ProductHero';
import { FeatureGrid } from '@/components/kayhealth/FeatureGrid';
import { MedicalCTA } from '@/components/kayhealth/MedicalCTA';

const features = [
  {
    title: 'Real-Time Transcription',
    description: 'Ambient AI that listens to physician-patient conversations and generates structured clinical notes in real-time.',
    colSpan: 'md:col-span-2',
    media: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'ICD-10 Auto-Coding',
    description: 'Automatically suggests diagnosis and procedure codes from clinical context.',
    colSpan: 'md:col-span-1',
    gradient: 'bg-gradient-to-br from-blue-50 to-sky-50',
  },
  {
    title: 'EHR Integration',
    description: 'Seamless sync with Epic, Cerner, Athena, and all major electronic health record systems.',
    colSpan: 'md:col-span-1',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
  },
  {
    title: 'Multi-Specialty Support',
    description: 'Trained on 40+ specialties — from cardiology to psychiatry. Accurate clinical language for every domain.',
    colSpan: 'md:col-span-2',
    media: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Listen',
    description: 'KayScribe listens passively during the patient encounter via secure ambient microphone technology.',
  },
  {
    num: '02',
    title: 'Structure',
    description: 'AI transforms the conversation into a structured SOAP note with assessment, plan, and relevant codes.',
  },
  {
    num: '03',
    title: 'Review & Sign',
    description: 'The physician reviews the generated note, makes any edits, and signs off in under 60 seconds.',
  },
];

export default function KayScribeContent() {
  return (
    <div className="font-sans selection:bg-blue-200/50 selection:text-blue-900">

      <ProductHero
        badge="KayScribe — AI Medical Scribe"
        productName="Your AI"
        tagline="Medical Scribe."
        description="Eliminate hours of clinical documentation. KayScribe listens, structures, and delivers complete notes so physicians can focus on patients."
        ctaText="Start Your Free Pilot"
        ctaHref="/contact"
        secondaryCtaText="Watch Demo"
        secondaryCtaHref="/kayhealth"
      />

      <div className="section-divider-light" />

      {/* Problem/Solution */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-mono text-red-500 tracking-[0.2em] uppercase mb-4">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Documentation Is <span className="text-red-500">Killing</span> Medicine.
              </h2>
              <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
                <p>Physicians spend <span className="text-slate-900 font-semibold">16 minutes per patient</span> on documentation alone.</p>
                <p>Over <span className="text-slate-900 font-semibold">50% of physicians</span> report burnout, with EHR documentation cited as the primary driver.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl">
                <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">The Solution</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">KayScribe Automates It All.</h3>
                <ul className="space-y-4">
                  {[
                    'Ambient listening (no typing, no templates)',
                    'Structured SOAP notes in under 30 seconds',
                    'ICD-10 and CPT code suggestions built-in',
                    'Works across 40+ medical specialties',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <FeatureGrid
        badge="Core Capabilities"
        title="Everything You Need to"
        highlight="Automate Documentation"
        description="Purpose-built AI that understands clinical language and generates notes that meet quality standards."
        features={features}
      />

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              Three Steps to <span className="text-gradient-health-light">Freedom</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-white border border-slate-200 p-8 rounded-2xl text-center relative overflow-visible shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center z-10 shadow-md">
                  <span className="text-blue-600 font-mono font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <MedicalCTA
        title="Start Your"
        highlight="Free Pilot"
        description="Deploy KayScribe in your practice with zero upfront cost. See results in the first week."
        ctaText="Start Your Free Pilot"
        ctaHref="/contact"
      />
    </div>
  );
}
