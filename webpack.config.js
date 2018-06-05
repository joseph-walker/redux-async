const path = require('path');

module.exports = {
    entry: {
        thunk: './src/implementations/thunk/index.js',
        saga: './src/implementations/saga/index.js',
        loop: './src/implementations/loop/index.js',
    },
    output: {
        filename: '[name]/bundle.js',
        path: __dirname + '/dist'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};