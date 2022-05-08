module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-extend'),
    require('precss'),
    require('postcss-preset-env'),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};
