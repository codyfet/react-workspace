const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.jsx',
    /**
     * Секцию output в данном случае можно было бы опустить,
     * т.к. по умолчанию заданы именно такие настройки.
     */
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    plugins: [htmlPlugin]
};
