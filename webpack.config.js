const WP = require('webpack');
const MERGE = require('webpack-merge');
const HTML = require('html-webpack-plugin');
const WPCC = require('./webpack.common.config');

module.exports = MERGE(WPCC, {
  devtool: 'source-map',
  plugins: [
    new HTML({
      template: 'client/index.html'
    }),
    new WP.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new WP.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
})
