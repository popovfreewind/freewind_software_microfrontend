const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
    },
    output: {
        publicPath: "http://localhost:3000/",
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
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ModuleFederationPlugin(
            {
                name: 'host',
                remotes: {
                    portfolioReact: 'portfolioReact@http://localhost:3001/remoteEntry.js',
                },
                shared: {
                    react: { singleton: true, eager: true },
                    'react-dom': { singleton: true, eager: true },
                    'mvp.css': { singleton: true, eager: true },
                },
            }
        ),
        new ExternalTemplateRemotesPlugin(),
    ],
};