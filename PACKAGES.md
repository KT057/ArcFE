# パッケージのバージョン管理と配布

このドキュメントでは、`/packages` 配下のパッケージを**Git リポジトリ経由で別プロジェクトに配布する方法**と、セマンティックバージョニングの運用について説明します。

**注意:** このプロジェクトのパッケージは npm レジストリに公開しません。Git タグを使用したバージョン管理を行い、他のプロジェクトから Git 経由でインストールします。

## 概要

以下のパッケージを他のプロジェクトで利用可能です：

- `@packages/utils` - ユーティリティ関数集
- `@packages/tests` - テストヘルパー
- `@packages/context` - React Context 定義
- `@packages/hooks` - カスタム React Hooks
- `@packages/ui` - UI コンポーネントライブラリ

**バージョン管理:** すべてのパッケージとルートの`package.json`は統一バージョンで管理されます（Changesets の `fixed` モード）。バージョンを更新すると、全てのパッケージとルートが同じバージョンに更新されます。

### 個別パッケージをビルド

```bash
# 例：utilsパッケージのみビルド
pnpm --filter @packages/utils build
```

ビルドすると、各パッケージの `dist` ディレクトリに以下のファイルが生成されます：

- `index.js` - ES Modules 形式のビルド済みコード
- `index.d.mts` - TypeScript 型定義ファイル
- `index.js.map` - ソースマップ

## セマンティックバージョニングの運用

このプロジェクトでは、[Changesets](https://github.com/changesets/changesets) を使用してバージョン管理を行います。すべてのパッケージは統一バージョンで管理されます。

### 1. 変更を加える

通常通りコードを変更し、コミットします。

### 2. Changeset を作成

変更内容に応じて、Changeset を作成します。

#### 方法 1: コマンドで作成（推奨）

```bash
pnpm changeset:add <変更タイプ> "<変更内容>"
```

**変更タイプ:**

- `patch` - バグ修正や小さな変更 (1.0.0 → 1.0.1)
- `minor` - 新機能の追加 (1.0.0 → 1.1.0)
- `major` - 破壊的変更 (1.0.0 → 2.0.0)

**例:**

```bash
# バグ修正（パッチバージョン）
pnpm changeset:add patch "Fix type definitions"

# 新機能追加（マイナーバージョン）
pnpm changeset:add minor "Add new utility functions"

# 破壊的変更（メジャーバージョン）
pnpm changeset:add major "Remove deprecated hooks"
```

**注意:** fixed モードで管理しているため、すべてのパッケージ（`@packages/utils`, `@packages/hooks`, `@packages/context`, `@packages/tests`, `@packages/ui`）とルートの`package.json`が同じバージョンに更新されます。

#### 方法 2: 手動で作成

`.changeset` ディレクトリに新しい Markdown ファイル（ファイル名は任意）を作成：

```markdown
---
"@packages/utils": patch
"@packages/hooks": patch
"@packages/context": patch
"@packages/tests": patch
"@packages/ui": patch
---

変更内容の説明
```

これにより、`.changeset` ディレクトリにマークダウンファイルが作成されます。

### 3. リリースを作成

以下のコマンド一つで、バージョン更新・Git コミット・タグ作成を実行：

```bash
pnpm release
```

このコマンドは以下を自動的に実行します：

1. 全パッケージのバージョンを統一バージョンに更新（`changeset version`）
2. ルートの `package.json` のバージョンを同期
3. 全ての変更を Git にコミット（コミットメッセージ: `Release v<バージョン>`）
4. Git タグを作成（例: `v1.1.0`）

これにより、以下が自動的に行われます：

- 全パッケージの `package.json` のバージョンが同じバージョンに更新されます
- ルートの `package.json` のバージョンも同じバージョンに更新されます
- 各パッケージの `CHANGELOG.md` が生成/更新されます
- Changeset ファイルが削除されます
- 全ての変更が自動的にコミットされます
- リポジトリ全体に対して `v<バージョン>` 形式の Git タグが作成されます（例: `v1.1.0`）

### 4. リモートにプッシュ

```bash
# タグと一緒にプッシュ
git push origin master --tags
```

## 完全なワークフロー例

実際の開発からリリースまでの完全な流れです。

### ステップ 1: コードを変更

```bash
# 機能を追加・修正
# packages/ui/src/Button.tsx を編集
```

### ステップ 2: Changeset を作成

```bash
pnpm changeset:add minor "Add new Button component"
```

### ステップ 3: リリースを作成

```bash
# バージョン更新・Gitコミット・タグ作成を一括実行
pnpm release
```

これにより、全パッケージとルートが例えば `1.0.0` → `1.1.0` に更新され、自動的にコミットされ、`v1.1.0` タグが作成されます。

### ステップ 4: リモートにプッシュ

```bash
# タグと一緒にプッシュ
git push origin master --tags
```

### ステップ 5: 他のプロジェクトで使用

他のプロジェクトの`package.json`で、作成したタグを指定してインストール：

```json
{
  "dependencies": {
    "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#v1.1.0"
  }
}
```

**タグ形式:** `v<バージョン>`

- 例: `v1.1.0`, `v2.0.0`

使用例：

```typescript
// リポジトリ全体をインストールして、サブディレクトリから個別にインポート
import { Button } from "front-end-boilerplate/packages/ui/dist";
import { useDebounce } from "front-end-boilerplate/packages/hooks/dist";
import { formatDate } from "front-end-boilerplate/packages/utils/dist";
```

インストール:

```bash
pnpm install
```

## 別プロジェクトでの利用方法

### 基本的な使用方法

統一バージョン管理のため、リポジトリ全体を特定のバージョンタグで指定してインストールします：

```json
{
  "dependencies": {
    "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#v1.1.0"
  }
}
```

**フォーマット:** `github:<ユーザー名>/<リポジトリ名>#<タグ名>`

### TypeScript での使用

```typescript
// UIコンポーネントのインポート
import { Button, Panel } from "front-end-boilerplate/packages/ui/dist";

// Hooksのインポート
import {
  useDebounce,
  useAxiosQuery,
} from "front-end-boilerplate/packages/hooks/dist";

// Utilsのインポート
import { formatDate } from "front-end-boilerplate/packages/utils/dist";

// コンポーネント内で使用
function MyComponent() {
  const { data, loading } = useAxiosQuery({
    url: "/api/users",
  });

  return (
    <Panel>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </Panel>
  );
}
```

### コミットハッシュを指定（特定のコミット）

```json
{
  "dependencies": {
    "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#abc1234"
  }
}
```

### ブランチの最新版を使用（開発時）

**注意:** 本番環境では特定のバージョン（タグ）を使用することを推奨します。

```json
{
  "dependencies": {
    "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#master"
  }
}
```

### モノレポ内で使用（このリポジトリ内の別ワークスペース）

このリポジトリ内の`apps/web`や`apps/wordpress`から参照する場合：

```json
{
  "dependencies": {
    "@packages/ui": "workspace:*",
    "@packages/hooks": "workspace:*"
  }
}
```

この場合は、通常通りインポートできます：

```typescript
import { Button } from "@packages/ui";
import { useDebounce } from "@packages/hooks";
```

### ローカル開発時のリンク

開発中に、他のプロジェクトからこのリポジトリのパッケージを直接参照する場合：

```bash
# このリポジトリ側（ルートディレクトリで）
pnpm link --global

# 利用側のプロジェクト
cd /path/to/your-project
pnpm link --global front-end-boilerplate
```

### TypeScript 設定

他のプロジェクトで TypeScript を使用する場合、`tsconfig.json` にパスエイリアスを設定すると便利です：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@packages/ui": ["node_modules/front-end-boilerplate/packages/ui/dist"],
      "@packages/hooks": [
        "node_modules/front-end-boilerplate/packages/hooks/dist"
      ],
      "@packages/utils": [
        "node_modules/front-end-boilerplate/packages/utils/dist"
      ]
    }
  }
}
```

これにより、以下のようにインポートできます：

```typescript
import { Button } from "@packages/ui";
import { useDebounce } from "@packages/hooks";
```

## package.json の設定

各パッケージは以下のフィールドを持っています：

- `main`: CommonJS 形式のエントリーポイント（互換性のため）
- `module`: ES Modules 形式のエントリーポイント
- `types`: TypeScript 型定義ファイル
- `exports`: Node.js 12+用のエクスポートマップ
- `files`: 公開時に含めるファイル（`dist` ディレクトリのみ）

## 注意事項

### peerDependencies

UI パッケージは以下を peerDependencies として要求します：

- `react` ^19.2.0
- `react-dom` ^19.2.0
- `styled-components` ^6.1.19

利用側のプロジェクトでこれらをインストールしてください：

```bash
pnpm add react react-dom styled-components
```

### バージョンの固定

本番環境では、常に特定のバージョン（Git タグ）を指定してください。ブランチ指定（`#master`など）は、予期しない変更を受け取る可能性があります。

### 依存関係の更新

パッケージの新しいバージョンがリリースされた場合：

```bash
# package.jsonのタグを更新
# 例: "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#v1.0.0"
#  → "front-end-boilerplate": "github:kichikawa57/front-end-boilerplate#v1.1.0"

# 依存関係を再インストール
pnpm install
```

### 統一バージョン管理について

このプロジェクトは **fixed モード** で管理されています：

- **メリット:**

  - 全パッケージのバージョンが常に一致するため、互換性の問題が起きにくい
  - バージョン管理がシンプル
  - pnpm のサブディレクトリ制限を回避できる

- **デメリット:**
  - 1 つのパッケージの小さな変更でも、全パッケージのバージョンが上がる
  - 使用していないパッケージも含めて全体をインストールする必要がある

もし個別のバージョン管理が必要な場合は、パッケージを独立したリポジトリに分離することを検討してください。

## トラブルシューティング

### Changeset でエラーが発生する場合

#### `pnpm changeset` で "You must select at least one package to release" エラー

このエラーは、インタラクティブモードが動作しない環境（VSCode 拡張、CI/CD など）で発生します。

**解決方法:**

`pnpm changeset:add` コマンドを使用してください：

```bash
pnpm changeset:add patch "Fix bug"
```

#### `Opening '/dev/tty' failed (6): Device not configured` エラー

これは正常な動作です。このメッセージは無視して問題ありません。changeset のコマンド自体は正常に実行されています。

#### リリースが正常に完了しない

リリースコマンドでエラーが発生した場合：

```bash
# Changesetの状態を確認
ls .changeset/*.md

# 手動でバージョン更新
pnpm changeset:version

# 変更を確認
git status

# 手動でコミット＆タグ作成
git add .
git commit -m "Release v1.1.0"
git tag v1.1.0
```

### 型定義が見つからない場合

- `package.json` の `types` フィールドが正しいことを確認
- `dist/index.d.mts` ファイルが存在することを確認
- TypeScript の `moduleResolution` が `node` または `node16` に設定されていることを確認

### 他のプロジェクトでインポートエラーが発生する場合

```bash
# パスが正しいか確認
# ❌ import { Button } from '@packages/ui';
# ✅ import { Button } from 'front-end-boilerplate/packages/ui/dist';

# または、tsconfig.jsonでパスエイリアスを設定
```
