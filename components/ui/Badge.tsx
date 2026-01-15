'use client';

/**
 * Badge component for displaying tags, categories, and labels
 * Supports multiple variants and sizes with animations
 */
import { BadgeProps } from '@/lib/types';
import { motion } from 'framer-motion';

const variantStyles = {
  blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
  green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
  purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
  orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

export function Badge({
  label,
  variant = 'blue',
  size = 'sm',
}: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`inline-block font-semibold rounded-full transition-all ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {label}
    </motion.span>
  );
}
