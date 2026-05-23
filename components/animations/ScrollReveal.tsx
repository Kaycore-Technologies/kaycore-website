'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * ScrollReveal Component
 *
 * Reveals content with a fade-up animation when the element enters the viewport.
 * Perfect for hero sections, cards on grid, and feature lists.
 *
 * @example
 * <ScrollReveal>
 *   <h2>This fades in when scrolled into view</h2>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

/**
 * StaggerContainer Component
 *
 * Animates multiple children with a staggered delay between each.
 * Perfect for grid layouts and lists.
 *
 * Usage: Wrap children (cards, items) in motion.div or use with StaggerItem
 *
 * @example
 * <StaggerContainer>
 *   <motion.div variants={staggerItem}><Card /></motion.div>
 *   <motion.div variants={staggerItem}><Card /></motion.div>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.15,
  initialDelay = 0.2,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  variant?: 'slide-up' | 'fade-scale' | 'slide-left' | 'slide-right';
  delay?: number;
}

/**
 * AnimatedItem Component
 *
 * Individual animated item for use within StaggerContainer.
 * Provides predefined animation variants.
 *
 * @example
 * <StaggerContainer>
 *   <AnimatedItem><Card /></AnimatedItem>
 *   <AnimatedItem><Card /></AnimatedItem>
 * </StaggerContainer>
 */
export function AnimatedItem({
  children,
  className = '',
  variant = 'slide-up',
  delay = 0,
}: AnimatedItemProps) {
  const variants = {
    'slide-up': {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
    },
    'fade-scale': {
      hidden: { opacity: 0, scale: 0.9 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } },
    },
    'slide-left': {
      hidden: { opacity: 0, x: -20 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
    },
    'slide-right': {
      hidden: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
    },
  };

  return (
    <motion.div variants={variants[variant]} className={className}>
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

/**
 * CountUp Component
 *
 * Animates a number counter from one value to another.
 * Perfect for statistics and metrics displays.
 *
 * @example
 * <CountUp to={100} suffix="+" />  // Displays 0 → 100+
 */
export function CountUp({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

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

    const currentNodeRef = nodeRef.current;
    if (currentNodeRef) {
      observer.observe(currentNodeRef);
    }

    return () => {
      if (currentNodeRef) {
        observer.unobserve(currentNodeRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(from + (to - from) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, from, to, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

/**
 * ParallaxSection Component
 *
 * Creates a subtle parallax depth effect on scroll.
 * Perfect for background images and layered designs.
 *
 * @example
 * <ParallaxSection offset={30}>
 *   <div>Content moves slower on scroll</div>
 * </ParallaxSection>
 */
export function ParallaxSection({
  children,
  className = '',
  offset = 50,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const elementTop = scrollTop + rect.top;
        const scrollProgress = (scrollTop - elementTop + window.innerHeight) / window.innerHeight;
        setY(scrollProgress * offset * -1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
