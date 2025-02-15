const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const { ModuleFederationPlugin } = container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3001,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'portfolio-react',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactApp': './src/App',
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};