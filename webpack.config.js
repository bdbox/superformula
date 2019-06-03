var webpack = require('webpack');
var path = require('path');
var proxy = require('http-proxy-middleware')
 
module.exports = {
  entry: './src/index.js',
  module: {
        rules: [{
                test: /\.(js|jsx)$/,
               exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
           },
           {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
           },
           {test: /\.(jpg|png|svg)$/, loader: 'url-loader'}
       ]
  },
  mode:'development',
  output: {
           path: __dirname + '/public',
           filename: 'dist.js'
  },
  devServer: {
      contentBase: __dirname + '/public',
      historyApiFallback: true
    } 
}