const path = require('path');

module.exports = {
  entry: "./frontend/main.jsx",
  output: {
    path: path.resolve(__dirname), // must be an absolute path = we must require path which is a module //__dirname is a var in JS
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_module)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "source-map"
};