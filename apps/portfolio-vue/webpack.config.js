const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        mode: argv.mode,
        devtool: 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3002,
        },
        output: {
            publicPath: isProduction ? 'https://popovfreewind.github.io/freewind_software_microfrontend/portfolio-vue/' : 'http://localhost:3002/',
            path: path.resolve(__dirname, '../../dist/portfolio-vue'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                { test: /\.vue$/, loader: "vue-loader" },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new ModuleFederationPlugin({
                name: 'portfolioVue',
                filename: "remoteEntry.js",
                exposes: {
                    "./PortfolioComponent": "./src/PortfolioComponent.vue",
                },
                shared: {
                    'mvp.css': { singleton: true, eager: true },
                    vue: { singleton: true, eager: true },
                },
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new DefinePlugin({
                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
              }),
        ],
    };
};