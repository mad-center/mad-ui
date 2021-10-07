/* eslint-disable @typescript-eslint/no-var-requires */
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: {
    app: './website/index.ts',
  },
  output: {
    path: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // refer https://webpack.js.org/loaders/css-loader/#importloaders
              importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              modules: {
                compileType: 'module',
                mode: 'global',
              },
              esModule: false,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          {
            loader: 'sass-loader', // scss-loader
            options: {
              sourceMap: false,
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.scss'],
    alias: {
      vue$: '@vue/runtime-dom',
      '@': resolve('website'),
    },
    modules: ['node_modules'],
  },
  plugins: [
    new DefinePlugin({
      // 为兼容 Vue2，在 Vue3 中仍然可以使用选项 API 的方式编写代码，
      // 但对于明确不会使用选项 API 的情况，可以选择 __VUE_OPTIONS_API__ false 来关闭该特性
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './website/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3001,
    hot: true,
    host: 'localhost',
    disableHostCheck: true,
    contentBase: ['./packages', './website', '/dist'], // both src and output dirs
  },
}
