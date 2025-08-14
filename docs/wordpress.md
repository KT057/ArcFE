## プレビュー方法

- 1. アプリケーションパスワードを作成
- 2. そのパスワードを使って、base64を作成
  - `echo ${username}:${アプリケーションパスワード} | base64` でbase64に変換
  - usernameはちゃんと作成したユーザー名を入れる
- 3. そのBasic認証をheaderに追加する
  - `curl -H "Authorization: Basic {base64}" \
"http://127.0.0.1:9000/wp-json/wp/v2/posts/57?status=draft"`
