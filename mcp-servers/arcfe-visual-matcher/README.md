# ArcFE Visual Matcher MCP Server

FigmaデザインとArcFEコンポーネントのスクリーンショットを自動マッチングするMCPサーバー。

## 機能

### 1. コンポーネント検索
```typescript
// ツール: search_components
{
  "query": "button pill-shaped",
  "filters": {
    "category": "Basic",
    "visualKeywords": ["rounded", "modern"]
  }
}
```

### 2. ビジュアルマッチング
```typescript
// ツール: match_design
{
  "designImage": "base64_encoded_image",
  "options": {
    "threshold": 0.7,  // 類似度の閾値
    "maxResults": 5     // 最大結果数
  }
}
```

### 3. スクリーンショット取得
```typescript
// ツール: get_screenshots
{
  "componentId": "button-product001",
  "variants": ["Default", "PrimaryTheme"]
}
```

### 4. コード生成
```typescript
// ツール: generate_code
{
  "componentId": "button-product001",
  "customization": {
    "backgroundColor": "#0066FF",
    "borderColor": "#0066FF"
  }
}
```

## アーキテクチャ

```
┌─────────────────────────────────────────────────────────┐
│                    Claude Code / Cursor                  │
└────────────────────┬────────────────────────────────────┘
                     │ MCP Protocol
                     ▼
┌─────────────────────────────────────────────────────────┐
│              ArcFE Visual Matcher MCP Server             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Catalog    │  │  Screenshot  │  │    Code      │  │
│  │   Manager    │  │   Analyzer   │  │  Generator   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   ArcFE UI Repository                    │
│  - catalog.json                                          │
│  - __screenshots__/                                      │
│  - components/                                           │
└─────────────────────────────────────────────────────────┘
```

## セットアップ

### 1. インストール
```bash
cd mcp-servers/arcfe-visual-matcher
pnpm install
```

### 2. ビルド
```bash
pnpm build
```

### 3. Claude Code設定
```json
// ~/.config/claude-code/mcp.json
{
  "mcpServers": {
    "arcfe-visual-matcher": {
      "command": "node",
      "args": [
        "/path/to/front-end-boilerplate/mcp-servers/arcfe-visual-matcher/dist/index.js"
      ],
      "env": {
        "ARCFE_ROOT": "/path/to/front-end-boilerplate/packages/ui"
      }
    }
  }
}
```

### 4. 起動確認
```bash
claude-code mcp list
# arcfe-visual-matcher が表示されればOK
```

## 使用例

### Claude Codeから
```
ユーザー: このFigmaボタンを実装したい [image.png]

Claude: MCPサーバーを使ってマッチングします...

        [mcp__arcfe-visual-matcher__match_design を実行]

        結果: Button/Product001 (類似度: 95%)

        コードを生成します...

        [mcp__arcfe-visual-matcher__generate_code を実行]
```

## ツール詳細

### search_components
```typescript
interface SearchComponentsInput {
  query: string;
  filters?: {
    category?: "Basic" | "Advanced";
    subcategory?: string;
    visualKeywords?: string[];
    tags?: string[];
  };
  limit?: number;
}

interface SearchComponentsOutput {
  components: Array<{
    id: string;
    name: string;
    category: string;
    score: number;  // 検索スコア
    screenshot: string;  // デフォルトスクリーンショットのパス
  }>;
}
```

### match_design
```typescript
interface MatchDesignInput {
  designImage: string;  // Base64エンコード画像
  uiType?: "button" | "input" | "card" | "all";
  options?: {
    threshold?: number;  // 0-1
    maxResults?: number;
  };
}

interface MatchDesignOutput {
  matches: Array<{
    componentId: string;
    componentName: string;
    similarityScore: number;
    matchingFeatures: {
      shape: number;
      color: number;
      size: number;
      layout: number;
    };
    screenshotComparison: {
      designImage: string;
      arcfeScreenshot: string;
      differences: string[];
    };
    recommendedProps: Record<string, any>;
  }>;
}
```

### get_screenshots
```typescript
interface GetScreenshotsInput {
  componentId: string;
  variants?: string[];  // 指定しない場合は全バリアント
}

interface GetScreenshotsOutput {
  componentId: string;
  screenshots: Array<{
    name: string;
    path: string;
    base64: string;  // Base64エンコード画像
    props: Record<string, any>;
  }>;
}
```

### generate_code
```typescript
interface GenerateCodeInput {
  componentId: string;
  customization?: {
    props?: Record<string, any>;
    appearance?: Record<string, any>;
    wrapperComponent?: string;
  };
  outputFormat?: "tsx" | "jsx";
}

interface GenerateCodeOutput {
  code: string;
  imports: string[];
  usage: string;
}
```

## 拡張機能

### Figma Plugin統合
Figmaプラグインと連携して、Figma上で直接ArcFEコンポーネントを推薦：

```typescript
// Figmaプラグイン
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'match-component') {
    const screenshot = await figma.currentPage.exportAsync({ format: 'PNG' });

    // MCPサーバーに送信
    const matches = await fetch('http://localhost:3000/match', {
      method: 'POST',
      body: JSON.stringify({ image: screenshot })
    });

    figma.ui.postMessage({ type: 'matches', data: matches });
  }
};
```

### CI/CD統合
PRごとにデザインとの差分を自動チェック：

```yaml
# .github/workflows/design-qa.yml
name: Design QA

on: pull_request

jobs:
  design-diff:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Generate screenshots
        run: pnpm test-storybook

      - name: Compare with Figma
        run: |
          node scripts/compare-with-figma.js
          # MCPサーバーを使ってFigmaデザインと比較

      - name: Comment on PR
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              body: '📊 Design Diff Report: ...'
            })
```

## パフォーマンス

### ベンチマーク
- カタログ読み込み: ~50ms
- スクリーンショット検索: ~100ms
- ビジュアルマッチング（10画像）: ~500ms
- コード生成: ~50ms

**合計: ~700ms** ⚡

### キャッシュ戦略
- カタログは起動時に1回読み込み、メモリにキャッシュ
- スクリーンショットは初回アクセス時に読み込み、LRUキャッシュ
- 類似度計算結果は5分間キャッシュ

## セキュリティ

### 入力検証
- Base64画像サイズ制限: 5MB
- クエリ文字列長制限: 500文字
- ファイルパストラバーサル対策

### アクセス制御
- ローカルホストのみアクセス可能
- 認証トークン（オプション）

## トラブルシューティング

### MCPサーバーが起動しない
```bash
# ログ確認
tail -f ~/.config/claude-code/logs/mcp-arcfe-visual-matcher.log

# 手動起動テスト
node dist/index.js
```

### マッチング精度が低い
1. catalog.jsonの更新: `/catalog-generator`
2. スクリーンショット再生成: `pnpm test-storybook`
3. 閾値調整: `options.threshold` を下げる

## ライセンス
MIT
