const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
  	app: './src/index.js',
  	// print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
    hot: true
  },
  plugins: [
  	new CleanWebpackPlugin(['dist']),	//传递清空的目录，数组形式
  	new HtmlWebpackPlugin({
  		title: 'output management'
  	}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
   module: {
     rules: [
        {
          test: /\.css$/,
          use: [
          'style-loader',
          'css-loader'
          ]
        },
        {
          test: /\.html$/,
          use: [
          'html-loader'
          ]
        },        
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
          'file-loader'
          ]
        }              
     ]
   }
};