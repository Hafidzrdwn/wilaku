/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
      extend: {
        screens: {
          'xs': '350px',
          'lg': '922px'
        }
      }
  },
    variants: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
    content: [
        "./node_modules/flowbite/**/*.js"
    ]
  }

