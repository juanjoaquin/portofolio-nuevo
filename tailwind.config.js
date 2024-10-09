/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            libre: ['"Libre Baskerville"'],
            montserrat: ['Montserrat'],
            roboto: ['Roboto']
        },
        backgroundColor: {

            'transparent-rgba': 'rgba(255,255,255,.95)',
            'trasnparent-bga': '#e6e6e6'
          
        },
        textColor: {
          'grey-text': '#878a8f'
        }
      },
      // colors: {
      //   customYellow: 
      // }
    },

  };