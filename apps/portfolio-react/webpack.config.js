const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        mode: argv.mode,
        devtool: 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3001,
        },
        output: {
            publicPath: isProduction ? './' : 'http://localhost:3001/',
            path: path.resolve(__dirname, '../../dist/portfolio-react'),
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
                    'mvp.css': { singleton: true, eager: true },
                },
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    };
};