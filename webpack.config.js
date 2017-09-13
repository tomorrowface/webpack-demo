const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const styleLoader = ['style-loader','css-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: [
                require('postcss-import'),
                require('autoprefixer')({
                    browsers:['last 5 versions']
                }),
            ]
        }
    }
];

const webpackConfig = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: styleLoader
            },
            {
                test: /\.less$/,
                use: styleLoader.concat('less-loader')
            },
            {
                test: /\.sass$/,
                use: styleLoader.concat('sass-loader')
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
                    'url-loader?limit=200&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                ]
            }
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

module.exports = webpackConfig;