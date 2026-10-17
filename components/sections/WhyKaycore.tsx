'use client';

import { motion } from 'framer-motion';
import { SectionHeader, CardMedia } from '@/components/ui';
import { whyKaycore } from '@/components/company-data';

export function WhyKaycore() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 lg:py-20"
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
            // Bento spans: one row each, wide card alternating sides (wide-narrow, narrow-wide, wide-narrow)
            const isWide = idx === 0 || idx === 3 || idx === 4;
            const spanClass = isWide ? "md:col-span-2" : "md:col-span-1";

            // Determine image
            const images = [
              "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className={`glass-surface relative overflow-hidden rounded-3xl hover:shadow-card-hover transition-shadow group flex flex-col ${spanClass}`}
              >
                <CardMedia
                  src={images[idx]}
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="relative px-5 pb-6 pt-3 sm:px-8 sm:pb-8">

                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-body max-w-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
