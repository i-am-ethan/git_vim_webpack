# gitの使い方(個人開発版)
※インストールの手順は省く

# コマンド集
1. 新規コミット
※先にgithubのリポジトリを作成する場合
```
git clone https://github.com/i-am-ethan/git_how_to_use.git
code . #エディタ開く
git init
git add .
git commit -m "initial"
git push
```

2. 追加コミット
※初回コミットの後、追加でコミットしたい場合
```
git add .
git commit -m "htmlを編集しました"
git push
```

3. 現在接続しているリモートリポジトリを確認したい場合
```
git remote -v
```

4. 現在接続しているリモートリポジトリを削除したい
```
git remote rm  origin(remote -vで出てきたやつ)
```

5. 新しくブランチを作って、元いたブランチに変更を統合（マージ）する<br>
※新しく機能を追加する場合などに使う
```
# 新しいブランチを作って移行する
git checkout -b (new branch name)
# 内容を変更したらプッシュする
git push origin HEAD
# masterに戻る(- は元いたブランチという意味)
git checkout -
# mergeする
git merge - 
# mergeしたものをremoteにpush
git push origin HEAD

```
6. 編集箇所を知る
```
# 大まかに知る
git status
# 詳細を知る(qで終わる)
git diff README.md(知りたいファイル名)
```

7. githubにアップしないファイルの設定
- .gitignoreファイルを作成する
- アップしないファイル名を記述する<br>
例えばnode_modules/