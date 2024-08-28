/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        powderblue: '#b0e0e6',
        rebeccapurple: '#663399',
        moccasin: '#ffe4b5',
      },
      boxShadow: {
        'custom': 'rgb(50 50 93 / 20%) 0px 30px 60px -12px, rgb(0 0 0 / 28%) 0px 18px 36px -18px',
      },
      backgroundImage: {
        'background-linear-gradient': 'linear-gradient(120deg, rgba(10,11,27,1) 0%, rgba(7,7,17,1) 69%)',
        'navbar-background': 'linear-gradient(90deg, rgba(192,132,252,1) 0%, rgba(79,70,229,1) 69%)',
        'about-background':'linear-gradient(-45deg, rgba(238,119,82,1) 18%, rgba(231,60,126,1) 42%, rgba(35,166,213,1) 68%, rgba(35,213,171,1) 86%);'
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
        },

        colorChange:{
          '0%': {
            color: '#db2777',   
            width: '0%',
          },
          '25%': {
            color: '#818cf8',
          },
          '50%': {
            color: '#4f46e5',
          },
          '75%': {
            color: '#f472b6',
          },
          '100%': {
            color: '#db2777',
            width: '100%',
          },
          
        },

        gradientChange:{
          '0%':{
            'background-position': '0% 50%'
          },
          '50%':{
            'background-position': '100% 50%'
          },
          '100%':{
            'background-position':'0% 50%'
          }
        }
      },

      animation:{
        tilt: 'tilt 10s infinite linear',
        colorChange: "colorChange 10s ease-in infinite forwards",
        gradientChange: 'gradientChange 15s ease infinite'
      },

      fontSize: {
        '10xl': '10rem', 
      },

    },
  },
  plugins: [],
}

