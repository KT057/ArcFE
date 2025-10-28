# Google Map のドキュメント

## API Key はここで取得できる

https://console.cloud.google.com/google/maps-apis/credentials?project=praxis-electron-476502-d1

## スタイルの変更方法

1. スタイルはここで編集できる (https://mapstyle.withgoogle.com/)
2. 編集したスタイルを json 形式でコピーする
3. GCP の地図のスタイルにアクセス (https://console.cloud.google.com/google/maps-apis/studio/styles?project=praxis-electron-476502-d1)
4. スタイルを作成を選び必ず「JSON」を選択してコピーした JSON を貼り付ける (作成後に JSON を貼り付ける事はできない)
5. マップ管理で作成したスタイルを選択する

## Tips

- props で zoom, center を指定すると固定になる、defaultZoom と defaultCenter だと固定じゃなくなる
- サンプルはこちらで確認できる (https://visgl.github.io/react-google-maps/examples)
