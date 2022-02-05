const path = require('path');

module.exports = {
  entry: './src/track.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'inuminate.js',
    path: path.resolve(__dirname, 'dist'),
  },
};