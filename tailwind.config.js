/*eslint no-undef: "off"*/

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': {'min': '1400px'},
      'xl': { 'max': '1200px'},
      'lg': { 'max': '992px'},
      'md': { 'max': '768px'},
      'sm': { 'max': '576px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
