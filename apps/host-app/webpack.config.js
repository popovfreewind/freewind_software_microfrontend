const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        mode: argv.mode,
        devtool: 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3000,
        },
        output: {
            publicPath: isProduction ? 'https://popovfreewind.github.io/freewind_software_microfrontend/' : 'http://localhost:3000/',
            path: path.resolve(__dirname, '../../dist'),
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
                { test: /\.vue$/, loader: "vue-loader" },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new ModuleFederationPlugin(
                {
                    name: 'host',
                    remotes: {
                        portfolioReact: isProduction
                            ? 'portfolioReact@https://popovfreewind.github.io/freewind_software_microfrontend/portfolio-react/remoteEntry.js'
                            : 'portfolioReact@http://localhost:3001/remoteEntry.js',
                        portfolioVue: isProduction
                            ? 'portfolioVue@https://popovfreewind.github.io/freewind_software_microfrontend/portfolio-vue/remoteEntry.js'
                            : 'portfolioVue@http://localhost:3002/remoteEntry.js',
                    },
                    shared: {
                        react: { singleton: true, eager: true },
                        'react-dom': { singleton: true, eager: true },
                        'mvp.css': { singleton: true, eager: true },
                    },
                }
            ),
        ],
    }
};