/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          orange: '#ff5c00',
          neon: '#ccff00',
          pink: '#ff3399',
          blue: '#1a4eff',
          softpurple: '#d2c9ff'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Impact', 'Arial Black', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      borderRadius: {
        'xs': '6px'
      }
    },
  },
  plugins: [],
}
