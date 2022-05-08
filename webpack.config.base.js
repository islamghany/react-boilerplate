const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  // loaders : the code gets passed to the loader befor it get compiled with webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {},
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
