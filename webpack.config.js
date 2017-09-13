/**
 * webpack
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //用来表示绝对路径
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'), // 这里的文件已经处理过了，不需要再处理了
                include: path.resolve(__dirname, 'src'), //缩小范围，提升打包速率
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                // loader: "style-loader!css-loader!postcss-loader"[
                use: ['style-loader',
                    { 
                        loader: 'css-loader', 
                        // options: { 
                        //     importLoaders: 1  // postcss-import 取代之
                        // } 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),//PostCSS plugin to transform @import rules by inlining content
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                }),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),//PostCSS plugin to transform @import rules by inlining content
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                })
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: ['style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),//PostCSS plugin to transform @import rules by inlining content
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: ['style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),//PostCSS plugin to transform @import rules by inlining content
                                require('autoprefixer')({
                                    browsers:['last 5 versions']
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=200&name=assets/[name]-[hash:5].[ext]', //使用loaders参数写后面
                    'image-webpack-loader' //压缩图片
                ]
                // loader: 'url-loader', 
                // query: {
                //     limit: 8192,
                //     name: '[name].[hash].[ext]'
                // }
                // use: [
                // {
                //     loader: 'url-loader',
                //     options: {
                //         limit: 8192 //8194/1024kb
                //     }
                // }]
            }
            // http请求来的图片可缓存，下次访问更快，base64载入图片，任何地方使用都会在那个地方都会有同样的base64编码，冗余，影响了html、js体积
            // http请求文件压缩
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}