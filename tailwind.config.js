/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-linear-gradient': 'linear-gradient(120deg, rgba(10,11,27,1) 0%, rgba(7,7,17,1) 69%)',
      },

      keyframes:{
        tilt:{
          "0% , 50% , 100%":{
            transform: "rotate(0deg)",
          },
          "25%":{
            transform: "rotate(2deg)",
          },
          "75%":{
            transform: "rotate(-2deg)",
          },
        }
      },
      animation:{
        tilt: 'tilt 10s infinite linear'
      }

    },
  },
  plugins: [],
}

