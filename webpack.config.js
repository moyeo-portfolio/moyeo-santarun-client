const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {  
    name: 'test',
    devtool: 'eval',
    mode: "production",
    entry: {
      app: ['./src/index.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            },
            {
                test: [/\.js$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
                enforce: 'pre',
                exclude: /node_modules/,
                use: ['source-map-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: { 
        path: path.resolve(__dirname, 'build'), 
        filename: 'main.js',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        proxy: {
            '/': {
              target: 'http://openapi.seoul.go.kr:8088',
              changeOrigin: true,
            }
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
}
