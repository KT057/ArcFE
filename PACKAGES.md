# パッケージのバージョン管理と配布

このドキュメントでは、`/packages` 配下のパッケージを**Gitリポジトリ経由で別プロジェクトに配布する方法**と、セマンティックバージョニングの運用について説明します。

**注意:** このプロジェクトのパッケージはnpmレジストリに公開しません。Gitタグを使用したバージョン管理を行い、他のプロジェクトからGit経由でインストールします。

## 概要

以下のパッケージを他のプロジェクトで利用可能です：

- `@packages/utils` - ユーティリティ関数集
- `@packages/tests` - テストヘルパー
- `@packages/context` - React Context定義
- `@packages/hooks` - カスタムReact Hooks
- `@packages/ui` - UIコンポーネントライブラリ

## ビルド

### 全パッケージをビルド

```bash
pnpm build:packages
```

### 個別パッケージをビルド

```bash
# 例：utilsパッケージのみビルド
pnpm --filter @packages/utils build
```

ビルドすると、各パッケージの `dist` ディレクトリに以下のファイルが生成されます：

- `index.js` - ES Modules形式のビルド済みコード
- `index.d.mts` - TypeScript型定義ファイル
- `index.js.map` - ソースマップ

## セマンティックバージョニングの運用

このプロジェクトでは、[Changesets](https://github.com/changesets/changesets) を使用してバージョン管理を行います。

### 1. 変更を加える

通常通りコードを変更し、コミットします。

### 2. Changesetを作成

変更内容に応じて、Changesetを作成します。

#### 方法1: コマンドで作成（推奨）

```bash
pnpm changeset:add "<パッケージ名>" <変更タイプ> "<変更内容>"
```

**例:**

```bash
# 単一パッケージの変更
pnpm changeset:add "@packages/utils" patch "Fix type definitions"

# 複数パッケージの変更
pnpm changeset:add "@packages/utils,@packages/ui" minor "Add new utility functions"

# 破壊的変更
pnpm changeset:add "@packages/hooks" major "Remove deprecated hooks"
```

**変更タイプ:**
- `patch` - バグ修正や小さな変更 (1.0.0 → 1.0.1)
- `minor` - 新機能の追加 (1.0.0 → 1.1.0)
- `major` - 破壊的変更 (1.0.0 → 2.0.0)

#### 方法2: インタラクティブに作成（ターミナル環境）

ターミナルから直接実行する場合:

```bash
./scripts/create-changeset.sh
```

対話式で以下を入力します：
- どのパッケージを変更したか
- 変更の種類（major/minor/patch）
- 変更内容の説明

#### 方法3: 手動で作成

`.changeset` ディレクトリに新しいMarkdownファイル（ファイル名は任意）を作成：

```markdown
---
"@packages/パッケージ名": patch
---

変更内容の説明
```

**注意:** `pnpm changeset` コマンドは、VSCode拡張やCI環境などでは `/dev/tty` にアクセスできないため動作しません。上記のいずれかの方法を使用してください。

これにより、`.changeset` ディレクトリにマークダウンファイルが作成されます。

### 3. リリースを作成

以下のコマンド一つで、バージョン更新・ビルド・Gitタグ作成を実行：

```bash
pnpm release
```

このコマンドは以下を実行します：
1. バージョンを更新（`changeset:version`）
2. パッケージをビルド（`build:packages`）
3. Gitタグを自動作成（`tag:packages`）

または、個別に実行する場合:

```bash
# 1. バージョン更新とビルド
pnpm version:packages

# 2. Gitタグを作成
pnpm tag:packages
```

これにより、以下が自動的に行われます：
- 各パッケージの `package.json` のバージョンが更新されます
- `CHANGELOG.md` が生成/更新されます
- Changesetファイルが削除されます
- パッケージがビルドされます
- 各パッケージに対して`@packages/パッケージ名@バージョン`形式のGitタグが作成されます

### 4. 変更をコミットしてプッシュ

```bash
# 変更をコミット
git add .
git commit -m "Release packages"

# タグと一緒にプッシュ
git push origin master --tags
```

## 完全なワークフロー例

実際の開発からリリースまでの完全な流れです。

### ステップ1: コードを変更

```bash
# 機能を追加・修正
# ...
```

### ステップ2: Changesetを作成

```bash
pnpm changeset:add "@packages/ui" minor "Add new Button component"
```

### ステップ3: リリースを作成

```bash
# バージョン更新・ビルド・Gitタグ作成を一括実行
pnpm release
```

### ステップ4: 変更をプッシュ

```bash
# 変更をコミット
git add .
git commit -m "Release v1.1.0"

# タグと一緒にプッシュ
git push origin master --tags
```

### ステップ5: 他のプロジェクトで使用

他のプロジェクトの`package.json`で、作成したタグを指定してインストール：

```json
{
  "dependencies": {
    "@packages/ui": "git+https://github.com/your-org/your-repo.git#@packages/ui@1.1.0:packages/ui"
  }
}
```

インストール:

```bash
pnpm install
```

## 別プロジェクトでの利用方法

### 特定のバージョン（タグ）を指定してインストール（推奨）

他のプロジェクトの`package.json`で、リリース時に作成したGitタグを指定してインストール：

```json
{
  "dependencies": {
    "@packages/ui": "git+https://github.com/your-org/your-repo.git#@packages/ui@1.0.1:packages/ui",
    "@packages/hooks": "git+https://github.com/your-org/your-repo.git#@packages/hooks@1.0.1:packages/hooks"
  }
}
```

**フォーマット:** `git+<リポジトリURL>#<タグ名>:<パッケージのパス>`

### コミットハッシュを指定（特定のコミット）

```json
{
  "dependencies": {
    "@packages/ui": "git+https://github.com/your-org/your-repo.git#abc1234:packages/ui"
  }
}
```

### ブランチの最新版を使用（開発時）

**注意:** 本番環境では特定のバージョン（タグ）を使用することを推奨します。

```json
{
  "dependencies": {
    "@packages/ui": "git+https://github.com/your-org/your-repo.git#master:packages/ui"
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

### ローカル開発時のリンク

開発中に、他のプロジェクトからこのリポジトリのパッケージを直接参照する場合：

```bash
# このリポジトリ側
cd packages/ui
pnpm link --global

# 利用側のプロジェクト
cd /path/to/your-project
pnpm link --global @packages/ui
```

## package.json の設定

各パッケージは以下のフィールドを持っています：

- `main`: CommonJS形式のエントリーポイント（互換性のため）
- `module`: ES Modules形式のエントリーポイント
- `types`: TypeScript型定義ファイル
- `exports`: Node.js 12+用のエクスポートマップ
- `files`: 公開時に含めるファイル（`dist` ディレクトリのみ）

## 使用例

パッケージをインストールした後の使用方法です。

### TypeScriptでの使用

```typescript
// UIコンポーネントのインポート
import { Button, Panel } from '@packages/ui';

// Hooksのインポート
import { useDebounce, useLocalStorage } from '@packages/hooks';

// Utilsのインポート
import { formatDate, parseQuery } from '@packages/utils';

// コンポーネント内で使用
function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'default');
  const debouncedValue = useDebounce(value, 500);

  return (
    <Panel>
      <Button onClick={() => setValue('new value')}>
        Click me
      </Button>
    </Panel>
  );
}
```

## 注意事項

### peerDependencies

UIパッケージは以下をpeerDependenciesとして要求します：

- `react` ^19.2.0
- `react-dom` ^19.2.0
- `styled-components` ^6.1.19

利用側のプロジェクトでこれらをインストールしてください：

```bash
pnpm add react react-dom styled-components
```

### バージョンの固定

本番環境では、常に特定のバージョン（Gitタグ）を指定してください。ブランチ指定（`#master`など）は、予期しない変更を受け取る可能性があります。

### 依存関係の更新

パッケージの新しいバージョンがリリースされた場合：

```bash
# package.jsonのタグを更新
# 例: @packages/ui@1.0.1 → @packages/ui@1.1.0

# 依存関係を再インストール
pnpm install
```

## トラブルシューティング

### Changesetでエラーが発生する場合

#### `pnpm changeset` で "You must select at least one package to release" エラー

このエラーは、インタラクティブモードが動作しない環境（VSCode拡張、CI/CDなど）で発生します。

**解決方法:**

`pnpm changeset:add` コマンドを使用してください：

```bash
pnpm changeset:add "@packages/utils" patch "Fix bug"
```

または、[scripts/README.md](scripts/README.md) を参照してください。

#### `Opening '/dev/tty' failed (6): Device not configured` エラー

これは正常な動作です。このメッセージは無視して問題ありません。changesetのコマンド自体は正常に実行されています。

#### Gitタグが作成されない

タグが作成されない場合は、以下を確認してください:

```bash
# タグを手動で作成
pnpm tag:packages

# タグを確認
git tag | grep @packages

# タグをプッシュ
git push origin --tags
```

### ビルドエラーが発生する場合

```bash
# node_modulesをクリーンアップ
pnpm clean
pnpm install

# 再ビルド
pnpm build:packages
```

### 型定義が見つからない場合

- `package.json` の `types` フィールドが正しいことを確認
- `dist/index.d.mts` ファイルが存在することを確認
- TypeScriptの `moduleResolution` が `node` または `node16` に設定されていることを確認
