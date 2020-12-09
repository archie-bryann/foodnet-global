const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // devtool: 'inline-source-map',
    /** solve the promptm below */
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
     },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:'/node_modules/',
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },

    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
          }),
    ]
}