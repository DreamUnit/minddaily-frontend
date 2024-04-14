import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      screens: {
        'mobile-sm': { raw: '(max-width: 640px)' },
        'mobile-md': { raw: '(max-width: 800px)' },
        'tablet-sm': { raw: '(max-width: 900px)' },
        'tablet-md': { raw: '(max-width: 1100px)' },
      },
      borderRadius: {
        sm: '3px',
        md: '6px',
        lg: '10px',
      },
    },
  },
  plugins: [],
};
export default config;
