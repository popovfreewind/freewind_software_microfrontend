const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3001,
    },
    output: {
        publicPath: "http://localhost:3001/",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'portfolioReact',
            filename: "remoteEntry.js",
            exposes: {
                "./PortfolioComponent": "./src/PortfolioComponent",
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