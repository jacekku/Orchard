const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/main.ts',
    mode: 'development',
    module: {
        rules: [{
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};