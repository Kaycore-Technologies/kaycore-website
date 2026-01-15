'use client';

/**
 * Card component for consistent card layouts across the application
 * Supports flex content, links, and custom styling
 */
import { CardProps } from '@/lib/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  onClick,
  href,
}: CardProps) {
  const baseStyles =
    'bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700';

  const containerProps = {
    className: `${baseStyles} ${className}`,
  };

  const cardElement = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      {...containerProps}
      onClick={onClick}
      role={onClick || href ? 'button' : undefined}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href}>
        {cardElement}
      </Link>
    );
  }

  return cardElement;
}
