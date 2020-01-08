const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/favorite-cities.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'favorite-cities.js'
    },
    resolve: {
        modules: [path.join(__dirname), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            modernizr$: path.resolve(__dirname, './.modernizrrc')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
