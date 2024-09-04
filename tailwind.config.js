/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
  content: [
    "index.html",
    "about.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
