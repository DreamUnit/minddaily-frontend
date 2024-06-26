import { Config } from 'tailwindcss';
import { daisyConfig, colors } from './src/configs/style';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
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

  ...daisyConfig,
  plugins: [require('daisyui')],
};
export default config;
