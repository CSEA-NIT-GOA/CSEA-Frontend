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
            transform:'scale(0)'
          },
          '100%':{
            transform:'scale(1)'
          }
        }
      },
      animation:{
        expand: 'expand 1s ease-in '
      }
    },
  },
  plugins: [require("daisyui"),],
}
