const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {



    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
      
    },
    devServer: {
        static: './dist',

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test:/\.mp3$/i,
                use: ['file-loader'],
             
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    performance: {
        hints:false
    }

};

module.exports = config;