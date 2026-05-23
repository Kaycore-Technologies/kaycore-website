/**
 * Animation configuration and variants for Framer Motion
 * These are reusable animation definitions used across components
 */

/**
 * Fade in animation - simple opacity transition
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};

/**
 * Fade in with slight scale - appears and grows
 */
export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.5 },
};

/**
 * Slide up animation - enters from bottom
 */
export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide down animation - enters from top
 */
export const slideDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide in from left
 */
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide in from right
 */
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Stagger container - for animating lists of items with delay between each
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

/**
 * Stagger item - used within staggerContainer
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/**
 * Hover lift effect - used for cards and interactive elements
 */
export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3 } },
  whileTap: { y: -2 },
};

/**
 * Pulse animation - for CTAs and attention-grabbing elements
 */
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

/**
 * Glow effect - for service cards and highlights
 */
export const glowEffect = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(59, 130, 246, 0.3)',
      '0 0 30px rgba(59, 130, 246, 0.5)',
      '0 0 20px rgba(59, 130, 246, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

/**
 * Scale hover effect - grows on interaction
 */
export const scaleHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
};

/**
 * Rotate effect - subtle rotation on hover
 */
export const rotateHover = {
  whileHover: { rotate: 5, transition: { duration: 0.3 } },
};

/**
 * Bounce animation - for emphasis
 */
export const bounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};
