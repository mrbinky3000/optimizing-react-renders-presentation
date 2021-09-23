
module.exports = {
  sourceMap: true,
  parser: 'postcss-scss',
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: { grid: "autoplace" },  // Stupid IE11.  DIE!!!!!
    }),
  ]
}
