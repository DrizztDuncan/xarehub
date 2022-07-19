/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'theme-bg': 'url("./Background_01.svg")',
      },

      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "d319h": "319px"
      },

      width: {
        "10w": "10vw",
        "20w": "20vw",
        "30w": "30vw",
        "40w": "40vw",
        "50w": "50vw",
        "60w": "60vw",
        "70w": "70vw",
        "80w": "80vw",
        "90w": "90vw",
        "100w": "100vw",
        "d475w": "475px",
      },

      fontSize: {
        "4.5xl": "2.625rem",
      },

      colors: {
        "blue-1": "#3c50ff",
        "blue-2": "#ebedff",
      },

    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        // '.content-hidden': {
        //   'content-visibility': 'hidden',
        // },
        // '.content-visible': {
        //   'content-visibility': 'visible',
        // },
      })
    })
  ],
}
