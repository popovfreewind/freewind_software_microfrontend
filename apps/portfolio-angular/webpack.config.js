const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.ts',
        mode: argv.mode,
        devtool: 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3003,
        },
        output: {
            publicPath: isProduction ? 'https://popovfreewind.github.io/freewind_software_microfrontend/portfolio-angular/' : 'http://localhost:3003/',
            path: path.resolve(__dirname, '../../dist/portfolio-angular'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                  },
            ],
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'portfolioAngular',
                filename: "remoteEntry.js",
                exposes: {
                    "./PortfolioComponent": "./src/PortfolioComponent",
                },
                shared: {
                    'mvp.css': { singleton: true, eager: true },
                },
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    };
};