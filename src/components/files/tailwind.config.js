/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: { brand: '#0038E6', lime: '#D8F500', ink: '#1A1A1A' },
      boxShadow: { card: '0 20px 50px -20px rgba(20,30,80,.25)' },
    },
  },
  plugins: [],
};
