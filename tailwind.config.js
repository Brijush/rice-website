/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: 'class',
  theme: 
  {

    extend: {

      colors:
      {
          gold:"#edc967",
          white:"#e5e7eb",
          krish:"#f9fafb",
          ji:"#ffe4c4",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {

        typing: "typing 5s steps(20) infinite alternate, blink .7s infinite"
      }
  
    },
  },
  plugins: [],
}



