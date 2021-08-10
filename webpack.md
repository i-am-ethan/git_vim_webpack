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