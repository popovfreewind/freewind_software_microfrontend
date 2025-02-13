import { container } from 'webpack';
const { ModuleFederationPlugin } = container;
import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/main.ts';
export const devServer = {
    static: resolve(__dirname, 'dist'),
    port: 3002,
    historyApiFallback: true,
};
export const output = {
    publicPath: 'http://localhost:3002/',
    path: resolve(__dirname, 'dist'),
};
export const plugins = [
    new ModuleFederationPlugin({
        name: 'angularRemote',
        filename: 'remoteEntry.js',
        exposes: {
            './AngularApp': './src/app/app.module.ts',
        },
    }),
];