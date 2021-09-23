const path = require("path");
const PATHS = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.npm_lifecycle_event === 'build' ? 'production' : 'development';
const commonConfig = merge([
  {
    entry: ["./src/index.js"],
    output: {
      filename: '[name].[chunkhash:8].bundle.js',
      path: path.resolve(__dirname, "dist"),
      clean: true,
      chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    target: "web",
    stats: {
      children: true
    },
    resolve: {
      modules: [
        PATHS.src,
        PATHS.nodeModules,
      ],
      // extensions: When webpack encounters an import statement, try and resolve the import.
      // Also lets developer import file without using the file extension.
      extensions: [
        // resolve javascript imports
        '.js', '.jsx', '.mjs',
        // resolve javascript imported
        '.scss', '.css'
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        chunkFilename:
          mode === 'production'
            ? "[name].[id].[contenthash:8].css"
            : "[name].[id].css",
        filename:
          mode === 'production'
            ? "[name].[id].[contenthash:8].css"
            : "[name].[id].css",
        ignoreOrder: true,
      }),
    ],
  },
  parts.extractStyles({ mode, include: [PATHS.src] }),
  parts.loadNodeModuleCSS({ mode, include: [PATHS.nodeModules] }),
  parts.loadJavaScript({include: [PATHS.src] }),
]);

const developmentConfig = merge([
  {
    entry: [
      'webpack-plugin-serve/client'
    ],
    plugins: [
      new HtmlWebpackPlugin({
        appMountId: "app",
        filename: path.join(PATHS.dist, 'index.html'),
        inject: false,
        publicPath: "/",
        template: "src/index.ejs",
        title: 'Development Server',
      }),
    ]
  },
  parts.generateSourceMaps({ type: 'eval-source-map' }),
  parts.devServer(),
])

const productionConfig = merge([
  {
    output: {
      path: path.resolve(__dirname, "docs"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        appMountId: "app",
        filename: path.join(path.resolve(__dirname, "docs"), 'index.html'),
        inject: false,
        publicPath: "/",
        template: "src/index.ejs",
        title: 'Optimizing React Renders',
      }),
    ]
  },
  parts.minifyCSS({ options: { preset: ['default'] } }),
  parts.minifyJavaScript(),
  parts.generateSourceMaps({ type: 'source-map' }),
])

let config = {};
switch (mode) {
  case 'production':
    config = merge(commonConfig, productionConfig, { mode });
    break;
  case 'development':
    config = merge(commonConfig, developmentConfig, { mode });
    break;
  default:
    throw new Error(`Trying to use unknown mode, ${mode}`);
}


console.log(require('util').inspect(config, {colors:true, depth:null}));

module.exports = config;