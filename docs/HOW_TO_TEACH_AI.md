# AIにArcFE UIを学ばせる方法

**Claude Code / Cursor が ArcFE UIコンポーネントを完全に理解して、自動推薦・コード生成できるようにする手順**

---

## 🎯 目標

AIが以下を理解できるようにします：
- 全96コンポーネントの存在と特徴
- 各コンポーネントのprops、使い方
- デザインパターンとビジュアル特性
- Figmaデザインから最適なコンポーネントを選択

---

## 📋 方法1: プロジェクト内での学習（ArcFEリポジトリ内）

### **Step 1: カタログ生成**

```bash
cd /Users/kotaichikawa/works/front-end-boilerplate

# component-manifest.json を生成
pnpm tsx scripts/quickstart-catalog.ts
```

**生成されるファイル:**
- `packages/ui/component-manifest.json` - 全コンポーネントのメタデータ

---

### **Step 2: CLAUDE.md 作成**

`.claude/CLAUDE.md` に以下を記載：

```markdown
# ArcFE UI Component Library

このプロジェクトは、ArcFE UIコンポーネントライブラリを開発・管理しています。

## コンポーネントカタログ

全コンポーネントの詳細情報は以下に記載されています：
- **カタログファイル**: `packages/ui/component-manifest.json`
- **スクリーンショット**: `packages/ui/__screenshots__/`
- **ソースコード**: `packages/ui/components/`

## AIへの指示

### コンポーネント情報の参照方法

1. **カタログを読み込む:**
   ```
   packages/ui/component-manifest.json を読み込んでください
   ```

2. **スクリーンショットを確認:**
   ```
   packages/ui/__screenshots__/components/[カテゴリ]/[コンポーネント]/ 配下の画像を確認してください
   ```

3. **使用可能なスラッシュコマンド:**
   - `/show-component [name]` - コンポーネントのスクリーンショット一覧を表示
   - `/match-visual` - Figmaデザインから最適なコンポーネントを推薦
   - `/arcfe-search [keyword]` - キーワードでコンポーネント検索

## コンポーネント構造

### Basic コンポーネント (81個)
基本的なUI要素。多くは複数の「Product」バリアントを持ちます。

例:
- `Button/Product001` - pill-shaped（大きな角丸）
- `Button/Product002` - 中程度の角丸
- `TextField/Product003` - フローティングラベル付き

### Advanced コンポーネント (15個)
プロジェクト固有の高度なコンポーネント。

例:
- `Rebita/Button` - VerticalRollingTextアニメーション付き
- `Jmc/CircleToggle` - 円形トグル

## 重要なファイル

- `packages/ui/component-manifest.json` - **必ず最初に読み込む**
- `packages/ui/styles/themes.ts` - テーマ定義
- `packages/ui/context/` - Providerコンポーネント

## 開発時の注意

1. **常にThemeProviderが必要:**
   ```tsx
   <ThemeProvider theme={themes(color)}>
     <YourComponent />
   </ThemeProvider>
   ```

2. **styled-componentsを使用:**
   全コンポーネントはstyled-componentsでスタイリングされています。

3. **appearance propsでカスタマイズ可能:**
   ほとんどのコンポーネントは`appearance` propsで色・サイズを調整できます。

## AIがコンポーネントを推薦する際の基準

1. **ビジュアル特性:**
   - 形状（pill-shaped / rounded / sharp）
   - 色（背景・枠線・テキスト）
   - サイズ

2. **用途:**
   - CTAボタン → Button/Product001
   - フォーム入力 → TextField/Product003
   - シンプルなリンク → TextButton/Product001

3. **プロジェクト固有の要件:**
   - プレミアムなデザイン → Advanced/Rebita
   - 標準的なUI → Basic

## 学習方法

### 初回（AIが初めてこのプロジェクトを見る場合）

1. `packages/ui/component-manifest.json` を読み込む
2. 主要コンポーネント（Button, TextField, Modal等）のスクリーンショットを確認
3. 各カテゴリの特徴を理解

### 継続的な学習

- 新しいコンポーネントが追加された場合、カタログが自動更新されます
- 定期的に `component-manifest.json` を再読み込みしてください
```

---

### **Step 3: スラッシュコマンド設置**

既に作成済みのコマンドを確認：

```bash
ls -la .claude/commands/
# match-visual.md
# show-component.md
```

---

### **Step 4: AIに学習させる（初回）**

Claude Codeで以下を実行：

```bash
# Step 4.1: カタログを読み込ませる
packages/ui/component-manifest.json を読み込んで、全コンポーネントの概要を理解してください
```

**AIの応答例:**
```
component-manifest.jsonを読み込みました。

概要:
- 総コンポーネント数: 96
- Basic: 81個
- Advanced: 15個
- 総スクリーンショット: 216枚

主要コンポーネント:
1. Button (2バリアント)
   - Product001: pill-shaped、大きな角丸
   - Product002: 中程度の角丸

2. TextField (5バリアント)
   - Product003: フローティングラベル
   ...

理解しました！
```

```bash
# Step 4.2: スクリーンショットを見せる
packages/ui/__screenshots__/components/Basic/Button/Product001/index/ にある全画像を見て、Button/Product001の特徴を理解してください
```

**AIの応答例:**
```
Button/Product001のスクリーンショットを確認しました。

特徴:
- 形状: pill-shaped（完全な角丸、約30px）
- デフォルト: 白背景、黒枠、黒テキスト
- PrimaryTheme: 青背景、白テキスト
- サイズバリエーション: small, middle, large
- アニメーション: ホバー時に背景色変化

用途: CTAボタン、重要なアクション

理解しました！
```

---

### **Step 5: 動作確認**

```bash
# テスト1: コンポーネント表示
/show-component Button/Product001
```

```bash
# テスト2: ビジュアルマッチング
/match-visual
[Figmaスクリーンショットを添付]
```

---

## 📋 方法2: 別プロジェクトでの学習（外部プロジェクト）

別のプロジェクトでArcFE UIを使う場合の手順です。

### **前提条件**

別プロジェクトにArcFE UIがインストール済み：

```bash
cd /path/to/your-new-project
pnpm add @arcfe/ui styled-components
```

---

### **オプションA: ローカルカタログ参照（推奨）**

#### Step 1: カタログファイルをコピー

```bash
# ArcFEリポジトリからカタログをコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json
```

#### Step 2: .claude/CLAUDE.md を作成

```markdown
# このプロジェクトについて

このプロジェクトは @arcfe/ui コンポーネントライブラリを使用しています。

## ArcFE UI コンポーネントカタログ

全コンポーネントの詳細情報:
- **ローカルカタログ**: `./arcfe-catalog.json`
- **公式Storybook**: https://your-storybook-url.com (後で公開)

## AIへの指示

### 初回学習

1. `./arcfe-catalog.json` を読み込んで、全コンポーネントを理解してください
2. 使用可能なコンポーネント、props、使用例を把握してください

### コンポーネント使用時

1. カタログからコンポーネントを検索
2. props と使用例を確認
3. ThemeProvider の設定を忘れずに

## 使用可能なコマンド

- `/arcfe-search [keyword]` - コンポーネント検索
- `/arcfe-component [name]` - 詳細表示
- `/match-visual` - Figmaからコンポーネ��ト推薦

## 重要な設定

### ThemeProvider のセットアップ

```tsx
import { ThemeProvider } from 'styled-components';
import { themes } from '@arcfe/ui/styles/themes';
import { color } from '@arcfe/ui/styles/color';

function App() {
  return (
    <ThemeProvider theme={themes(color)}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### インポート方法

```tsx
import { Button001, TextField003 } from '@arcfe/ui';
```
```

#### Step 3: スラッシュコマンドをコピー

```bash
mkdir -p .claude/commands

# ArcFEからコマンドをコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/.claude/commands/match-visual.md \
   .claude/commands/

cp /Users/kotaichikawa/works/front-end-boilerplate/.claude/commands/show-component.md \
   .claude/commands/
```

**match-visual.mdの修正:**
```markdown
# スクリーンショット参照部分を変更

# Before (ArcFEリポジトリ内)
packages/ui/__screenshots__/...

# After (別プロジェクト)
./arcfe-catalog.json の screenshots 情報を参照
スクリーンショット画像は公開Storybookから確認: https://your-storybook-url.com
```

#### Step 4: AIに学習させる

```bash
# Claude Codeで
./arcfe-catalog.json を読み込んで、ArcFE UIの全コンポーネントを理解してください
```

#### Step 5: 使用開始

```bash
# 例: ログインページのボタンを実装したい
このFigmaデザインに最適なArcFEコンポーネントを推薦してください
[Figmaスクリーンショット]
```

**AIの応答例:**
```
カタログを検索しました。

推薦: Button001
理由: pill-shapedの形状がFigmaデザインに一致

実装コード:
import { Button001 } from '@arcfe/ui';

<Button001
  type="001"
  size="middle"
  appearance={{
    backgroundColor: "#007bff",
    color: "#fff"
  }}
>
  ログイン
</Button001>
```

---

### **オプションB: MCPサーバー経由（高度）**

別プロジェクトからArcFEのMCPサーバーにアクセスする方法。

#### Step 1: MCPサーバーをArcFEリポジトリに構築

（後で実装する場合）

```bash
cd /Users/kotaichikawa/works/front-end-boilerplate/mcp-servers/arcfe-visual-matcher
pnpm install
pnpm build
```

#### Step 2: Claude Code設定

```json
// ~/.config/claude-code/mcp.json
{
  "mcpServers": {
    "arcfe-catalog": {
      "command": "node",
      "args": [
        "/Users/kotaichikawa/works/front-end-boilerplate/mcp-servers/arcfe-visual-matcher/dist/index.js"
      ],
      "env": {
        "ARCFE_ROOT": "/Users/kotaichikawa/works/front-end-boilerplate/packages/ui"
      }
    }
  }
}
```

#### Step 3: どのプロジェクトからでもアクセス可能

```bash
# 別プロジェクトで
cd /path/to/any-project

# Claude Codeで自動的にMCPサーバーが利用可能
/match-visual
```

---

### **オプションC: 公開Storybook + WebFetch（最もシンプル）**

#### Step 1: StorybookをGitHub Pagesに公開

```bash
cd /Users/kotaichikawa/works/front-end-boilerplate

# Storybookビルド
pnpm --filter @packages/ui build-storybook

# GitHub Pagesにデプロイ
gh-pages -d packages/ui/storybook-static

# 公開URL: https://kichikawa57.github.io/arcfe/
```

#### Step 2: カタログも公開

```bash
# component-manifest.json をStorybook静的ファイルに含める
cp packages/ui/component-manifest.json packages/ui/storybook-static/

# 再デプロイ
gh-pages -d packages/ui/storybook-static
```

#### Step 3: 別プロジェクトの .claude/CLAUDE.md

```markdown
# ArcFE UI Component Library

このプロジェクトは @arcfe/ui を使用しています。

## コンポーネントカタログ

- **Storybook**: https://kichikawa57.github.io/arcfe/
- **カタログJSON**: https://kichikawa57.github.io/arcfe/component-manifest.json

## AIへの指示

### 初回学習

WebFetchで以下を取得してください:
https://kichikawa57.github.io/arcfe/component-manifest.json

全コンポーネントの情報を理解してください。

### コンポーネント確認

Storybookで実際の見た目を確認:
https://kichikawa57.github.io/arcfe/?path=/story/basic-button-product001
```

#### Step 4: AIに学習させる

```bash
# Claude Codeで
https://kichikawa57.github.io/arcfe/component-manifest.json
からArcFE UIのカタログを取得して、全コンポーネントを学習してください
```

---

## 🔄 継続的な学習（カタログ更新時）

### ArcFEリポジトリ内

```bash
# コンポーネント追加・変更後
pnpm tsx scripts/quickstart-catalog.ts

# AIに再学習させる
packages/ui/component-manifest.json が更新されました。変更を確認してください
```

### 別プロジェクト

**オプションA（ローカルカタログ）:**
```bash
# 最新カタログをコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json

# AIに通知
arcfe-catalog.json が更新されました。新しいコンポーネントを確認してください
```

**オプションC（公開カタログ）:**
```bash
# 自動で最新版を取得
https://kichikawa57.github.io/arcfe/component-manifest.json
から最新のカタログを取得してください
```

---

## 📊 学習状況の確認

### AIが正しく学習できているかテスト

```bash
# テスト1: コンポーネント数を確認
ArcFE UIには何個のコンポーネントがありますか？

# 期待される回答: 96個（Basic: 81, Advanced: 15）
```

```bash
# テスト2: 特定コンポーネントの理解
Button/Product001の特徴を教えてください

# 期待される回答:
# - pill-shaped（大きな角丸）
# - デフォルト: 白背景、黒枠
# - 用途: CTAボタン
```

```bash
# テスト3: コンポーネント推薦
「角丸が大きい青いボタン」に最適なコンポーネントは？

# 期待される回答: Button/Product001 + PrimaryTheme
```

---

## 🎉 まとめ

### ArcFEリポジトリ内
1. ✅ `pnpm tsx scripts/quickstart-catalog.ts`
2. ✅ `.claude/CLAUDE.md` 作成
3. ✅ AIに `component-manifest.json` を読み込ませる

### 別プロジェクト
- **推奨**: オプションC（公開Storybook）→ 最もシンプル
- **次点**: オプションA（ローカルカタログ）→ オフライン可
- **高度**: オプションB（MCPサーバー）→ 複数プロジェクトで共有

---

## 🚀 次のステップ

1. **まずQuickstartを実行:**
   ```bash
   pnpm tsx scripts/quickstart-catalog.ts
   ```

2. **AIに学習させる:**
   ```bash
   packages/ui/component-manifest.json を読み込んでください
   ```

3. **試してみる:**
   ```bash
   /show-component Button/Product001
   ```

**これで、AIがArcFE UIを完全に理解して、自動推薦・コード生成できるようになります！** 🎉
