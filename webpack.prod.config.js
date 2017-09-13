const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
});
