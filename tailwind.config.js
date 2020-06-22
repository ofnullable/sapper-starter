const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    colors,
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  plugins: [],
};
