/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto', 'sans'], // Use 'sans' as a fallback font-family
      },
      colors:{
        btn: 'rgba(104, 205, 115, 1)'
      },
      backgroundColor:{
        bgColor: 'rgba(0, 75, 255, 1)'
      }
    },
  },
  plugins: [],
}