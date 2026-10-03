'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, rdFundingLine } from '@/content/products';
import { LeadFormCTA } from '@/components/LeadFormCTA';

export default function ProductsContent() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 inset-x-0 h-[420px] bg-grid opacity-20 pointer-events-none" />
        <div className="orb orb-accent w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-5">Products</p>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-6">
            Technology we build
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">{rdFundingLine}</p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8">
        {products.map((product, idx) => (
          <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent text-xs font-mono uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              {product.status}
            </span>
            <h2 className="text-3xl font-display font-bold text-white mb-3">{product.name}</h2>
            <p className="text-xl text-gray-200 font-light mb-6">{product.tagline}</p>
            <div className="space-y-4">
              {product.detail.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            {product.href && (
              <Link
                href={product.href}
                className="inline-flex items-center gap-2 mt-8 text-brand-accent font-semibold hover:text-white transition-colors"
              >
                {product.linkLabel || 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.article>
        ))}
      </section>

      <LeadFormCTA
        title="Building AI that has to be right?"
        description="Our quality engineering services fund this work, and the same rigor goes into client systems. Talk to our lead engineers."
      />
    </div>
  );
}
