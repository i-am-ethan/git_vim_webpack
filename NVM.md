# 1.NVMをインストールする
参考記事:
https://github.com/nvm-sh/nvm#install--update-script
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# バージョンの確認
nvm --version
# インストール可能なnode.jsのバージョンの確認
nvm ls-remote
# インストールする
nvm install v14.17.4(安定版がおすすめ)
# nodeのバージョンを確認する
node --version
```
