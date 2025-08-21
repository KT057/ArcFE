# WordPress プレビュー設定

WordPressコンテンツをREST APIとアプリケーションパスワード認証を使用してプレビューする方法を説明します。

## 前提条件

- `http://127.0.0.1:9000` で動作するWordPress開発環境
- 適切な権限を持つWordPressユーザーアカウント

## 設定手順

### 1. アプリケーションパスワードの作成

1. WordPress管理画面にログイン
2. **ユーザー → あなたのプロフィール** に移動
3. **アプリケーションパスワード** セクションまでスクロール
4. アプリケーション名を入力（例：「API Preview」）
5. **新しいアプリケーションパスワードを追加** をクリック
6. 生成されたパスワードをコピー（再表示されません）

### 2. Base64認証文字列の生成

ユーザー名とアプリケーションパスワードを使用してBase64エンコードされた認証文字列を作成：

```bash
echo "ユーザー名:アプリケーションパスワード" | base64
```

**例：**
```bash
echo "admin:abcd 1234 wxyz 5678 mnop 9012" | base64
```

**重要：** `ユーザー名` を実際のWordPressユーザー名に、パスワードはアプリケーションパスワード（通常のログインパスワードではない）を使用してください。

### 3. API リクエストの実行

Basic認証でBase64文字列を使用してAPIリクエストを行います：

```bash
curl -H "Authorization: Basic あなたのBASE64文字列" \
  "http://127.0.0.1:9000/wp-json/wp/v2/posts/57?status=draft"
```

**例：**
```bash
curl -H "Authorization: Basic YWRtaW46YWJjZCAxMjM0IHd4eXogNTY3OCBtbm9wIDkwMTI=" \
  "http://127.0.0.1:9000/wp-json/wp/v2/posts/57?status=draft"
```

## API エンドポイント

### よく使用されるWordPress REST API エンドポイント：

- **投稿：** `/wp-json/wp/v2/posts`
- **固定ページ：** `/wp-json/wp/v2/pages`
- **メディア：** `/wp-json/wp/v2/media`
- **カテゴリー：** `/wp-json/wp/v2/categories`
- **タグ：** `/wp-json/wp/v2/tags`

### クエリパラメーター：

- `status=draft` - 下書き投稿を表示
- `status=private` - 非公開投稿を表示
- `per_page=10` - 結果を制限
- `orderby=date` - 日付で並び替え

## セキュリティ上の注意

- アプリケーションパスワードはメインパスワードを公開せずに安全なAPI アクセスを提供
- 各アプリケーションパスワードは個別に取り消し可能
- 認証情報は安全に保存し、バージョン管理システムにコミットしない
- 本番環境では環境変数を使用

## トラブルシューティング

- **401 Unauthorized：** Base64文字列が正しく書式設定されているか確認
- **403 Forbidden：** ユーザーが要求されたコンテンツに対して適切な権限を持っているか確認
- **404 Not Found：** 投稿IDが存在し、APIエンドポイントが正しいか確認
