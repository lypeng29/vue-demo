const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './index.js',
        vue: 'vue/dist/vue.js',
        common: ['vue','jquery']
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
            title: 'vue-demo',
            template: './index.html',
            filename: 'index.html',
            // chunks: ['index', 'common']
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery"
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextWebpackPlugin("style.css", {
        //     allChunks: true
        // })
        // new webpack.NamedModulesPlugin(),
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
    //     // root: [
    //     //     path.resolve(__dirname, 'src/lib')
    //     // ],
    //     lib: path.resolve(__dirname, 'src/lib/'),
    //     // extensions: ['.js'],
    //     alias: {
    //     //     'test': 'test.js',
    //         'vue': 'vue-2.4.2.js',
    //     }
        alias: {
            'vue': 'vue/dist/vue.js'
        },
    }, 
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    }      
};