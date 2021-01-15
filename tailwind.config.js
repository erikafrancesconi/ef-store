module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-pink': '#fd367e',
        'theme-blue': '#3e4377',
        'theme-grey': '#f1f2f3'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
