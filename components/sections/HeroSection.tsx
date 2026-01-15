'use client';

/**
 * Hero section component for consistent hero layouts across pages
 * Provides standardized hero section with title, description, and CTA
 */
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSectionProps } from '@/lib/types';

const backgroundVariants = {
  blue: 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700',
  gradient: 'bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HeroSection({
  title,
  description,
  ctaText,
  ctaHref,
  backgroundVariant = 'blue',
}: HeroSectionProps) {
  return (
    <section
      className={`relative px-4 py-12 sm:py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8 ${backgroundVariants[backgroundVariant]}`}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${
            backgroundVariant === 'gradient'
              ? 'text-white'
              : 'text-slate-900 dark:text-white'
          }`}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={itemVariants}
            className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed ${
              backgroundVariant === 'gradient'
                ? 'text-blue-100'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {description}
          </motion.p>
        )}
        {ctaText && ctaHref && (
          <motion.div variants={itemVariants}>
            <Link
              href={ctaHref}
              className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base hover:shadow-lg ${
                backgroundVariant === 'gradient'
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}