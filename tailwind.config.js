/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#3498db",
        background:"#f5f5f5",
        accent: "#2ecc71"
      },
      fontFamily:{
        harsh:['Zilla Slab']
      }
    },
  },
  plugins: [],
}

