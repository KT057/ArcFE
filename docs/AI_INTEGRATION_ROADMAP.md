# ArcFE AI統合実装ロードマップ

別のプロジェクトでArcFEを使った開発をAI（Claude Code / Cursor）でスムーズに行うための完全ガイド。

---

## 🎯 目標

1. **コンポーネントの完全理解**: AIがArcFEの全コンポーネント（デザイン・ロジック）を完全に把握
2. **ビジュアルマッチング**: Figmaデザインを見て、最適なArcFEコンポーネントを自動推薦
3. **自動コード生成**: 推薦されたコンポーネントでコードを自動生成
4. **継続的改善**: 使用フィードバックで精度向上

---

## 📋 Phase 1: 基礎構築（即座に実装可能）

### タスク1: コンポーネントカタログ作成 ✅
**優先度:** 🔴 最高
**所要時間:** 2-3時間
**担当:** カタログ自動生成エージェント

#### 実装手順
```bash
# 1. Explore Agentでカタログ生成
/task type:general-purpose "Generate complete component catalog from packages/ui"

# 2. 生成されたcatalog.jsonを確認
cat packages/ui/catalog.json

# 3. 人間レビュー
# - description が適切か
# - useCases が現実的か
# - figmaKeywords が網羅的か

# 4. 必要に応じて手動調整
```

#### 成果物
- `packages/ui/catalog.json` (全96コンポーネント)
- `packages/ui/catalog-summary.md` (人間用サマリー)

---

### タスク2: スラッシュコマンド作成 ✅
**優先度:** 🔴 最高
**所要時間:** 30分
**担当:** 手動

#### 実装手順
```bash
# 既に作成済み:
.claude/commands/match-visual.md
.claude/commands/show-component.md
.claude/commands/arcfe-search.md
.claude/commands/arcfe-component.md

# プロジェクトルートにコピー
# 別のプロジェクトで使う場合もコピーして使用
```

#### 成果物
- `/match-visual` - ビジュアルマッチング
- `/show-component` - スクリーンショット表示
- `/arcfe-search` - コンポーネント検索
- `/arcfe-component` - コンポーネント詳細

---

### タスク3: プロジェクトCLAUDE.md作成 ✅
**優先度:** 🔴 最高
**所要時間:** 30分
**担当:** 手動

#### 実装手順
```bash
# .claude/CLAUDE.md を作成（既に作成済み）
# 内容:
# - ArcFEの構造説明
# - AIを使った開発フロー
# - コンポーネント選択ガイドライン
# - スラッシュコマンドの使い方
```

#### 成果物
- `.claude/CLAUDE.md`

---

### タスク4: スクリーンショットインデックス作成
**優先度:** 🟠 高
**所要時間:** 1時間
**担当:** Explore Agent

#### 実装手順
```bash
# スクリーンショット一覧を生成
/task type:Explore "Create screenshot index from __screenshots__ directory"

# 出力: packages/ui/screenshot-index.json
{
  "components": [
    {
      "id": "button-product001",
      "screenshots": [
        {
          "name": "Default",
          "path": "__screenshots__/components/Basic/Button/Product001/index/Default.png",
          "visualFeatures": {
            "dominantColors": ["#fff", "#000"],
            "shape": "pill-shaped",
            "size": "middle"
          }
        }
      ]
    }
  ]
}
```

#### 成果物
- `packages/ui/screenshot-index.json`

---

## 📋 Phase 2: ドキュメント強化（1-2週間）

### タスク5: 各コンポーネントのREADME作成
**優先度:** 🟡 中
**所要時間:** 1-2週間
**担当:** General Purpose Agent（バッチ処理）

#### 実装手順
```bash
# 各コンポーネントディレクトリにREADME.mdを生成
/task type:general-purpose "Generate README.md for all components in packages/ui/components/"

# テンプレート:
# - 概要
# - デザインの特徴
# - 使用シーン
# - このコンポーネントを選ぶ基準
# - Props説明
# - コード例
```

#### 成果物
- `packages/ui/components/Basic/Button/Product001/README.md` x96

---

### タスク6: Figmaマッピングルール作成
**優先度:** 🟡 中
**所要時間:** 3-4時間
**担当:** 手動（デザイナー + エンジニア協業）

#### 実装手順
```bash
# figma-mapping.jsonを作成
# デザイナーと協議して、Figmaのデザインパターンと
# ArcFEコンポーネントの対応ルールを定義

# 例:
{
  "buttonMapping": {
    "rules": [
      {
        "condition": { "borderRadius": "> 20px" },
        "recommendation": "Button/Product001"
      }
    ]
  }
}
```

#### 成果物
- `packages/ui/figma-mapping.json`

---

### タスク7: Storybook公開
**優先度:** 🟡 中
**所要時間:** 1時間
**担当:** DevOps

#### 実装手順
```bash
# GitHub Actionsで自動デプロイ
# .github/workflows/deploy-storybook.yml を作成（既に作成済み）

# 手動デプロイ
pnpm --filter @packages/ui build-storybook
gh-pages -d packages/ui/storybook-static

# 公開URL: https://your-org.github.io/arcfe/
```

#### 成果物
- 公開されたStorybook（WebFetchでアクセス可能）

---

## 📋 Phase 3: 高度な統合（オプション）

### タスク8: カスタムMCPサーバー構築
**優先度:** 🟢 低（高度な自動化が必要な場合のみ）
**所要時間:** 1-2週間
**担当:** エンジニア

#### 実装手順
```bash
cd mcp-servers/arcfe-visual-matcher
pnpm install

# ツール実装:
# 1. search_components
# 2. match_design
# 3. get_screenshots
# 4. generate_code

pnpm build

# Claude Code設定
# ~/.config/claude-code/mcp.json に追加
```

#### 成果物
- MCPサーバー（より高速・高精度なマッチング）

---

### タスク9: Figma Plugin開発
**優先度:** 🟢 低（デザイナーとの密接な協業が必要な場合）
**所要時間:** 2-3週間
**担当:** エンジニア + デザイナー

#### 実装手順
```bash
# Figmaプラグイン作成
# - Figma上で選択したコンポーネントを解析
# - MCPサーバーでマッチング
# - ArcFEコンポーネントを推薦
# - コードをクリップボードにコピー
```

#### 成果物
- Figmaプラグイン

---

### タスク10: CI/CDデザインQA統合
**優先度:** 🟢 低（デザインシステムの厳格な運用が必要な場合）
**所要時間:** 1週間
**担当:** DevOps

#### 実装手順
```bash
# PRごとにデザインとの差分をチェック
# .github/workflows/design-qa.yml を作成

# 機能:
# - Storybookスクリーンショット生成
# - Figmaデザインと比較
# - 差分をPRにコメント
```

#### 成果物
- 自動デザインQA

---

## 📊 実装優先順位マトリクス

| タスク | 優先度 | 効果 | 工数 | すぐ実装？ |
|--------|--------|------|------|------------|
| 1. カタログ作成 | 🔴 最高 | ⭐⭐⭐⭐⭐ | 2-3h | ✅ YES |
| 2. スラッシュコマンド | 🔴 最高 | ⭐⭐⭐⭐⭐ | 0.5h | ✅ YES |
| 3. CLAUDE.md | 🔴 最高 | ⭐⭐⭐⭐ | 0.5h | ✅ YES |
| 4. スクリーンショットインデックス | 🟠 高 | ⭐⭐⭐⭐ | 1h | ✅ YES |
| 5. コンポーネントREADME | 🟡 中 | ⭐⭐⭐ | 1-2w | ⏳ LATER |
| 6. Figmaマッピング | 🟡 中 | ⭐⭐⭐⭐ | 3-4h | ⏳ LATER |
| 7. Storybook公開 | 🟡 中 | ⭐⭐⭐ | 1h | ⏳ LATER |
| 8. MCP Server | 🟢 低 | ⭐⭐⭐⭐⭐ | 1-2w | ❌ OPTIONAL |
| 9. Figma Plugin | 🟢 低 | ⭐⭐⭐⭐ | 2-3w | ❌ OPTIONAL |
| 10. CI/CD QA | 🟢 低 | ⭐⭐⭐ | 1w | ❌ OPTIONAL |

---

## 🚀 クイックスタート（今日から使える！）

### 最小構成（Phase 1のみ）
```bash
# 1. カタログ生成（2-3時間）
/task type:general-purpose "Generate catalog.json"

# 2. スラッシュコマンド設置（5分）
# 既に作成済みなのでそのまま使用

# 3. 使ってみる！
/match-visual
[Figmaスクリーンショット添付]
```

**これだけで基本的なビジュアルマッチングが使えます！** 🎉

---

## 📈 効果測定

### Before（手動）
- Figmaデザインを見る: 1分
- コンポーネント探し: 5-10分
- Storybook確認: 3-5分
- コード実装: 5-10分
- Props調整: 3-5分
**合計: 20-30分** ⏱️

### After（AI統合）
- `/match-visual`実行: 1分
- 推薦確認: 1分
- コード生成: 30秒
- 微調整: 2分
**合計: 5分** ⚡

**効率: 4-6倍向上！** 🚀

---

## 🎓 教育・オンボーディング

### 新メンバーへの説明
```markdown
## ArcFE UIの使い方

1. Figmaデザインをスクリーンショット
2. `/match-visual`コマンドを実行
3. 推薦されたコンポーネントを確認
4. コードをコピーして使用

**5分で実装完了！**

詳細: /arcfe-component [name] で各コンポーネントの詳細を確認
```

---

## 🔄 継続的改善

### フィードバックループ
1. 開発者がビジュアルマッチングを使用
2. 推薦が適切か評価
3. フィードバックをcatalog.jsonに反映
4. 精度向上

### 月次レビュー
- マッチング精度の確認
- 新しいコンポーネントの追加
- figma-mapping.jsonの更新
- ドキュメントの改善

---

## 📚 参考資料

- **Storybook**: https://your-storybook-url.com
- **カタログ**: `packages/ui/catalog.json`
- **スクリーンショット**: `packages/ui/__screenshots__/`
- **ドキュメント**: `docs/AI_INTEGRATION_ROADMAP.md` (このファイル)

---

## 🤝 貢献

新しいコンポーネントを追加したら：
1. Storybookストーリーを作成
2. スクリーンショット生成（`pnpm test-storybook`）
3. catalog.jsonを更新（`/catalog-generator`）
4. READMEを作成

---

## ❓ FAQ

### Q: Cursorでも使える？
A: はい！スラッシュコマンドはCursorでも動作します。

### Q: MCPサーバーは必須？
A: いいえ、Phase 1だけで十分使えます。MCPはより高度な自動化が必要な場合のみ。

### Q: Figmaのデザイントークンとの統合は？
A: figma-mapping.jsonで対応可能です。Figma Pluginを使えばさらに統合できます。

### Q: 既存プロジェクトに追加できる？
A: はい！.claude/ディレクトリをコピーするだけです。

---

## 🎉 まとめ

この統合により：
- ✅ デザインから実装までの時間が**4-6倍短縮**
- ✅ コンポーネント選択の**迷いがゼロ**
- ✅ デザインシステムの**一貫性向上**
- ✅ 新メンバーの**オンボーディング高速化**

**今すぐPhase 1を実装して、AI駆動開発を体験しましょう！** 🚀
