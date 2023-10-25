/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'pale-blue': 'hsl(225, 100%, 94%)',
        'Bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale': 'hsl(225, 100%, 98%)',
        'desatured-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      backgroundImage: {
        'pattern-b': "url('/images/pattern-background-desktop.svg')", 
      },
      fontFamily: {
        'default-font': ['Red Hat Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

