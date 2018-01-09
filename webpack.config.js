var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');//每次构建前清理 /dist 文件夹
var webpack = require('webpack')
module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name]-[hash].js"  
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'vue demo',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, 
            {
                test: /\.scss$/,
                loader: "sass-loader" // 将 Sass 编译成 CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
             }
        ]
    },
    resolve: {
        alias: {
           'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
     }

    // 作者：tankboo
    // 链接：https://juejin.im/post/5a425cb4f265da43294e4f2e
    // 来源：掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}