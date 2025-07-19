/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['Pacifico', 'cursive'],
      },
      colors: {
        'rosa-confeitaria': 'rgb(252, 18, 115)',
      }
    },
  },
  plugins: [],
}
