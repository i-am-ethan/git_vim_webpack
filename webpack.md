# 疑問
- --save -devとは?<br>
開発単位でパッケージをインストールすることができる。<br>
その他に"-g"というオプションがある。
- -gオプションとは?<br>
-gを使用するとグローバルに使用できる<br>
ただし、バージョンのコンフリクトが発生する可能性が高いので--save -devでプロジェクトごとに分けた方が良い。
- --saveとは?<br>
--saveオプションだけの場合は、devDependenciesではなく、dependenciesに追加される。
- devDependenciesとdependenciesの違い?<br>
プロジェクト公開時に他の開発者がnpm installをした際に、devDependenciesだとインストールされないが,
dependenciesだとインストールされる。



# webpackのインストール方法
1. webpackのインストール
```
npm init
```

2. webpackの最新版の確認
```
npm view webpack
```

3. npmのインストール
```
# dist-tagsのlatestをインストールしてみる
npm install --save-dev webpack@5.49.0
```

4. package-lock.jsonとは?
現在どんなパッケージがインストールされているのかが事細かく記載されている
そして、そのパッケージはnode_modulesにインストールされている

5. webpack-cliの最新バージョンを確かめる
```
npm view webpack-cli
```

6. webpack-cliをインストールする<br>
※webpackをコマンドで実行するためのパッケージ
```
#dist-tagsのlatest:
npm install --save-dev webpack-cli@4.7.2
```

7. .src/ディレクトリ内にindex.jsを作成し、webpackを実行する
※optionあり
- --mode development:見やすくなる
- --mode production:圧縮されて軽くなる
```
npx webpack
# 実行後はdistファイルが出来上がる
```

8. webpackの設定ファイルを作る(webpack.config.js)
```
# エントリとあうとぷっとのpathを記載(絶対パスで指定する必要がある)
// pathライブラリ
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist')//path.resolveで絶対パスを取得できる
    }
}
```

9. cssをモジュールとして読み込む(css-loader)
```
#最新版の確認
npm view css-loader
npm install --save-dev css-loader@6.2.0
```

9. style-loaderを読み込み
```
npm view style-loader
npm install --save-dev style-loader@3.2.1
```

10. cssプラグインをインストール
```
npm view mini-css-extract-plugin
npm install --save-dev mini-css-extract-plugin@2.2.0
```

11. htmlプラグインをインストール
```
npm view html-webpack-plugin
npm install --save-dev html-webpack-plugin@5.3.2
```

12. ファイル構成を考える
distファイル内をクリーンアップするプラグイン
```
npm view clean-webpack-plugin
npm install --save-dev clean-webpack-plugin@4.0.0-alpha.0
```

13. アウトプットcssの名前変更
```
new MiniCssExtractPlugin({
            filename: 'my.css',
        }),
```

14. distとsrcの中身を整える

15. 画像を配置する
```
npm view url-loader
npm install --save-dev url-loader@4.1.1

url-loaderよりもfile-loaderが一般的
npm view file-loader
npm install --save-dev file-loader@6.2.0
```
