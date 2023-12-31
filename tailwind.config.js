/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Popp: ["Poppins", "sans-serif"],
        Mont: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

