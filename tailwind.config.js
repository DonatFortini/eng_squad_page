/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#FFF5E6',
          200: '#FFE0B2',
          400: '#FFA726',
          500: '#FF9800',
          600: '#FB8C00',
          800: '#FF5522',
        },
      },
    },
  },
  plugins: [],
}