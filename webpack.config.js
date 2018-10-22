const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var htmlPlugin = new HtmlWebpackPlugin({
    template: "./dist/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist/index.html',
        filename: 'index_bundle.js'
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
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        //Automatically resolve certain extensions.
        extensions: ['.less', '.js', '.jsx']
    },
    plugins: [htmlPlugin]
};