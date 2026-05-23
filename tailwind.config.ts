import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Between default mobile and sm:640px
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#030712', // Gray 950
          foreground: '#f9fafb', // Gray 50
        },
        secondary: {
          DEFAULT: '#6b7280', // Gray 500
          foreground: '#f3f4f6', // Gray 100
        },
        brand: {
          dark: '#030712',       // Deepest black
          navy: '#0a1628',       // Dark navy (section backgrounds)
          deeper: '#060d1b',     // Even deeper navy
          accent: '#6366f1',     // Indigo 500 — primary accent
          blue: '#3b82f6',       // Blue 500 — electric blue
          cyan: '#06b6d4',       // Cyan 500
          purple: '#8b5cf6',     // Violet 500
          magenta: '#a855f7',    // Purple 500
          light: '#f9fafb',      // Gray 50
          muted: '#9ca3af',      // Gray 400
          border: '#1f2937',     // Gray 800
          'border-light': '#374151', // Gray 700
          glass: 'rgba(255, 255, 255, 0.05)',
          'glass-hover': 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(99, 102, 241, 0.15)',
          'glow-cyan': 'rgba(6, 182, 212, 0.15)',
        },
        health: {
          dark: '#020B18',
          accent: '#06D6A0',
          sky: '#38BDF8',
          gold: '#F59E0B',
          glass: 'rgba(6, 214, 160, 0.08)',
          glow: 'rgba(6, 214, 160, 0.15)',
          blue: '#2563EB',
          surface: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(135deg, #030712 0%, #0a1628 25%, #1e1b4b 50%, #0a1628 75%, #030712 100%)',
        'accent-gradient': 'linear-gradient(135deg, #6366f1, #06b6d4)',
        'hero-gradient': 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'glow-gradient': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.06), transparent 40%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.15)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'grid-fade': 'grid-fade 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
