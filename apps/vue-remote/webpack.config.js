import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

export const mode = 'development';
export const entry = './src/main.js';
export const devServer = {
    static: resolve(__dirname, 'dist'),
    port: 3003,
    historyApiFallback: true,
};
export const output = {
    publicPath: 'http://localhost:3003/',
    path: resolve(__dirname, 'dist'),
};
export const plugins = [
    new ModuleFederationPlugin({
        name: 'vueRemote',
        filename: 'remoteEntry.js',
        exposes: {
            './VueApp': './src/App.vue',
        },
    }),
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
];