/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { maroon: { 50: '#fbf1f2', 100: '#f4dcdf', 600: '#8c2433', 700: '#7a1f2b', 800: '#5a1620' } },
      fontFamily: { serif: ['Georgia', '"Times New Roman"', 'serif'] }
    }
  },
  plugins: []
};
