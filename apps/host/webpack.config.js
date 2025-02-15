const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const { ModuleFederationPlugin } = container;
const path = require('path');

const deps = require("./package.json").dependencies;
module.exports = {
    entry: './src/index.js',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ModuleFederationPlugin(
            {
                name: 'host',
                remotes: {
                    reactRemote: 'react-remote@http://localhost:3001/remoteEntry.js',
                },
            }
        )
    ],
};