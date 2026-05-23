'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimatedRef = useRef(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  const display = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      springValue.set(value);
      hasAnimatedRef.current = true;
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
