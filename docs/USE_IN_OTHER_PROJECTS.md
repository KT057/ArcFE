# 別プロジェクトでArcFE UIを使う完全ガイド

**新しいプロジェクトでArcFE UIをインストールして、AIに学習させ、開発を高速化する手順**

---

## 🎯 このガイドの目標

1. 新規プロジェクトにArcFE UIをインストール
2. AIにArcFEコンポーネントを学習させる
3. Figmaデザイン → 自動コード生成を実現
4. 開発速度を4-6倍向上

---

## 📋 前提条件

- Node.js 18+
- pnpm（またはnpm / yarn）
- Claude Code または Cursor

---

## 🚀 セットアップ（10分）

### **Step 1: 新規プロジェクト作成**

```bash
# 例: Next.js プロジェクト
npx create-next-app@latest my-new-project
cd my-new-project

# または既存プロジェクト
cd /path/to/your-existing-project
```

---

### **Step 2: ArcFE UIインストール**

```bash
pnpm add @arcfe/ui styled-components

# TypeScript型定義
pnpm add -D @types/styled-components
```

**注意:** 現在ArcFE UIはnpmに未公開のため、以下のいずれかの方法でインストール：

#### オプション1: ローカルパス（開発用）
```bash
# ArcFEリポジトリをビルド
cd /Users/kotaichikawa/works/front-end-boilerplate
pnpm --filter @packages/ui build

# 別プロジェクトでリンク
cd /path/to/my-new-project
pnpm add file:/Users/kotaichikawa/works/front-end-boilerplate/packages/ui
```

#### オプション2: npmに公開（本番用）
```bash
# ArcFEリポジトリで公開
cd /Users/kotaichikawa/works/front-end-boilerplate/packages/ui
pnpm publish --access public

# 別プロジェクトでインストール
pnpm add @arcfe/ui
```

---

### **Step 3: ThemeProvider セットアップ**

```tsx
// app/layout.tsx (Next.js App Router)
// または pages/_app.tsx (Next.js Pages Router)

'use client'; // App Routerの場合

import { ThemeProvider } from 'styled-components';
import { themes } from '@arcfe/ui/styles/themes';
import { color } from '@arcfe/ui/styles/color';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={themes(color)}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### **Step 4: ArcFEカタログのセットアップ（重要）**

ここからがAI学習の肝です！

#### **オプションA: 公開Storybook経由（推奨）**

##### 4.1 ArcFEリポジトリでStorybookを公開

```bash
# ArcFEリポジトリで
cd /Users/kotaichikawa/works/front-end-boilerplate

# Storybookビルド
pnpm --filter @packages/ui build-storybook

# カタログをStorybook静的ファイルに含める
cp packages/ui/component-manifest.json \
   packages/ui/storybook-static/catalog.json

# GitHub Pagesにデプロイ
pnpm add -D gh-pages
npx gh-pages -d packages/ui/storybook-static
```

**公開URL:** `https://kichikawa57.github.io/arcfe/`

##### 4.2 別プロジェクトで`.claude/CLAUDE.md`を作成

```bash
mkdir -p .claude
```

```markdown
# プロジェクト設定

このプロジェクトは **ArcFE UI Component Library** を使用しています。

## ArcFE UI について

ArcFE UIは96個のReactコンポーネントを提供するデザインシステムです。

- **公式Storybook**: https://kichikawa57.github.io/arcfe/
- **コンポーネントカタログ**: https://kichikawa57.github.io/arcfe/catalog.json

## 🤖 AIへの指示

### 初回セットアップ時（このメッセージを見たら必ず実行）

**必須:** 以下のURLからArcFEコンポーネントカタログを取得して、全コンポーネントを学習してください：

\`\`\`
https://kichikawa57.github.io/arcfe/catalog.json
\`\`\`

このカタログには以下が含まれます：
- 96個の全コンポーネント情報
- Props型定義（AST解析済み）
- 使用例（コードスニペット）
- スクリーンショット情報
- ビジュアル特性

**重要:** カタログを読み込むまで、ArcFEコンポーネントの推薦やコード生成を行わないでください。

### コンポーネント使用時の原則

1. **常にカタログを参照**
   - カタログからコンポーネント情報を取得
   - props、使用例を確認
   - 最新の情報を使用

2. **ThemeProviderは必須**
   - 全ArcFEコンポーネントはThemeProviderが必要
   - 既にapp/layout.tsxで設定済み

3. **インポート方法**
   \`\`\`tsx
   import { Button001, TextField003 } from '@arcfe/ui';
   \`\`\`

4. **appearance propsでカスタマイズ**
   - ほとんどのコンポーネントはappearance propsで外観をカスタマイズ可能

## 使用可能なコマンド

### `/arcfe-search [keyword]`
キーワードでArcFEコンポーネントを検索

例:
\`\`\`
/arcfe-search button rounded
\`\`\`

### `/arcfe-component [name]`
特定コンポーネントの詳細情報を表示

例:
\`\`\`
/arcfe-component Button/Product001
\`\`\`

### `/match-visual`
Figmaデザインから最適なArcFEコンポーネントを推薦

使い方:
\`\`\`
/match-visual
[Figmaスクリーンショットを添付]
\`\`\`

## よくあるコンポーネント選択

### ボタン
- **CTAボタン（pill-shaped）**: Button/Product001
- **標準ボタン（中角丸）**: Button/Product002
- **テキストリンク**: TextButton/Product001
- **高級感あるボタン**: Rebita/Button

### 入力フィールド
- **フローティングラベル**: TextField/Product003
- **シンプルな入力**: Input/Product001

### その他
- **モーダル**: Modal/Product001
- **ページネーション**: Pagination/Product001
- **アコーディオン**: Accordion/Product001-005

## トラブルシューティング

### スタイルが反映されない
→ ThemeProviderが設定されているか確認

### コンポーネントが見つからない
→ カタログを再読み込み: `https://kichikawa57.github.io/arcfe/catalog.json`

### 型エラーが出る
→ `@types/styled-components`がインストールされているか確認
```

##### 4.3 スラッシュコマンドをコピー

```bash
mkdir -p .claude/commands

# ArcFEリポジトリからコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/.claude/commands/*.md \
   .claude/commands/
```

**`.claude/commands/arcfe-search.md` を修正:**

```markdown
# ArcFE Component Search

ユーザーが指定したキーワードでArcFEコンポーネントを検索します。

## 実行手順

### Step 1: カタログ取得
```
https://kichikawa57.github.io/arcfe/catalog.json
```
からカタログを取得（キャッシュがあれば再利用）

### Step 2: 検索
キーワードで以下をフィルタリング：
- コンポーネント名
- カテゴリ
- タグ
- デザインキーワード
- 説明

### Step 3: 結果表示
関連性の高い順に5-10件を表示：

---

## 🔍 検索結果: "[keyword]"

### 1. Button/Product001 (関連度: 95%)
**カテゴリ:** Basic > Button
**説明:** pill-shapedの大きな角丸ボタン

**主な用途:**
- CTAボタン
- 重要なアクション

**コード例:**
\`\`\`tsx
import { Button001 } from '@arcfe/ui';

<Button001 type="001" size="middle">
  クリック
</Button001>
\`\`\`

**Storybook:** https://kichikawa57.github.io/arcfe/?path=/story/basic-button-product001

---

[他の結果...]
```

---

#### **オプションB: ローカルカタログファイル**

公開Storybookを使わない場合。

##### 4.1 カタログをコピー

```bash
# ArcFEリポジトリからコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json
```

##### 4.2 `.claude/CLAUDE.md` を作成

```markdown
# ArcFE UI Component Library

## コンポーネントカタログ

**ローカルカタログ:** `./arcfe-catalog.json`

## 🤖 AIへの指示

### 初回セットアップ

\`./arcfe-catalog.json\` を読み込んで、全ArcFEコンポーネントを学習してください。

### 使用方法

同じ（オプションAと同じコマンドを記載）
```

##### 4.3 カタログ更新時

```bash
# 最新版をコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json

# Claude Codeで
arcfe-catalog.json が更新されました。再読み込みしてください
```

---

### **Step 5: AIに学習させる（初回のみ）**

Claude Codeを開いて：

```bash
# オプションA（公開Storybook）の場合
https://kichikawa57.github.io/arcfe/catalog.json
からArcFEコンポーネントカタログを取得して、全コンポーネントを学習してください
```

```bash
# オプションB（ローカルカタログ）の場合
./arcfe-catalog.json を読み込んで、全ArcFEコンポーネントを学習してください
```

**AIの応答例:**
```
✅ カタログを読み込みました。

📊 ArcFE UI Component Library
- 総コンポーネント数: 96
- Basic: 81個
- Advanced: 15個
- スクリーンショット: 216枚

主要コンポーネント:
1. Button (2バリアント)
   - Product001: pill-shaped、CTAボタン向け
   - Product002: 中程度の角丸、汎用的

2. TextField (5バリアント)
   - Product003: フローティングラベル、フォーム向け

3. Modal, Pagination, Accordion...

学習完了！Figmaデザインからコンポーネントを推薦できます。
```

---

## 🎨 使用例

### **例1: Figmaからボタンを実装**

```bash
# Claude Codeで
/match-visual
```

**Figmaスクリーンショットを添付:**
- 青い背景
- 白いテキスト
- 大きな角丸
- "今すぐ購入"

**AIの応答:**
```
📸 ビジュアル解析完了

特徴:
- 形状: pill-shaped（大きな角丸）
- 色: 青背景（#007bff付近）、白テキスト
- 用途: CTAボタン

🎯 推薦: Button/Product001 (類似度: 95%)

実装コード:
```tsx
import { Button001 } from '@arcfe/ui';

<Button001
  type="001"
  size="middle"
  animation={{
    type: "001",
    duration: 0.25,
    backgroundColor: "#0056b3",
    textColor: "#fff"
  }}
  appearance={{
    backgroundColor: "#007bff",
    borderColor: "#0056b3",
    color: "#fff"
  }}
>
  今すぐ購入
</Button001>
```

実装しますか？
```

---

### **例2: キーワードでコンポーネント検索**

```bash
/arcfe-search input floating label
```

**AIの応答:**
```
🔍 検索結果: "input floating label"

### 1. TextField/Product003 (関連度: 98%)
フローティングラベル付きテキストフィールド

コード例:
import { TextField003 } from '@arcfe/ui';

<TextField003
  label="メールアドレス"
  type="email"
/>

Storybook: https://...
```

---

### **例3: コンポーネント詳細を確認**

```bash
/arcfe-component Button/Product001
```

**AIの応答:**
```
📖 Button/Product001 詳細

**カテゴリ:** Basic > Button

**説明:**
pill-shapedの大きな角丸ボタン。CTAや重要なアクションに最適。

**Props:**
- type: "001" | "002" | "003" (デフォルト: "001")
- size: "small" | "middle" | "large" (デフォルト: "middle")
- animation?: { type, duration, backgroundColor, textColor }
- appearance?: { backgroundColor, borderColor, color, ... }
- disabled?: boolean
- fullWidth?: boolean (デフォルト: true)

**使用例:**
[複数のコード例を表示]

**スクリーンショット:**
- Default: 白背景、黒枠
- PrimaryTheme: 青背景、白テキスト
- DangerTheme: 赤背景、白テキスト
...

**Storybook:** https://...
```

---

## 🔄 プロジェクトテンプレート化

頻繁に新規プロジェクトを作る場合、テンプレート化すると便利です。

### **Step 1: テンプレートリポジトリ作成**

```bash
# テンプレートプロジェクト作成
npx create-next-app@latest arcfe-template
cd arcfe-template

# ArcFE UI セットアップ
pnpm add @arcfe/ui styled-components
pnpm add -D @types/styled-components

# ThemeProvider設定
# app/layout.tsx を編集...

# .claude/ ディレクトリをコピー
cp -r /Users/kotaichikawa/works/front-end-boilerplate/.claude ./

# .claude/CLAUDE.md を編集（公開Storybook URLを記載）

# GitHubにプッシュ
git init
git add .
git commit -m "Initial commit with ArcFE UI setup"
gh repo create arcfe-template --public --source=. --push
```

### **Step 2: テンプレートから新規プロジェクト作成**

```bash
# GitHub Templateから作成
gh repo create my-new-project --template=kichikawa57/arcfe-template

cd my-new-project
pnpm install

# AIに学習させる
# Claude Codeが自動で.claude/CLAUDE.mdを読み込み、カタログを取得
```

---

## 📊 開発速度の比較

### **Before（ArcFE AI統合なし）**

1. Figmaデザインを見る: 1分
2. どのコンポーネントを使うか調査: 5-10分
3. Storybookで確認: 3-5分
4. コード実装: 5-10分
5. Props調整: 3-5分

**合計: 20-30分** ⏱️

---

### **After（ArcFE AI統合あり）**

1. `/match-visual` でマッチング: 30秒
2. AIがコード生成: 10秒
3. コピー&ペースト: 10秒
4. 微調整: 2分

**合計: 3分** ⚡

**効率: 87-90%削減！**

---

## 🎓 チーム展開

### **新メンバーのオンボーディング**

1. プロジェクトをクローン
2. `pnpm install`
3. Claude Codeを開く（自動でカタログ学習）
4. `/arcfe-search button` で試してみる

**所要時間: 5分** → 従来の1-2時間から大幅短縮！

### **ドキュメント**

`.claude/CLAUDE.md` に全てまとまっているので、追加ドキュメント不要。

---

## 🚨 トラブルシューティング

### Q: AIがカタログを読み込まない

```bash
# 明示的に指示
https://kichikawa57.github.io/arcfe/catalog.json
を読み込んで、全コンポーネントを学習してください
```

### Q: コンポーネントが見つからない

```bash
# カタログを再読み込み
arcfe-catalog.json（または公開URL）を再読み込みしてください
```

### Q: Storybookが見れない

- GitHub Pagesが公開されているか確認
- URLが正しいか確認: `https://kichikawa57.github.io/arcfe/`

### Q: 型エラーが出る

```bash
# styled-components型定義をインストール
pnpm add -D @types/styled-components

# tsconfig.json に追加
{
  "compilerOptions": {
    "types": ["styled-components"]
  }
}
```

---

## 🎉 まとめ

### **セットアップ完了チェックリスト**

- ✅ ArcFE UIインストール済み
- ✅ ThemeProvider設定済み
- ✅ `.claude/CLAUDE.md` 作成済み
- ✅ AIがカタログを学習済み
- ✅ `/match-visual` が動作する

### **これで開発速度が4-6倍に！**

- ⚡ Figmaデザイン → 3分で実装
- 🎯 コンポーネント選択の迷いゼロ
- 🔄 デザインシステムの一貫性
- 🎓 新メンバーのオンボーディング高速化

**今すぐ試してみましょう！**

```bash
/match-visual
[Figmaスクリーンショットを添付]
```
