import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        brand: {
          dark: '#020617', // Slate 950 - Deep Navy
          light: '#f8fafc', // Slate 50
          accent: '#3b82f6', // Blue 500
          purple: '#8b5cf6', // Violet 500
          glow: '#6ee2f5', // Cyan 300
        },
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to bottom right, #0B1C2D, #0F2A44, #1E4FD8, #FFFFFF)',
      },
    },
  },
  plugins: [],
};

export default config;
