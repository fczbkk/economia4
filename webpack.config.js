// var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: './build/client/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  }
  /*
  ,
  plugins: [
    new UglifyJsPlugin({
      compress: {
        dead_code: true
      },
      beautify: true,
      mangle: false
    })
  ]
  */
};