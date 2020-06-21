module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env'),
    require('cssnano'),
  ],
};
