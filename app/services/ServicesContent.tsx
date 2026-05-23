'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader, GlassCard, GlowButton } from '@/components/ui';
import { services } from '@/components/company-data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/animations';
import { LeadFormCTA } from '@/components/LeadFormCTA';

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans selection:bg-brand-accent/30 selection:text-white">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-grid opacity-30 pointer-events-none" />
      <div className="orb orb-accent w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />

      {/* Hero — center-aligned, matching Home pattern */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-6">Our Services</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight">
              Enterprise-Grade <span className="text-gradient">QA Solutions</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
              From AI test automation to dedicated QA teams, we cover the full spectrum of quality engineering to help you ship faster and break nothing.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Bento Box Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 lg:py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {services.map((service, idx) => {
              // Determine bento box spans
              let spanClass = "md:col-span-1 md:row-span-1";
              if (idx === 0) spanClass = "md:col-span-2 md:row-span-1";
              else if (idx === 3) spanClass = "md:col-span-2 md:row-span-1";
              else if (idx === 4) spanClass = "md:col-span-1 md:row-span-1";
              else if (idx === 5) spanClass = "md:col-span-2 md:row-span-1";

              // Determine images
              const images = [
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=600&q=80"
              ];

              return (
                <motion.div 
                  key={service.id} 
                  className={spanClass}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md group flex flex-col justify-end">
                    
                    {/* Background Image with Hover Zoom */}
                    <Image
                      src={images[idx]}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                    />
                    
                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10" />
                    
                    <div className="relative z-20 flex flex-col h-full justify-between">
                      <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                        <h2 className="text-3xl font-display font-bold text-white mb-3">{service.title}</h2>
                        <p className="text-gray-300 leading-relaxed max-w-lg mb-6">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 translate-y-4 group-hover:translate-y-0 pb-2">
                        <GlowButton href="/contact" variant="secondary" showArrow className="px-6 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 hover:bg-brand-accent hover:border-brand-accent">
                          Discuss this service
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Embedded Lead Form */}
      <LeadFormCTA 
        title="Secure Your AI Systems Today"
        description="Ready to deploy flawless software? Reach out to our leads directly and let us engineer custom risk protocols for your application."
      />
    </div>
  );
}
