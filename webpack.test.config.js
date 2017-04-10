const MERGE = require('webpack-merge');
const WPCC = require('./webpack.common.config.js');

module.exports = MERGE(WPCC, {
  watch: true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        loader: ['istanbul-instrumenter-loader']
      }
    ]
  }
});
