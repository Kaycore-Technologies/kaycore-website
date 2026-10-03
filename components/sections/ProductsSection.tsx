'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui';
import { products, rdFundingLine } from '@/content/products';

export function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Products"
          title="Technology We"
          highlight="Build"
          description="Our services fund our own tooling. Two products are in development, used first on our own engagements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <Link
                href="/products"
                className="group block h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-10 hover:border-brand-accent/30 hover:bg-white/[0.07] transition-all duration-500"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent text-xs font-mono uppercase tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  {product.status}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-base text-gray-200 font-medium mb-3">{product.tagline}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{product.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-semibold">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">{rdFundingLine}</p>
      </div>
    </section>
  );
}
