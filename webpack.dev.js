var path = require('path');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.js');
module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8090
  }
});