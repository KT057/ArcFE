# 別プロジェクトでArcFE UIを使う（シンプル版）

**ローカルカタログでAI統合 - 5分でセットアップ完了**

---

## 🎯 このガイドの目標

新しいプロジェクトで：
1. ArcFE UIをインストール
2. AIにコンポーネントを学習させる
3. Figmaスクショ → 自動実装を実現

**所要時間: 5分**

---

## 📋 セットアップ

### **Step 1: ArcFE UIインストール**

```bash
cd /path/to/your-new-project

# インストール（ローカルリンク版）
pnpm add file:/Users/kotaichikawa/works/front-end-boilerplate/packages/ui

# または npm公開後
# pnpm add @arcfe/ui styled-components
```

### **Step 2: カタログをコピー**

```bash
# ArcFEリポジトリからカタログをコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json
```

### **Step 3: ThemeProvider セットアップ**

```tsx
// app/layout.tsx (Next.js App Router)
'use client';

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

### **Step 4: .claude/CLAUDE.md 作成**

```bash
mkdir -p .claude
cat > .claude/CLAUDE.md << 'EOF'
# ArcFE UI Component Library

このプロジェクトは @arcfe/ui を使用しています。

## 🤖 AIへの指示

### 初回セットアップ（必須）

`./arcfe-catalog.json` を読み込んで、全ArcFEコンポーネントを学習してください。

### Figmaデザイン実装時のルール

1. **まずArcFEコンポーネントを検索**
   - `arcfe-catalog.json`から最適なコンポーネントを探す
   - 類似度70%以上なら、ArcFEコンポーネントを使用

2. **類似度70%未満の場合**
   - 「ArcFEに該当するコンポーネントがありませんでした」と明示
   - 新規コンポーネントを一から作成

## ThemeProvider（必須）

全ArcFEコンポーネントはThemeProviderが必要です。
app/layout.tsx で既に設定済み。
EOF
```

### **Step 5: AIに学習させる**

Claude Codeで：

```
./arcfe-catalog.json を読み込んで、全ArcFEコンポーネントを学習してください
```

**これで完了！** 🎉

---

## 🚀 使い方

### **Figmaスクリーンショットを貼るだけ**

```
このFigmaデザインを実装してください
[スクリーンショット添付]
```

**AIの処理:**

#### ✅ **ArcFEコンポーネントが見つかった場合（類似度70%+）**

```
🎯 Button/Product001 が最適です（類似度: 95%）

実装:
<Button001
  type="001"
  appearance={{
    backgroundColor: "#007bff",
    color: "#fff"
  }}
>
  クリック
</Button001>
```

#### ❌ **該当なしの場合（類似度70%未満）**

```
⚠️ ArcFEに該当するコンポーネントが見つかりませんでした

💡 新規コンポーネントを作成します

[styled-componentsでカスタムコンポーネント生成]
```

---

## 🔄 カタログ更新

ArcFEに新しいコンポーネントが追加された場合：

```bash
# 最新カタログをコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json

# Claude Codeで
arcfe-catalog.json が更新されました。再読み込みしてください
```

---

## 💡 よく使うコンポーネント

```tsx
// ボタン
import { Button001, Button002 } from '@arcfe/ui';

<Button001 type="001">シンプルボタン</Button001>
<Button002 icon={<Icon />}>アイコン付き</Button002>

// 入力フィールド
import { TextField003 } from '@arcfe/ui';

<TextField003 label="メールアドレス" type="email" />

// モーダル
import { Modal001 } from '@arcfe/ui';

<Modal001 isOpen={open}>...</Modal001>
```

---

## 🎉 まとめ

### **セットアップ:**
1. ✅ `pnpm add` でインストール
2. ✅ `arcfe-catalog.json` をコピー
3. ✅ `ThemeProvider` 設定
4. ✅ AIに学習させる

### **使い方:**
1. Figmaスクショを貼る
2. AI が自動で実装
3. 完了！

**たったこれだけ！** シンプル！ 🚀
