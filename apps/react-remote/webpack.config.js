import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

export const mode = 'development';
export const entry = './src/index.js';
export const devServer = {
    static: resolve(__dirname, 'dist'),
    port: 3001,
    historyApiFallback: true,
};
export const output = {
    publicPath: 'http://localhost:3001/',
    path: resolve(__dirname, 'dist'),
};
export const plugins = [
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
        template: './public/index.html',
    }),
];