/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
      },
      colors: {
        custom: ['#86E3CE', '#D0E6A5', '#FFDD94', '#FA897B', '#CCABD8', '#313131', '#3223857'] 
      }
    },
  },
  plugins: [],
}

