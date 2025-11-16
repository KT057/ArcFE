# Vercel自動デプロイ設定ガイド（ArcFE使用プロジェクト向け）

このドキュメントは、ArcFE（このフロントエンドボイラープレート）を依存関係としてインポートしているプロジェクトで、GitHub ActionsからVercelへの自動デプロイを設定する手順をまとめたものです。

## 📋 前提条件

- プロジェクトがGitHubリポジトリで管理されている
- `package.json`でArcFEをプライベートリポジトリとして参照している
- Vercelアカウントとプロジェクトが作成済み
- `.vercel/project.json`が存在する（`vercel link`コマンドで作成）

## 🔐 必須シークレットの設定

### 1. GitHubリポジトリのシークレット設定画面にアクセス

```
GitHubリポジトリ → Settings → Secrets and variables → Actions → New repository secret
```

### 2. 以下の4つのシークレットを追加

| シークレット名 | 説明 | 取得方法 |
|---|---|---|
| `GH_PRIVATE_REPO_TOKEN` | プライベートリポジトリ（ArcFE）へのアクセス用GitHubトークン | [GitHub Personal Access Token](#githubトークンの作成) |
| `VERCEL_TOKEN` | Vercel CLIの認証トークン | [Vercel Token](#vercelトークンの作成) |
| `VERCEL_ORG_ID` | VercelのOrganization ID | [`.vercel/project.json`から取得](#vercel-idsの取得) |
| `VERCEL_PROJECT_ID` | VercelのProject ID | [`.vercel/project.json`から取得](#vercel-idsの取得) |

## 🔑 トークンの取得方法

### GitHubトークンの作成

1. https://github.com/settings/tokens にアクセス
2. **"Generate new token"** → **"Fine-grained tokens"** を選択
3. **Token name**（名前）に「ArcFE Access Token」などわかりやすい名前を入力
4. **Expiration**（有効期限）を設定（推奨: 90日以上、またはカスタム）
5. **Repository access**で **"Only select repositories"** を選択
   - ArcFEリポジトリ（`kichikawa57/ArcFE`）を選択
6. **Permissions**（権限）で **Repository permissions** を設定：
   - **Contents**: `Read-only`（リポジトリのコンテンツを読み取る）
   - **Metadata**: `Read-only`（自動的に設定される）
7. **"Generate token"** をクリック
8. 表示されたトークンをコピー（⚠️ 一度しか表示されないので注意）
9. デプロイ先プロジェクトのGitHubリポジトリのSecretsに `GH_PRIVATE_REPO_TOKEN` として追加

### Vercelトークンの作成

1. https://vercel.com/account/tokens にアクセス
2. **"Create Token"** をクリック
3. Token Nameに「GitHub Actions Deploy」などわかりやすい名前を入力
4. **Scope**を選択（通常はFull Accountで問題ありません）
5. **Expiration**（有効期限）を設定（推奨: No Expiration）
6. **"Create"** をクリック
7. 表示されたトークンをコピー
8. GitHubリポジトリのSecretsに `VERCEL_TOKEN` として追加

### Vercel IDsの取得

プロジェクトルートの `.vercel/project.json` を確認：

```json
{
  "orgId": "team_xxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxx"
}
```

- `orgId` の値を `VERCEL_ORG_ID` として追加
- `projectId` の値を `VERCEL_PROJECT_ID` として追加

**注意**: `.vercel/project.json`が存在しない場合は、以下のコマンドを実行：

```bash
vercel link
```

## 📝 GitHub Actionsワークフローの作成

プロジェクトルートに `.github/workflows/deploy.yml` を作成：

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main  # mainブランチへのプッシュ時に実行

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22  # プロジェクトのNode.jsバージョンに合わせて調整

      - name: Install pnpm
        uses: pnpm/action-setup@v4

      - name: Configure Git for private repos and install dependencies
        env:
          GIT_CONFIG_COUNT: "2"
          GIT_CONFIG_KEY_0: "url.https://x-access-token:${{ secrets.GH_PRIVATE_REPO_TOKEN }}@github.com/.insteadOf"
          GIT_CONFIG_VALUE_0: "git@github.com:"
          GIT_CONFIG_KEY_1: "url.https://x-access-token:${{ secrets.GH_PRIVATE_REPO_TOKEN }}@github.com/.insteadOf"
          GIT_CONFIG_VALUE_1: "https://github.com/"
        run: |
          git config --global url."https://x-access-token:${{ secrets.GH_PRIVATE_REPO_TOKEN }}@github.com/".insteadOf "git@github.com:"
          git config --global url."https://x-access-token:${{ secrets.GH_PRIVATE_REPO_TOKEN }}@github.com/".insteadOf "https://github.com/"
          git config --global --list | grep url
          pnpm install

      - name: Install Vercel CLI
        run: pnpm add -g vercel

      - name: Pull Vercel environment
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build with Vercel
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy prebuilt to Vercel
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
        run: vercel deploy --prebuilt --prod --yes --token=${{ secrets.VERCEL_TOKEN }}
```

## ✅ 確認事項チェックリスト

設定を完了する前に、以下を確認してください：

- [ ] GitHubリポジトリに4つのシークレットが設定されている
  - [ ] `GH_PRIVATE_REPO_TOKEN`
  - [ ] `VERCEL_TOKEN`
  - [ ] `VERCEL_ORG_ID`
  - [ ] `VERCEL_PROJECT_ID`
- [ ] `package.json`でArcFEの依存関係が正しく設定されている
  ```json
  {
    "dependencies": {
      "@kichikawa57/arcfe": "git+ssh://git@github.com/kichikawa57/ArcFE.git#v1.0.0"
    }
  }
  ```
- [ ] `.vercel/project.json`が存在する
- [ ] `.github/workflows/deploy.yml`が作成されている
- [ ] ローカルでSSH接続が確認できる（`ssh -T git@github.com`）

## 🚀 デプロイの実行

すべて設定が完了したら、以下のコマンドでプッシュ：

```bash
git add .
git commit -m "feat: GitHub ActionsとVercelの自動デプロイを設定"
git push origin main
```

## 🎯 設定完了後の動作フロー

1. `main`ブランチにコードをプッシュ
2. GitHub Actionsが自動的に起動
3. プライベートリポジトリ（ArcFE）の依存関係をインストール
4. Vercelでプロジェクトをビルド
5. 本番環境に自動デプロイ ✨

デプロイの進行状況は、GitHubリポジトリの **Actions** タブで確認できます。

## 🐛 トラブルシューティング

### エラー: `fatal: could not read Username for 'https://github.com'`

**原因**: GitHubトークンが正しく設定されていないか、トークンの権限が不足しています。

**解決方法**:
1. `GH_PRIVATE_REPO_TOKEN`が正しく設定されているか確認
2. トークンに`repo`スコープが含まれているか確認
3. トークンの有効期限が切れていないか確認

### エラー: `Error: No Project Settings found for project`

**原因**: Vercel IDsが正しく設定されていません。

**解決方法**:
1. `.vercel/project.json`が存在するか確認
2. `VERCEL_ORG_ID`と`VERCEL_PROJECT_ID`が正しくコピーされているか確認
3. 必要に応じて`vercel link`を再実行

### エラー: `Error: Failed to create deployment`

**原因**: Vercelトークンの権限が不足しているか、プロジェクト設定に問題があります。

**解決方法**:
1. `VERCEL_TOKEN`が正しく設定されているか確認
2. Vercelダッシュボードでプロジェクト設定を確認
3. トークンに適切なスコープ（Full Account推奨）が設定されているか確認

### ビルドは成功するがデプロイが失敗する

**原因**: 環境変数が不足している可能性があります。

**解決方法**:
1. Vercelダッシュボードで必要な環境変数を設定
2. `vercel pull`ステップで環境変数が正しく取得されているか確認

## 📚 参考リンク

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Vercel Tokens](https://vercel.com/docs/rest-api#authentication)

## 💡 Tips

### プレビューデプロイの追加

プルリクエストごとにプレビュー環境を作成したい場合は、ワークフローを以下のように調整：

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

そして、デプロイステップを環境に応じて分岐：

```yaml
- name: Deploy to Vercel
  env:
    VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
  run: |
    if [ "${{ github.event_name }}" == "pull_request" ]; then
      vercel deploy --token=${{ secrets.VERCEL_TOKEN }}
    else
      vercel deploy --prebuilt --prod --yes --token=${{ secrets.VERCEL_TOKEN }}
    fi
```

### キャッシュの活用

ビルド時間を短縮するために、依存関係をキャッシュ：

```yaml
- name: Cache pnpm store
  uses: actions/cache@v4
  with:
    path: ~/.pnpm-store
    key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-pnpm-
```
