const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')


module.exports = env => ({
    entry: ["@babel/polyfill", './src/app.js'],
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/ ,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {

                    publicPath: (resourcePath, context) => {
                      return (
                        path.relative(path.dirname(resourcePath), context) 
                      );
                    },

                  },
                },
                {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true,
                      url: false
                  }
              },
                'sass-loader'
              ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.css',
        }),
        new CleanWebpackPlugin(),
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
