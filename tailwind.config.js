/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max-400': { 'max': '400px' },
      },
      textShadow: {
        'default': '3px 0px 18px #FFFFFF, -3px 3px 3px #FF7700',
        'none': 'none'
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.text-shadow-default': {
          textShadow: '3px 0px 18px #FFFFFF, -3px 3px 3px #FF7700'
        },
        '.text-shadow-none': {
          textShadow: 'none'
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

