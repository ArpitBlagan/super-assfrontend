/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:['Rubik Bubbles'],
        para:['Whisper', 'cursiv']
      }
    },
  },
  plugins: [],
}