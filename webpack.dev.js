const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

process.env.NODE_ENV = 'development'

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'})
} else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'})
}

module.exports = merge(common,{
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSEGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSEGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
        })
    ]
})