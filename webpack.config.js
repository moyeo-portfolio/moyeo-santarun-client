const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {  
    // test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
    // exclude: /node_modules/,
    // use: ['file-loader?name=[name].[ext]'],
    entry: { index: path.resolve(__dirname, 'src', 'index.tsx') },
    output: { path: path.resolve(__dirname, 'build'), filename: 'main.js' },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
}
