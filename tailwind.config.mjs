/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#e6e6e3',
        ink: '#111111',
        cyan: '#2dbfd6',
        slate: '#8a8a84'
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Suisse Intl"', '"Arial Narrow"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.03em'
      }
    }
  },
  plugins: []
};
