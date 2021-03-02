const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {

        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'bundle.js',
       // publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            exclude: /node-modules/,
            options: {
                presets: [
                    '@babel/env', 
                    ['@babel/preset-react',{
                        runtime:'automatic',
                    },
                ],
                    
                ],
                plugins: [
                    [
                        '@babel/plugin-proposal-class-properties',
                        {loose: true},
                    ],
                ],
            },
        }, 
        {
            test : /\.css$/,
            use: ["style-loader", "css-loader"],  //работает с права на лево
        },
        ],
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'My App',
            template: path.resolve(__dirname, 'index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    devtool: 'inline-source-map',
};