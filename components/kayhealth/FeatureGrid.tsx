'use client';

import { motion } from 'framer-motion';

interface FeatureItem {
  title: string;
  description: string;
  colSpan?: string;
  media?: string;
  gradient?: string;
}

interface FeatureGridProps {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
  features: FeatureItem[];
}

export function FeatureGrid({ badge, title, highlight, description, features }: FeatureGridProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute -top-1/2 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-blue-600 tracking-[0.2em] uppercase mb-4">{badge}</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
            {title}{' '}
            <span className="text-gradient-health-light">{highlight}</span>
          </h2>
          {description && <p className="text-slate-500 text-lg leading-relaxed">{description}</p>}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 group h-72 md:h-80 flex flex-col justify-end p-8 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 ${item.colSpan || 'md:col-span-1'}`}
            >
              {/* Background image if provided */}
              {item.media && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${item.media})` }}
                />
              )}
              {!item.media && (
                <div className={`absolute inset-0 opacity-40 ${item.gradient || 'bg-gradient-to-br from-blue-50 to-emerald-50'}`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20" />

              <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
