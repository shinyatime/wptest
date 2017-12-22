var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.[chunkhash].html',
            template: 'index.html',
            inject: 'head'
        })
    ]
}