'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-[12rem] sm:text-[16rem] font-bold leading-none bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              404
            </h1>
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-br from-blue-400 via-indigo-400 to-sky-300" />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/" className="inline-block">
              <MagneticButton className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-3 hover:shadow-2xl">
                ← Back to Home
              </MagneticButton>
            </Link>
            <Link href="/contact" className="inline-block">
              <MagneticButton className="border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-white/70 dark:bg-slate-900/70 px-8 py-3">
                Contact Support
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Or try one of these popular pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/services"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4"
              >
                Services
              </Link>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <Link
                href="/case-studies"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4"
              >
                Case Studies
              </Link>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <Link
                href="/blog"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4"
              >
                Blog
              </Link>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <Link
                href="/about"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4"
              >
                About
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
