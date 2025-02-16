const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const { ModuleFederationPlugin } = container;
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
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
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ModuleFederationPlugin(
            {
                name: 'host',
                filename: "remoteEntry.js",
                remotes: {
                    'portfolioReact': 'portfolioReact@http://localhost:3001/remoteEntry.js',
                },
                shared: {
                    react: { singleton: true, eager: true },
                    'react-dom': { singleton: true, eager: true },
                },
            }
        )
    ],
};