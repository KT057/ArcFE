# Changeset作成スクリプト

`pnpm changeset`コマンドがインタラクティブモードで動作しない環境（VSCode拡張、CI/CDなど）向けのヘルパースクリプトです。

## バージョン管理について

このプロジェクトは **fixed モード** でバージョン管理されています：

- すべてのパッケージが統一バージョンで管理されます
- 1つのパッケージを更新すると、全パッケージが同じバージョンに更新されます
- Gitタグは `v1.1.0` のような単一のタグが作成されます

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

**注意:** fixed モードでは、どのパッケージを指定しても、全パッケージが同じバージョンに更新されます。

## 利用可能なパッケージ

- `@packages/utils` - ユーティリティ関数集
- `@packages/hooks` - カスタムReact Hooks
- `@packages/context` - React Context定義
- `@packages/tests` - テストヘルパー
- `@packages/ui` - UIコンポーネントライブラリ

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

### 標準ワークフロー（推奨）

このプロジェクトはnpmレジストリに公開せず、Git経由で配布します。

1. **変更を追加**
   ```bash
   pnpm changeset:add "@packages/utils" patch "Fix bug"
   ```

2. **リリース**
   ```bash
   pnpm release
   ```
   このコマンドは以下を実行します:
   - 全パッケージのバージョンを統一バージョンに更新
   - パッケージをビルド
   - distディレクトリをコミット（Gitに含める）
   - 統一バージョンのGitタグを作成（例: `v1.1.0`）

3. **コミットとプッシュ**
   ```bash
   git add .
   git commit -m "Release v1.1.0"
   git push origin master --tags
   ```

### 個別実行する場合

```bash
# 1. バージョン更新とビルド
pnpm version:packages

# 2. distディレクトリをコミット
pnpm commit:dist

# 3. Gitタグを作成
pnpm tag:packages

# 4. コミットとプッシュ
git add .
git commit -m "Release v1.1.0"
git push origin master --tags
```

## その他のスクリプト

### distディレクトリをコミット（commit-dist.sh）

通常 `.gitignore` されている `dist` ディレクトリを強制的にGitにコミットします：

```bash
pnpm commit:dist
```

これにより、Git経由でパッケージを配布する際に、ビルド済みファイルが含まれるようになります。

### Gitタグを作成（tag-packages）

パッケージのバージョンに基づいてGitタグを自動作成します:

```bash
pnpm tag:packages
```

fixed モードのため、統一バージョンのタグが作成されます:
- `v1.1.0`
- `v2.0.0`
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

## 他のプロジェクトでの使用方法

リリース後、他のプロジェクトから以下のようにインストールできます：

```json
{
  "dependencies": {
    "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#v1.1.0"
  }
}
```

使用例：

```typescript
import { Button } from 'front-end-boilerplate/packages/ui/dist';
import { useDebounce } from 'front-end-boilerplate/packages/hooks/dist';
```

詳細は [PACKAGES.md](../PACKAGES.md) を参照してください。

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

### Gitタグが既に存在する

タグが既に存在する場合、スキップされます。タグを再作成したい場合：

```bash
# ローカルタグを削除
git tag -d v1.1.0

# リモートタグを削除（注意！）
git push origin :refs/tags/v1.1.0

# タグを再作成
pnpm tag:packages
git push origin v1.1.0
```

### 全パッケージのバージョンを確認

fixed モードでは全パッケージが同じバージョンのはずですが、確認するには：

```bash
# 各パッケージのバージョンを表示
cat packages/utils/package.json | grep version
cat packages/hooks/package.json | grep version
cat packages/ui/package.json | grep version
```
