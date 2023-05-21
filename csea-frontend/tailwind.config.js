/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand:{
          '0%':{
            transform:'scale(0) translateX(0)'
          },
          '100%':{
            transform:'scale(1) translateX(10rem)'
          }
        },
        fadeIn:{
          '0%':{
            opacity:'0'
          },
          '100%':{
            opacity:'1'
          }
        }
      },
      animation:{
        expand: 'expand 0.5s ease-in forwards',
        fadeIn: 'fadeIn 2s ease-in forwards'
      }
    },
  },
  plugins: [require("daisyui"),],
};