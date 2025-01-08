/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
      extend: {
        screens: {
          'xs': '350px',
          'lg': '923px',
          'xl': '1201px'
        }
      }
  },
    variants: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ]
  }

