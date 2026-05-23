'use client';

import { industries } from '@/components/company-data';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations';
import { GlowButton } from '@/components/ui';
import { LeadFormCTA } from '@/components/LeadFormCTA';
import Image from 'next/image';

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans selection:bg-brand-accent/30 selection:text-white">

      {/* Hero Section — centered, consistent with Home/Services/About */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="orb orb-accent w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-6">Industries</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
              Quality Engineering for{' '}
              <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
              Deep domain expertise in the industries where software quality failures cost millions. We bring specialized testing frameworks to your sector.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Industry Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {industries.map((ind, idx) => {
              // Unsplash placeholders matching the industries (Healthcare, SaaS, Fintech, Retail, Logistics, EdTech)
              const images = [
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80", // Healthcare
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", // SaaS/Data
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80", // Fintech
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80", // Retail
                "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80", // Logistics
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"  // EdTech
              ];

              const gradients = [
                "from-blue-500/20 via-transparent to-transparent",
                "from-purple-500/20 via-transparent to-transparent",
                "from-emerald-500/20 via-transparent to-transparent",
                "from-amber-500/20 via-transparent to-transparent",
                "from-rose-500/20 via-transparent to-transparent",
                "from-cyan-500/20 via-transparent to-transparent"
              ];

              return (
                <motion.div 
                  key={idx} 
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-md group h-full flex flex-col justify-end min-h-[420px]">
                    {/* Background Image with Hover Zoom */}
                    <Image
                      src={images[idx] || images[0]}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                    />
                    
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${gradients[idx % gradients.length]} z-10`} />

                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-[#030712]/40 z-10" />

                    <div className="relative z-20 mt-auto flex flex-col transform group-hover:-translate-y-1 transition-transform duration-300">
                      <h2 className="text-2xl font-bold text-white mb-3">{ind.name}</h2>
                      <p className="text-gray-300 leading-relaxed text-sm max-w-sm transition-all duration-300 group-hover:mb-4">{ind.description}</p>
                      
                      <div className="space-y-3 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[160px] group-hover:opacity-100">
                        {ind.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                            <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                            <span>{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <div className="section-divider" />
      <LeadFormCTA 
        title="Don't see your industry?"
        description="Our AI-powered QA approach adapts to any domain. Let's talk about your specific needs and build a custom risk protocol."
      />
    </div>
  );
}
