 const merge = require('webpack-merge');
 const common = require('./webpack.config.js');
 const webpack = require('webpack');

 module.exports = merge(common, {
   devtool: '#cheap-module-eval-source-map',
   devServer: {
       contentBase: './dist',
       hot: true,
       inline: true,
       host: "0.0.0.0",
       port: 2708
   },
   plugins: [
       new webpack.HotModuleReplacementPlugin()
   ]
 });
