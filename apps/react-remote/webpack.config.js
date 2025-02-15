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
        historyApiFallback: true,
    },
    output: {
        publicPath: 'http://localhost:3001/',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactRemote',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactApp': './src/App',
            },
            shared: {
                react: { singleton: true, eager: true },
                'react-dom': { singleton: true, eager: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};