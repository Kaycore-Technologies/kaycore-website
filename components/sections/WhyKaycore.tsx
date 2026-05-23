'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui';
import { whyKaycore } from '@/components/company-data';

export function WhyKaycore() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 lg:py-32"
    >
      <div className="section-container">
        <SectionHeader
          badge="The Kaycore Difference"
          title="Why Choose"
          highlight="Kaycore?"
          description="We don't just run tests. We engineer quality at scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyKaycore.map((item, idx) => {
            // Determine bento box spans
            let spanClass = "md:col-span-1 md:row-span-1";
            if (idx === 0) spanClass = "md:col-span-2 md:row-span-2"; // Large hero bento
            else if (idx === 3) spanClass = "md:col-span-2 md:row-span-1"; // Wide bento
            else if (idx === 4) spanClass = "md:col-span-1 md:row-span-1"; 
            else if (idx === 5) spanClass = "md:col-span-3 md:row-span-1"; // Full width bottom

            // Determine image
            const images = [
              "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80"
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-md group flex flex-col justify-end min-h-[240px] sm:min-h-[300px] ${spanClass}`}
              >
                {/* Background Image with Hover Zoom */}
                <Image
                  src={images[idx]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                />
                
                {/* Dark Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10" />
                
                <div className="relative z-20 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 font-light max-w-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
