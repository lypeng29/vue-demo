const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/main.js',
        // common: ['vue','jquery']
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
            // title: 'vue-demo',
            template: './src/index.html',
            // filename: 'index.html',
            // chunks: ['index', 'common']
        }),
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery"
        // }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextWebpackPlugin("style.css", {
        //     allChunks: true
        // })
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
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
                test: /\.vue$/,
                use: [
                'vue-loader'
                ]
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: [
                'babel-loader'
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
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};