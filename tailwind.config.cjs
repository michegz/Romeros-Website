/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#2C5F8A',
        accent: '#E8611A',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
