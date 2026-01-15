'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Activity, Target, Zap, Layers, CheckCircle } from 'lucide-react';
import { MagneticButton } from '@/components/ui';
import { ScrollReveal } from '@/components/animations';
import { caseStudies } from '@/components/company-data';

export default function CaseStudyDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const caseStudy = caseStudies.find((s) => s.slug === slug);

  if (!caseStudy) {
    return (
      <div className="bg-[#020617] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The case study you are looking for might have been moved or removed.
          </p>
          <Link href="/case-studies">
            <MagneticButton className="bg-brand-accent text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-brand-accent/20">
              Return to Case Studies
            </MagneticButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-brand-accent selection:text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/case-studies" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-brand-accent/50 text-brand-accent text-sm font-bold bg-brand-accent/10">
                  {caseStudy.industry}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                <span className="text-gray-400 font-mono text-sm">
                  {caseStudy.duration}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {caseStudy.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 mt-12 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                <div>
                  <p className="text-xs uppercase text-gray-500 tracking-wider mb-2">Client</p>
                  <p className="font-semibold text-lg">{caseStudy.client}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs uppercase text-gray-500 tracking-wider mb-2">Overview</p>
                  <p className="font-light text-gray-300 leading-relaxed text-lg">
                    {caseStudy.overview}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-7 space-y-20">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">The Challenge</h2>
                </div>
                <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-8 leading-relaxed text-gray-300 text-lg whitespace-pre-line">
                  {caseStudy.problem}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-brand-accent">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Solution</h2>
                </div>
                <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-8 leading-relaxed text-gray-300 text-lg whitespace-pre-line">
                  {caseStudy.solution}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {caseStudy?.technologies?.map((tech) => (
                    <span key={tech} className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:border-brand-accent/50 hover:bg-white/10 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Results & Key Metrics */}
          <div className="lg:col-span-5">
            <div className="sticky top-12 space-y-8">
              <div className="bg-gradient-to-br from-brand-accent/20 to-purple-600/10 rounded-3xl p-1 border border-white/10">
                <div className="bg-[#020617]/90 rounded-[22px] p-8 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <Target className="w-6 h-6 text-sky-400" />
                    <h3 className="text-2xl font-bold text-white">Key Results</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mb-10">
                    {Object.entries(caseStudy.results).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-xl p-5 border border-white/5">
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </p>
                        <p className="text-2xl font-bold text-sky-300 font-mono">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {caseStudy?.keyResults?.map((result) => (
                      <div key={result} className="flex gap-4 items-start">
                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                        <p className="text-sm text-gray-300 leading-snug">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to achieve similar results?</h3>
                <Link href="/contact" className="block w-full">
                  <MagneticButton className="w-full bg-white text-[#020617] font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors">
                    Book a Strategy Call
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
