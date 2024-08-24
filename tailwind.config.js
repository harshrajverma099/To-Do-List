/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#1d1d1d",
        background:"#3c3c3c",
        accent: "#4e4f51"
        
      },
      fontFamily:{
        harsh:['Zilla Slab']
      }
    },
  },
  plugins: [],
}

