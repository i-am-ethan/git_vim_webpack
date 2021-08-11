// pathライブラリ
const path = require('path')
// mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),//path.resolveで絶対パスを取得できる
        filename:'main.js',//アウトプットするfile名の変更
    },
    module:{
        rules:[
            {
                test: /\.css/,//.cssファイルが見つかればuseを実行する(loaderを使用する)という意味
                use:[
                    {
                        // loader: 'style-loader'//css-loaderが適用されたらstyle-loaderを処理する(※loaderは下から適用されていく)
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}