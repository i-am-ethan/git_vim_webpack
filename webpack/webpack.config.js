// pathライブラリ
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist')//path.resolveで絶対パスを取得できる
    }
}