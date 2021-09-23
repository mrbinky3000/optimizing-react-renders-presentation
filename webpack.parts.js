const { WebpackPluginServe } = require("webpack-plugin-serve");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: './dist',
      hmr: true,
      waitForBuild: true,
      open: true,
      // historyFallback: {
      //   // disabled the dot rule because . is a valid character in a URL segment.  Server was
      //   // crashing in URLs like:
      //   // https://local.express.com:8080/clothing/women/loyalty-for-men-34-oz/pro/4560445/color/3.4%20oz
      //   // The above URL works just fine in QA and Production.
      //   // The dev server was showing the following error message:
      //   // Cannot GET /clothing/women/loyalty-for-men-34-oz/pro/4560445/color/3.4%20oz
      //   logger: console.log.bind(console),
      //   verbose: true,
      //   disableDotRule: true,
      //   // disabling the dot rule causes a bug with
      //   rewrites: [
      //     {
      //       from: '/wps',
      //       to: (context) => context.parsedUrl.pathname,
      //     },
      //     {
      //       from: /\.js/,
      //       to: (context) => {
      //         const retval = context.parsedUrl.pathname;
      //         console.log('rewrites: context.parsedUrl.pathname', retval);
      //         return retval;
      //       },
      //     },
      //   ],
      // },
      log: { level: 'warn' },
      middleware: (app, builtins) => {
        const proxy = (path, config = {}) =>
          app.use(builtins.proxy(path, config));

        proxy("/graphql", {
          target: {
            host: '127.0.0.1',
            protocol: "http:",
            port: 3001,
            secure: true,
          },
        });

        proxy("/api/", {
          target: "https://www.qa.express.com",
          secure: false,
          changeOrigin: true,
        });
      },
    }),
  ],
});


exports.extractStyles = ({ mode, include }) => {
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          include,
          use: [
            {
              loader:
                mode === "development"
                  ? "style-loader"
                  : MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                url: false,
              },
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: 'fast-sass-loader',
              options: {
                sassOptions: {
                  includePaths: include
                },
                sourceMap: true,
              },
            },
          ],
          sideEffects: true,
        },
      ],
    },
  };
};

exports.minifyCSS = ({ options }) => ({
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({ minimizerOptions: options })
    ]
  }
});

exports.loadNodeModuleCSS = ({ mode, include }) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        use: [
          {
            loader:
              mode === "development"
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url, /* resourcePath */) => {
                  // resourcePath - path to css file

                  // Don't handle `font` urls
                  if (url.includes(".woff")) {
                    return false;
                  }

                  return true;
                },
              },
            },
          },
        ],
      }
    ]
  }
});

// exports.autoPrefix = () => ({
//   loader: "postcss-loader",
//   options: {
//     postcssOptions: {
//       plugins: [require("autoprefixer")()],
//     },
//   },
// });

exports.loadImages = ({ limit } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(gif|jpg|png|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: limit,
          }
        },
        generator: {
          filename: 'assets/images/[name].[contenthash:8][ext]'
        }
      },
    ],
  },
});

// maybe merge?
exports.loadSVG = ({ limit }) => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: limit } },
      },
    ],
  },
});

exports.loadFonts = ({ limit }) => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: limit,
          }
        },
        generator: {
          filename: 'assets/fonts/[name].[contenthash:8][ext]',
        }
      },
    ],
  },
});

exports.loadJavaScript = ({ include }) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include,
        // exclude: /\bnode_modules\b/,
        // exclude: /@babel(?:\/|\\{1,2})runtime/,
      },
    ],
  },
});

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new TerserPlugin()]
  }
});

exports.generateSourceMaps = ({ type } = {}) => ({
  devtool: type,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: [/\.(ts|tsx)$/],
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
});
