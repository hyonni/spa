const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode : 'development',
    entry : {
        app : '/src/js/app',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 8080,
    },
    output : {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module : {
        rules : [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test : /\.(png|jpe?g|gif)$/i,
                loader : 'file-loader',
                options : {
                    publicPath : '../',
                    name: '/images/[name].[ext]?[contenthash]',
                },

            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './index.html', // 템플릿 경로를 지정
            templateParameters: { // 템플릿에 주입할 파라매터 변수 지정
                env: process.env.NODE_ENV === 'development' ? '개발모드' : '',
            },
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
            } : false,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ 
            filename: `/styles/[name].css` 
        })
    ],
    
};