/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: '#FF7300',
      yellow: '#FFC504',
      green: '#27941B',
      black: '#000000',
      white: '#FFFFFF',
      red: {
        DEFAULT: '#CF0023',
        300: '#B41530',
      },
      cyan: {
        DEFAULT: '#4AC6B7',
        100: '#F5FCFB',
        200: '#24857F',
        300: '#186D67',
      },
      gray: {
        DEFAULT: '#232323',
        100: '#FBFBFB',
        200: '#F3F3F3',
        300: '#8F8F8F',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif']
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.375rem',
      xl: '2rem'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
