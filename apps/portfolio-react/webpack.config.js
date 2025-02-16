const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const { ModuleFederationPlugin } = container;

const deps = require("./package.json").dependencies;

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
            name: 'reactPortfolio',
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
            shared: {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};