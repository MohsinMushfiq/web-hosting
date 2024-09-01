/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", // Add the path to your CSS files here
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
