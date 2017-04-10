const PATH = require('path');
const ETP = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.js'
  },
  devServer: {
    contentBase: PATH.resolve(__dirname, './client'),
    publicPath: '/',
    port: 8000,
    host: 'localhost'
  },
  module: {
    rules: [
      {
        test: /\.spec\.js$/i,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        loader: ['ng-annotate-loader', 'babel-loader?presets[]=es2015']
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/i,
        loader: 'url-loader?limit=10000&name=[name].[hash].[ext]'
      },
      {
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: PATH.resolve(__dirname, './dist/assets'),
    publicPath: '/assets'
  }
}
