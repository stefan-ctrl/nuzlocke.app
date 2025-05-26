const autoprefixer = require('autoprefixer');
const tailwindcss = require('@tailwindcss/postcss');
const cssnano = require('cssnano')

const config = {
  plugins: [tailwindcss(), autoprefixer(), cssnano()]
};

module.exports = config;
