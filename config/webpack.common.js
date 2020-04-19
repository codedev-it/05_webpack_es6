const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main:"./src/js/main.js",
        vendor:"./src/js/vendor.js"
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name:'[name]-[hash:8].[ext]',
                        outputPath:"images"
                    }
                  },
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
    ]
}