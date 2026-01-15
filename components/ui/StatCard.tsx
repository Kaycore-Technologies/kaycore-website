'use client';

/**
 * StatCard component for displaying statistics and metrics
 * Used in hero sections, impact sections, and result displays
 * Includes count-up animation when scrolled into view
 */
import { StatItem } from '@/lib/types';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const colorStyles = {
  blue: 'text-blue-600 dark:text-blue-400',
  green: 'text-green-600 dark:text-green-400',
  purple: 'text-purple-600 dark:text-purple-400',
  orange: 'text-orange-600 dark:text-orange-400',
};

interface StatCardProps extends StatItem {
  className?: string;
}

export function StatCard({
  value,
  label,
  color = 'blue',
  className = '',
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse numeric value from string (e.g., "100+" -> 100)
  const numValue = parseInt(value.toString().replace(/\D/g, ''), 10) || 0;
  const suffix = value.toString().replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = (timestamp - start) / 2000; // 2 second animation

      if (progress < 1) {
        setCount(Math.floor(numValue * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, numValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`text-center ${className}`}
    >
      <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colorStyles[color]} mb-2 sm:mb-3`}>
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}
