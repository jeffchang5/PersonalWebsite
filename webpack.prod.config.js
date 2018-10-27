const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve('./dev/index.tsx'),
  output: {
    filename: 'bundle.min.js',
    path: path.resolve('./dist/public'),
  },
  target: 'web',
  resolve: {
    modules: [
      path.resolve('./dev'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|gif|otf|ttf|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
            },
          }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./dev/template.html'),
      title: 'Jeffrey Chang',
      inject: 'body',
    }),
  ],
};
