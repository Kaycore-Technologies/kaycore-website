'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui';
import Link from 'next/link';

const bentoItems = [
  {
    title: "AI Quality & Risk Readiness Audit",
    desc: "A comprehensive assessment of AI systems against safety, security, and performance benchmarks.",
    colSpan: "md:col-span-2",
    bgClass: "bg-gradient-to-br from-purple-900/40 to-blue-900/40",
    media: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "LLM & Generative AI Testing",
    desc: "Specialized testing for non-deterministic models validating prompt robustness.",
    colSpan: "md:col-span-1",
    bgClass: "bg-cyan-900/20",
    media: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "AI-QE Retainers",
    desc: "Ongoing quality engineering support acting as an external AI risk department.",
    colSpan: "md:col-span-1",
    bgClass: "bg-emerald-900/20",
    media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Performance Engineering",
    desc: "Load testing architectures before they hit production bottlenecks.",
    colSpan: "md:col-span-2",
    bgClass: "bg-gradient-to-bl from-slate-800 to-indigo-900/40",
    media: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container">
        <SectionHeader badge="Capabilities" title="The Architecture of" highlight="Reliability" description="Enterprise-grade AI testing frameworks designed for scale." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, idx) => (
            <Link href="/services" key={idx} className={`block ${item.colSpan}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border border-white/10 group h-64 sm:h-80 flex flex-col justify-end p-5 sm:p-8 ${item.bgClass}`}
              >
                {/* Media Background with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${item.media})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
                
                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
