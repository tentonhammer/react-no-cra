const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.(js|tsx|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        "@babel/preset-typescript"
                    ]
                }
            }
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: "index.html"
        })
    ],
}