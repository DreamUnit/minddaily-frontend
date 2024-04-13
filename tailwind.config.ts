import { Config } from 'tailwindcss'
import { daisyConfig } from './configs/styles/daisy.config'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'outline-neutral-100': 'var(--color-outline-100)',
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

  ...daisyConfig,
  plugins: [require('daisyui')],
}
export default config
