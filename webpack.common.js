const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/app.js',
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
                'css-loader',
                'sass-loader',
              ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.css',
        }),
        new CleanWebpackPlugin()
      ]
}
