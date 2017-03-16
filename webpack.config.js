const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './src/app.js'],
    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets:['react']
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'www/js'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.json'],
        modulesDirectories: ['node_modules', path.resolve(__dirname, './node_modules')]
    }
};
