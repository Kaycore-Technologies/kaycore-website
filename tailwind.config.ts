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
        primary: {
          DEFAULT: '#0F172A', // Slate 900
          foreground: '#F8FAFC', // Slate 50
        },
        secondary: {
          DEFAULT: '#64748B', // Slate 500
          foreground: '#F1F5F9', // Slate 100
        },
        brand: {
          dark: '#020617', // Slate 950 - Deepest Navy
          light: '#F8FAFC', // Slate 50 - Crisp White
          accent: '#0EA5E9', // Sky 500 - Trustworthy Blue (calmer than Blue 500)
          muted: '#94A3B8', // Slate 400
          border: '#1E293B', // Slate 800
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
