/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'jira-blue': '#0074E0',
        'secondary': '#70767E',
        'input-field': '#FAFBFC',
        'title': '#211F21'
      }
    },
  },
  plugins: [],
}

