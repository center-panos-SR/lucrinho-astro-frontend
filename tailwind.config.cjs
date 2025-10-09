/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(139 92 246)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};


