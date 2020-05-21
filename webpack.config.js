const nodeExternals = require('webpack-node-externals');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  externals: [nodeExternals()],
  entry: './src/emails-input.ts',
  output: {
    filename: 'emails-input.js',
    // Setting webpack to generate the library with a global variable as
    // the spec of the test is suggesting
    library: 'EmailsInput',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'source-map',
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
