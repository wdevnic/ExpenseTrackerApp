const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
require('dotenv').config({path: '.env.development'})


module.exports = env => merge(common(env),{
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
})

