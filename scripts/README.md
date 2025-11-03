# Changeset作成スクリプト

`pnpm changeset`コマンドがインタラクティブモードで動作しない環境（VSCode拡張、CI/CDなど）向けのヘルパースクリプトです。

## 使用方法

### 基本的な使い方

```bash
pnpm changeset:add "<パッケージ名>" <変更タイプ> "<変更内容>"
```

### 引数

1. **パッケージ名** - 変更するパッケージ（複数の場合はカンマ区切り）
2. **変更タイプ** - `patch`, `minor`, `major` のいずれか
3. **変更内容** - 変更の説明

### 変更タイプについて

- `patch` - バグ修正や小さな変更 (1.0.0 → 1.0.1)
- `minor` - 新機能の追加 (1.0.0 → 1.1.0)
- `major` - 破壊的変更 (1.0.0 → 2.0.0)

## 利用可能なパッケージ

- `@packages/utils`
- `@packages/hooks`
- `@packages/context`
- `@packages/tests`
- `@packages/ui`

## 使用例

### 単一パッケージの変更

```bash
pnpm changeset:add "@packages/utils" patch "Fix type definitions"
```

### 複数パッケージの変更

```bash
pnpm changeset:add "@packages/utils,@packages/hooks" minor "Add new utility functions"
```

### 破壊的変更

```bash
pnpm changeset:add "@packages/ui" major "Remove deprecated components"
```

## Changesetワークフロー

### パターンA: npmに公開しない場合（推奨）

1. **変更を追加**
   ```bash
   pnpm changeset:add "@packages/utils" patch "Fix bug"
   ```

2. **リリース**
   ```bash
   pnpm release
   ```
   このコマンドは以下を実行します:
   - バージョンを更新
   - パッケージをビルド
   - Gitタグを作成

3. **コミットとプッシュ**
   ```bash
   git add .
   git commit -m "Release packages"
   git push origin master --tags
   ```

### パターンB: npmに公開する場合

1. **変更を追加**
   ```bash
   pnpm changeset:add "@packages/utils" patch "Fix bug"
   ```

2. **npmにログイン**（初回のみ）
   ```bash
   npm login
   ```

3. **パッケージを公開**
   ```bash
   pnpm changeset:publish
   ```

## その他のスクリプト

### Gitタグを作成（tag-packages）

パッケージのバージョンに基づいてGitタグを自動作成します:

```bash
pnpm tag:packages
```

このスクリプトは各パッケージの`package.json`を読み取り、以下の形式でタグを作成します:
- `packages-ui-v1.0.1`
- `packages-hooks-v1.0.1`
- など

既に存在するタグはスキップされます。

### Bashスクリプト版（インタラクティブ）

#### Changesetの作成

ターミナルから直接実行する場合は、インタラクティブなBashスクリプトも使用できます:

```bash
./scripts/create-changeset.sh
```

このスクリプトは対話形式でパッケージ、変更タイプ、変更内容を入力できます。

#### Gitタグの作成

```bash
./scripts/tag-packages.sh
```

対話形式で確認しながらタグを作成できます。

## トラブルシューティング

### `pnpm changeset`でエラーが出る

`Opening '/dev/tty' failed (6): Device not configured` というエラーが出る場合は、このスクリプトを使用してください。このエラーは、インタラクティブなプロンプトが動作しない環境で発生します。

### changesetファイルを手動で作成

スクリプトを使用せず、changesetファイルを手動で作成することもできます:

1. `.changeset/`ディレクトリに新しいMarkdownファイルを作成（ファイル名は任意）
2. 以下のフォーマットで記述:

```markdown
---
"@packages/パッケージ名": patch
---

変更内容の説明
```
