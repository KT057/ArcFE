# 理想的な開発ワークフロー

**Figmaデザイン → ArcFEコンポーネント自動実装 → 該当なしなら一から作成**

---

## 🎯 ワークフロー全体像

```
┌─────────────────────────────────────────┐
│ Figmaデザイン                             │
│ - スクリーンショット or                    │
│ - Figma URL (MCP経由)                    │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│ AI が component-manifest.json で検索      │
│ ArcFEコンポーネントとマッチング             │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
┌──────────────┐   ┌──────────────┐
│ マッチあり    │   │ マッチなし    │
│ (類似度70%+) │   │ (類似度<70%) │
└──────┬───────┘   └──────┬───────┘
       │                  │
       ▼                  ▼
┌──────────────┐   ┌──────────────┐
│ ArcFEで実装   │   │ 新規作成      │
└──────────────┘   └──────────────┘
```

---

## 📋 セットアップ（1回のみ）

### Step 1: カタログ生成

ArcFEリポジトリで：

```bash
cd /Users/kotaichikawa/works/front-end-boilerplate

# カタログ生成
pnpm catalog:build

# 確認
ls -lh packages/ui/component-manifest.json
# → 209KB
```

### Step 2: 別プロジェクトにカタログをコピー

```bash
cd /path/to/your-project

# カタログをコピー
cp /Users/kotaichikawa/works/front-end-boilerplate/packages/ui/component-manifest.json \
   ./arcfe-catalog.json
```

### Step 3: .claude/CLAUDE.md 作成

```bash
mkdir -p .claude
cat > .claude/CLAUDE.md << 'EOF'
# ArcFE UI Component Library

このプロジェクトは @arcfe/ui を使用しています。

## 🤖 AIへの指示

### 初回セットアップ（必須）

`./arcfe-catalog.json` を読み込んで、全ArcFEコンポーネントを学習してください。

このカタログには以下が含まれます：
- 81個のコンポーネント情報
- Props型定義
- 使用例
- スクリーンショット情報（122枚）

### Figmaデザイン実装時のルール

1. **まずArcFEコンポーネントを検索**
   - `arcfe-catalog.json`から最適なコンポーネントを探す
   - 類似度70%以上なら、ArcFEコンポーネントを使用
   - 類似度70%未満なら、新規作成を提案

2. **ArcFEコンポーネントで実装する場合**
   - カタログからpropsを取得
   - appearance propsでカスタマイズ
   - 必ずThemeProviderを設定

3. **新規作成する場合**
   - 「ArcFEに該当するコンポーネントがありませんでした」と明示
   - 一から新しいコンポーネントを作成
   - styled-componentsを使用
   - プロジェクトの既存パターンに従う

## 使用可能なコマンド

- `/match-visual` - Figmaデザインから最適なコンポーネントを推薦
- `/arcfe-search [keyword]` - キーワード検索
- `/show-component [name]` - スクリーンショット表示

## ThemeProvider セットアップ（必須）

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
EOF
```

### Step 4: AIに学習させる

Claude Codeで：

```
./arcfe-catalog.json を読み込んで、全ArcFEコンポーネントを学習してください
```

**これで準備完了！** 🎉

---

## 🚀 実際の使用方法

### **方法1: スクリーンショットを貼る（推奨）**

```
このFigmaデザインを実装してください
[スクリーンショット添付]
```

**AIの処理:**

1. 画像を解析（形状、色、サイズ、レイアウト）
2. `arcfe-catalog.json`から類似コンポーネントを検索
3. マッチング結果を提示：

#### ✅ **マッチした場合（類似度70%以上）**

```
📸 ビジュアル解析完了

特徴:
- 形状: pill-shaped（大きな角丸）
- 色: 青背景、白テキスト
- サイズ: middle

🎯 ArcFEコンポーネントが見つかりました！

推薦: Button/Product001 (類似度: 95%)

実装コード:
```tsx
import { Button001 } from '@arcfe/ui';

<Button001
  type="001"
  size="middle"
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

#### ❌ **マッチしなかった場合（類似度70%未満）**

```
📸 ビジュアル解析完了

特徴:
- 形状: 複雑なグラデーション背景
- レイアウト: 2カラム + アイコン + バッジ
- カスタムアニメーション

⚠️ ArcFEに該当するコンポーネントが見つかりませんでした
（最も近いコンポーネント: Button002、類似度: 45%）

💡 新規コンポーネントを作成します

実装コード:
```tsx
import styled from 'styled-components';

const CustomButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 16px 32px;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const MyComponent = () => {
  return (
    <CustomButton>
      今すぐ購入
    </CustomButton>
  );
};
```

新規コンポーネントを作成しました。
必要に応じて調整してください。
```

---

### **方法2: Figma URL を渡す（Figma MCP使用）**

Figma MCPを設定している場合：

```
このFigmaノードを実装してください
https://www.figma.com/file/xxx/yyy?node-id=123:456
```

**AIの処理:**

1. Figma MCPでノード情報を取得
2. デザイントークン、色、サイズを抽出
3. `arcfe-catalog.json`から検索
4. マッチング → 実装 or 新規作成

---

## 🎨 マッチング判定基準

### **ArcFEを使う（類似度70%以上）**

以下の条件を満たす場合：

- ✅ **形状が一致**（pill-shaped / rounded / sharp）
- ✅ **UIパターンが一致**（ボタン、入力、カード等）
- ✅ **レイアウトが似ている**（アイコン位置、テキスト配置）
- ✅ **カスタマイズで対応可能**（色・サイズはappearance propsで調整）

#### 例: ArcFEで実装すべきケース

- pill-shapedの青いボタン → **Button001** + appearance調整
- フローティングラベル付き入力 → **TextField003**
- シンプルなモーダル → **Modal001**
- 基本的なページネーション → **Pagination001**

---

### **新規作成する（類似度70%未満）**

以下の場合は新規作成：

- ❌ **複雑なデザイン**（グラデーション、特殊��アニメーション）
- ❌ **特殊なレイアウト**（3カラム構成、独自のグリッド）
- ❌ **カスタムUI**（プロジェクト固有のデザインパターン）
- ❌ **ArcFEに該当なし**（類似コンポーネントが見つからない）

#### 例: 新規作成すべきケース

- グラデーション背景のカード
- 複雑なアニメーション付きボタン
- カスタムチャート・グラフ
- 独自のナビゲーションメニュー

---

## 💡 使用例（実際の会話）

### **例1: ArcFEで実装**

```
開発者: このボタンを実装したい
        [pill-shapedの青いボタンのスクショ]

AI: 📸 解析中...

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

    実装しますか？

開発者: はい

AI: [実装完了]
    src/components/PrimaryButton.tsx を作成しました。
```

**所要時間: 1分** ⚡

---

### **例2: 新規作成**

```
開発者: このカードを実装したい
        [複雑なグラデーション + 画像 + バッジのカード]

AI: 📸 解析中...

    ⚠️ ArcFEに該当するコンポーネントが見つかりませんでした
    （類似: 基本的なカードレイアウトはありますが、
     このデザインの複雑さには対応していません）

    💡 新規コンポーネントを作成します

    [styled-componentsでカスタムコンポーネント生成]

    src/components/CustomCard.tsx を作成しました。

開発者: 完璧！

AI: ありがとうございます！
    必要に応じて、このコンポーネントを
    ArcFEに追加することも検討してください。
```

**所要時間: 3分** ⚡

---

## 🔄 カタログ更新

ArcFEに新しいコンポーネントが追加された場合：

```bash
# ArcFEリポジトリで
cd /Users/kotaichikawa/works/front-end-boilerplate
pnpm catalog:build

# 別プロジェクトにコピー
cp packages/ui/component-manifest.json /path/to/your-project/arcfe-catalog.json

# Claude Codeで
arcfe-catalog.json が更新されました。再読み込みしてください
```

---

## 📊 効果測定

### **Before（ArcFEなし）**
- Figmaデザイン確認: 1分
- コンポーネント実装: 10-20分
- スタイル調整: 5-10分
**合計: 15-30分**

### **After（ArcFE + AI）**
- Figmaスクショ貼り付け: 10秒
- AI解析 + 実装: 1-3分
**合計: 1-3分** 🚀

**効率: 5-30倍向上！**

---

## 🎉 まとめ

### **この理想的なワークフロー:**

1. ✅ **シンプル**: スクショ貼るだけ
2. ✅ **賢い**: ArcFEを最大活用
3. ✅ **柔軟**: 該当なしなら新規作成
4. ✅ **高速**: 1-3分で実装完了

### **開発者がやること:**
1. Figmaスクショを貼る
2. 確認して「はい」と答える
3. 完了！

**たったこれだけ！** 🎉
