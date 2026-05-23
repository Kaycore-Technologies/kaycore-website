'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * MagneticButton
 * A button that gently follows the cursor for a premium interactive feel.
 */
export function MagneticButton({
  children,
  intensity = 0.15,
  className = '',
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.3 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;
    
    // Clamp to reasonable bounds to prevent drift
    const maxOffset = Math.min(rect.width, rect.height) * 0.3;
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, offsetX * intensity));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, offsetY * intensity));
    
    x.set(clampedX);
    y.set(clampedY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type={props.type ?? 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`relative inline-flex items-center justify-center rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}`}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
