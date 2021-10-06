/* eslint-disable @typescript-eslint/no-var-requires */
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: './playground/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
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
              // refer https://webpack.js.org/loaders/css-loader/#modules and https://github.com/webpack-contrib/css-loader#auto
              modules: {
                auto: true,
              },
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
      // asset module to load txt file or image
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.scss'],
    alias: {
      vue$: '@vue/runtime-dom',
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
      template: './playground/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3001,
    hot: true,
  },
}
