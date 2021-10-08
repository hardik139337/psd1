/*eslint no-undef: "off"*/

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': {'min': '1440px'},
      'xl': { 'max': '1440px'},
      'lg': { 'max': '1024px'},
      'md': { 'max': '768px'},
      'sm': { 'max': '425px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
