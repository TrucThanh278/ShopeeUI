/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      },
      backgroundImage: {
        headerColor: 'linear-gradient(-180deg, #f53d2d, #f63)'
      }
    }
  },
  plugins: []
}
