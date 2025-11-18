/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rcf-black': '#000000',
        'rcf-charcoal': '#1a1a1a',
        'rcf-dark': '#0d0d0d',
        'rcf-neon-blue': '#00f0ff',
        'rcf-teal': '#00d4ff',
        'rcf-hazard-yellow': '#ffd700',
        'rcf-steel': '#4a5568',
        'rcf-metallic': '#718096',
      },
      fontFamily: {
        'condensed': ['var(--font-condensed)', 'sans-serif'],
        'sans': ['var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}

