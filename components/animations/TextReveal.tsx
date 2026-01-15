// Outputting nothing as I am choosing to view files instead.

import { motion } from 'framer-motion';
import { ReactNode, type ElementType } from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
  as?: ElementType;
  className?: string;
  by?: 'word' | 'char';
}

const defaultTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const };

export function TextReveal({
  text,
  delay = 0,
  as: Tag = 'span',
  className = '',
  by = 'word',
}: TextRevealProps) {
  const parts = by === 'char' ? text.split('') : text.split(' ');

  return (
    <Tag className={`inline-block ${className}`}>
      {parts.map((part, index) => (
        <motion.span
          key={`${part}-${index}`}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ ...defaultTransition, delay: delay + index * 0.05 }}
          className="inline-block overflow-hidden"
        >
          <span className={by === 'word' ? 'mr-[0.25em]' : ''}>{part}</span>
        </motion.span>
      ))}
    </Tag>
  );
}

interface GradientTextProps {
  children: ReactNode;
  animate?: boolean;
  className?: string;
}

export function GradientText({ children, animate = true, className = '' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent ${animate ? 'animate-gradient' : ''
        } ${className}`}
    >
      {children}
    </span>
  );
}
