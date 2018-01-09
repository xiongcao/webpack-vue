const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackBase = require('./webpack.config.js');
module.exports = merge(webpackBase, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});