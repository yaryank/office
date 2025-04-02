/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,astro,ts,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          20: '#FFFAF5',
          25: '#FFF9F2',
        },
        amber: {
          20: '#FFF8EF',
        },
      },
    },
  },
  plugins: [],
}
