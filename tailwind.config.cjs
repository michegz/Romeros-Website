/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand greens — extracted from live site + logo
        brand: {
          DEFAULT: '#064e3b',  // primary: buttons, nav, dark sections (emerald-900)
          deep:    '#022c22',  // footer bg, darkest elements (emerald-950)
          mid:     '#065f46',  // medium dark sections (emerald-800)
        },
        // Accent greens — text on dark backgrounds
        accent: {
          DEFAULT: '#34d399',  // labels, tags (emerald-400)
          light:   '#6ee7b7',  // accent headings on dark bg (emerald-300)
          pale:    '#d1fae5',  // footer secondary text (emerald-100)
          softest: '#ecfdf5',  // footer primary text (emerald-50)
        },
        // Stone body palette — matches Tailwind stone scale exactly
        // stone-50  #fafaf9  page background
        // stone-900 #1c1917  H2, body text
        // stone-700 #44403c  secondary body text
        // stone-600 #57534e  subdued text
        // stone-500 #78716c  muted text
        // stone-400 #a8a29e  faintest text
        // stone-200 #e7e5e4  card borders, dividers
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
