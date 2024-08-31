/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
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
