/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "about.html",
     
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      width: {
        'custom-sm': '380px', // Adding custom width
      },
    },
  },
  plugins: [],
}
