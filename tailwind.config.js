/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#0074E0',
        'secondary': '#70767E',
        'input-field': '#FAFBFC',
        'title': '#211F21',
        'error': '#c9372c',
        'success': '#29A46A'
      }
    },
  },
  plugins: [],
}

