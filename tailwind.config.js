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
        gold: {
          light: '#F5E6B3',
          DEFAULT: '#D4AF37',
          dark: '#B38B1F',
        },
      },
    },
  },
  plugins: [],
} 