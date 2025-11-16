# 別プロジェクトで ArcFE UI を使う完全ガイド

**新しいプロジェクトで ArcFE UI をインストールして、AI に学習させ、開発を高速化する手順**

---

## 🎯 このガイドの目標

1. 新規プロジェクトに ArcFE UI をインストール
2. AI に ArcFE コンポーネントを学習させる
3. Figma デザイン → 自動コード生成を実現
4. 開発速度を 4-6 倍向上

---

## 📋 前提条件

- Node.js 18+
- pnpm（または npm / yarn）
- Claude Code または Cursor

---

## 🚀 セットアップ（5 分）

### **Step 1: 新規プロジェクト作成**

```bash
# 例: Next.js プロジェクト
npx create-next-app@latest my-new-project
cd my-new-project

# または既存プロジェクト
cd /path/to/your-existing-project
```

---

### **Step 2: ArcFE UI インストール**

```bash
pnpm add @arcfe/ui styled-components

# TypeScript型定義
pnpm add -D @types/styled-components
```

**注意:** 現在 ArcFE UI は npm に未公開のため、以下のいずれかの方法でインストール：

#### オプション 1: ローカルパス（開発用）

```bash
# ArcFEリポジトリをビルド
cd /Users/kotaichikawa/works/front-end-boilerplate
pnpm --filter @packages/ui build

# 別プロジェクトでリンク
cd /path/to/my-new-project
pnpm add file:/Users/kotaichikawa/works/front-end-boilerplate/packages/ui
```

#### オプション 2: npm に公開（本番用）

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

"use client"; // App Routerの場合

import { ThemeProvider } from "styled-components";
import { themes } from "@arcfe/ui/styles/themes";
import { color } from "@arcfe/ui/styles/color";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={themes(color)}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

---

### **Step 4: .claude/CLAUDE.md を作成**

```bash
mkdir -p .claude
```

`.claude/CLAUDE.md` を作成：

```markdown
# プロジェクト設定

このプロジェクトは **ArcFE UI Component Library** を使用しています。

## ArcFE UI について

ArcFE UI は 96 個の React コンポーネントを提供するデザインシステムです。

## 🤖 AI への指示

### 初回セットアップ時（このメッセージを見たら必ず実行）

**必須:** ArcFE コンポーネントカタログを読み込んで、全コンポーネントを学習してください：

\`\`\`
node_modules/@arcfe/packages/ui/component-manifest.json
\`\`\`

このカタログには以下が含まれます：

- 96 個の全コンポーネント情報
- Props 型定義（AST 解析済み）
- 使用例（コードスニペット）
- スクリーンショット情報
- ビジュアル特性

**重要:** カタログを読み込むまで、ArcFE コンポーネントの推薦やコード生成を行わないでください。

### コンポーネント使用時の原則

1. **常にカタログを参照**

   - `node_modules/@arcfe/packages/ui/component-manifest.json`からコンポーネント情報を取得
   - props、使用例を確認
   - 最新の情報を使用

2. **ThemeProvider は必須**

   - 全 ArcFE コンポーネントは ThemeProvider が必要
   - 既に app/layout.tsx で設定済み

3. **インポート方法**
   \`\`\`tsx
   import { Button001, TextField003 } from '@arcfe/ui';
   \`\`\`

4. **appearance props でカスタマイズ**
   - ほとんどのコンポーネントは appearance props で外観をカスタマイズ可能

## 使用可能なコマンド

### `/arcfe-search [keyword]`

キーワードで ArcFE コンポーネントを検索

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

Figma デザインから最適な ArcFE コンポーネントを推薦

使い方:

\`\`\`
/match-visual
[Figma スクリーンショットを添付]
\`\`\`

## よくあるコンポーネント選択

### ボタン

- **CTA ボタン（pill-shaped）**: Button/Product001
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

→ ThemeProvider が設定されているか確認

### コンポーネントが見つからない

→ カタログを再読み込み: `node_modules/@arcfe/packages/ui/component-manifest.json`

### 型エラーが出る

→ `@types/styled-components`がインストールされているか確認
```

---

### **Step 5: スラッシュコマンドをコピー（オプション）**

```bash
mkdir -p .claude/commands

# ArcFEリポジトリからコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/.claude/commands/*.md \
   .claude/commands/
```

**注意:** スラッシュコマンドをコピーした場合、各コマンド内のカタログパスを `node_modules/@arcfe/packages/ui/component-manifest.json` に修正してください。

---

### **Step 6: AI に学習させる（初回のみ）**

Claude Code を開いて：

```bash
node_modules/@arcfe/packages/ui/component-manifest.json を読み込んで、全ArcFEコンポーネントを学習してください
```

**AI の応答例:**

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

### **例 1: Figma からボタンを実装**

```bash
# Claude Codeで
/match-visual
```

**Figma スクリーンショットを添付:**

- 青い背景
- 白いテキスト
- 大きな角丸
- "今すぐ購入"

**AI の応答:**

````
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
````

実装しますか？

````

---

### **例 2: キーワードでコンポーネント検索**

```bash
/arcfe-search input floating label
````

**AI の応答:**

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
```

---

### **例 3: コンポーネント詳細を確認**

```bash
/arcfe-component Button/Product001
```

**AI の応答:**

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
```

---

## 🔄 カタログ更新

ArcFE UI を最新バージョンに更新した場合：

```bash
# パッケージ更新
pnpm update @arcfe/ui

# Claude Codeで再学習
node_modules/@arcfe/packages/ui/component-manifest.json が更新されました。再読み込みしてください
```

カタログは `@arcfe/ui` パッケージに含まれているため、パッケージ更新で自動的に最新版が利用可能になります。

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

# .claude/ ディレクトリを作成
mkdir -p .claude

# .claude/CLAUDE.md を作成（上記Step 4の内容）

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
# Claude Codeで以下を実行:
node_modules/@arcfe/packages/ui/component-manifest.json を読み込んで、全ArcFEコンポーネントを学習してください
```

---

## 📊 開発速度の比較

### **Before（ArcFE AI 統合なし）**

1. Figma デザインを見る: 1 分
2. どのコンポーネントを使うか調査: 5-10 分
3. Storybook で確認: 3-5 分
4. コード実装: 5-10 分
5. Props 調整: 3-5 分

**合計: 20-30 分** ⏱️

---

### **After（ArcFE AI 統合あり）**

1. `/match-visual` でマッチング: 30 秒
2. AI がコード生成: 10 秒
3. コピー&ペースト: 10 秒
4. 微調整: 2 分

**合計: 3 分** ⚡

**効率: 87-90%削減！**

---

## 🎓 チーム展開

### **新メンバーのオンボーディング**

1. プロジェクトをクローン
2. `pnpm install`
3. Claude Code を開く（自動でカタログ学習）
4. `/arcfe-search button` で試してみる

**所要時間: 5 分** → 従来の 1-2 時間から大幅短縮！

### **ドキュメント**

`.claude/CLAUDE.md` に全てまとまっているので、追加ドキュメント不要。

---

## 🚨 トラブルシューティング

### Q: AI がカタログを読み込まない

```bash
# 明示的に指示
node_modules/@arcfe/packages/ui/component-manifest.json を読み込んで、全コンポーネントを学習してください
```

### Q: コンポーネントが見つからない

```bash
# パッケージが正しくインストールされているか確認
ls node_modules/@arcfe/packages/ui/component-manifest.json

# カタログを再読み込み
node_modules/@arcfe/packages/ui/component-manifest.json を再読み込みしてください
```

### Q: カタログファイルが見つからない

- `@arcfe/ui` が正しくインストールされているか確認
- パッケージに `component-manifest.json` が含まれているか確認（ArcFE リポジトリでビルド時に含まれます）

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

- ✅ ArcFE UI インストール済み
- ✅ ThemeProvider 設定済み
- ✅ `.claude/CLAUDE.md` 作成済み
- ✅ AI がカタログを学習済み
- ✅ `/match-visual` が動作する

### **これで開発速度が 4-6 倍に！**

- ⚡ Figma デザイン → 3 分で実装
- 🎯 コンポーネント選択の迷いゼロ
- 🔄 デザインシステムの一貫性
- 🎓 新メンバーのオンボーディング高速化

**今すぐ試してみましょう！**

```bash
/match-visual
[Figmaスクリーンショットを添付]
```
