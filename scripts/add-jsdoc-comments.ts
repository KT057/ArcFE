#!/usr/bin/env tsx
/**
 * JSDoc コメント一括追加スクリプト
 *
 * packages/ui/components/Basic 配下のすべてのコンポーネントに
 * 基本的な JSDoc コメントを自動追加します
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { parse } from "@typescript-eslint/typescript-estree";
import { glob } from "glob";

interface PropInfo {
  name: string;
  optional: boolean;
  typeAnnotation: string;
  hasComment: boolean;
  line: number;
}

// prop 名から推測される説明文
function getDescriptionForProp(propName: string, typeAnnotation: string): string {
  const descriptions: Record<string, string> = {
    as: "HTML 要素タイプ",
    type: "スタイルタイプ",
    size: "サイズ (small, middle, large)",
    children: "表示内容",
    className: "追加する CSS クラス名",
    style: "追加する CSS スタイル",
    disabled: "無効化するかどうか",
    checked: "チェック状態",
    value: "値",
    defaultValue: "初期値",
    placeholder: "プレースホルダーテキスト",
    name: "name 属性",
    id: "id 属性",
    label: "ラベルテキスト",
    error: "エラー状態かどうか",
    errorText: "エラーメッセージテキスト",
    onClick: "クリック時のコールバック関数",
    onChange: "値変更時のコールバック関数",
    onBlur: "フォーカスが外れた時のコールバック関数",
    onFocus: "フォーカス時のコールバック関数",
    onSubmit: "送信時のコールバック関数",
    appearance: "外観をカスタマイズ",
    variant: "バリアント",
    animation: "アニメーション効果",
    icon: "アイコン",
    iconDirection: "アイコンの表示位置",
    fullWidth: "親要素の幅いっぱいに広げるかどうか",
    open: "開いているかどうか",
    isOpen: "開いているかどうか",
    visible: "表示するかどうか",
    loading: "ローディング状態",
    required: "必須項目かどうか",
    readOnly: "読み取り専用かどうか",
    autoFocus: "自動フォーカスするかどうか",
    autoComplete: "オートコンプリート属性",
    maxLength: "最大文字数",
    minLength: "最小文字数",
    max: "最大値",
    min: "最小値",
    step: "ステップ値",
    pattern: "入力パターン（正規表現）",
    title: "タイトル",
    href: "リンク先 URL",
    target: "リンクのターゲット",
    rel: "リンクの関係性",
    src: "画像や動画の URL",
    alt: "代替テキスト",
    width: "幅",
    height: "高さ",
    role: "ARIA role 属性",
    ariaLabel: "ARIA label 属性",
    ariaDescribedBy: "ARIA describedby 属性",
    tabIndex: "タブインデックス"
  };

  if (descriptions[propName]) {
    return descriptions[propName];
  }

  // 型から推測
  if (typeAnnotation.includes("ReactNode")) {
    return "表示内容";
  }
  if (typeAnnotation.includes("MouseEvent") || typeAnnotation.includes("() =>")) {
    return "コールバック関数";
  }
  if (typeAnnotation.includes("boolean")) {
    return `${propName} の設定`;
  }
  if (typeAnnotation.includes("string")) {
    return `${propName} の値`;
  }
  if (typeAnnotation.includes("number")) {
    return `${propName} の値`;
  }

  return `${propName} の設定`;
}

// ファイルを解析して、Props 情報を取得
function analyzePropsInFile(filePath: string): {
  props: PropInfo[];
  propsStartLine: number;
  propsEndLine: number;
} | null {
  try {
    const sourceCode = fs.readFileSync(filePath, "utf-8");
    const lines = sourceCode.split("\n");

    const ast = parse(sourceCode, {
      jsx: true,
      loc: true,
      range: true,
      comment: true
    });

    // Props 定義を探す
    let propsNode: any = null;
    for (const node of ast.body || []) {
      if (
        (node.type === "TSInterfaceDeclaration" ||
          node.type === "TSTypeAliasDeclaration") &&
        (node.id?.name?.endsWith("Props") || node.id?.name === "BaseProps")
      ) {
        propsNode = node;
        break;
      }
    }

    if (!propsNode) {
      return null;
    }

    const props: PropInfo[] = [];
    const members =
      propsNode.type === "TSInterfaceDeclaration"
        ? propsNode.body?.body || []
        : propsNode.typeAnnotation?.type === "TSTypeLiteral"
          ? propsNode.typeAnnotation.members || []
          : [];

    for (const member of members) {
      if (member.type === "TSPropertySignature") {
        const propName = member.key?.name;
        if (!propName) continue;

        const line = member.loc?.start.line || 0;

        // この prop の直前にコメントがあるか確認
        let hasComment = false;
        if (line > 1) {
          const previousLine = lines[line - 2]?.trim() || "";
          if (previousLine.startsWith("/**") || previousLine.startsWith("*")) {
            hasComment = true;
          }
        }

        props.push({
          name: propName,
          optional: member.optional || false,
          typeAnnotation: sourceCode.slice(
            member.typeAnnotation?.range?.[0] || 0,
            member.typeAnnotation?.range?.[1] || 0
          ),
          hasComment,
          line
        });
      }
    }

    return {
      props,
      propsStartLine: propsNode.loc?.start.line || 0,
      propsEndLine: propsNode.loc?.end.line || 0
    };
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error);
    return null;
  }
}

// JSDoc コメントを追加
function addJSDocToFile(filePath: string): boolean {
  const analysis = analyzePropsInFile(filePath);
  if (!analysis) {
    return false;
  }

  const { props } = analysis;
  const propsWithoutComments = props.filter((p) => !p.hasComment);

  if (propsWithoutComments.length === 0) {
    console.log(`✓ ${filePath}: すでに JSDoc が追加されています`);
    return false;
  }

  // ファイルを読み込んで、各 prop の直前に JSDoc を追加
  let sourceCode = fs.readFileSync(filePath, "utf-8");
  const lines = sourceCode.split("\n");

  // 後ろから順番に追加（行番号がずれないように）
  for (const prop of propsWithoutComments.reverse()) {
    const description = getDescriptionForProp(prop.name, prop.typeAnnotation);
    const jsdoc = `  /**\n   * ${description}\n   */`;

    // prop の行の直前に JSDoc を挿入
    const insertLine = prop.line - 1; // 0-indexed
    lines.splice(insertLine, 0, jsdoc);
  }

  // ファイルに書き込み
  fs.writeFileSync(filePath, lines.join("\n"));
  console.log(
    `✓ ${filePath}: ${propsWithoutComments.length} 個の prop に JSDoc を追加しました`
  );
  return true;
}

// メイン処理
async function main() {
  console.log("🚀 JSDoc 一括追加開始");
  console.log("================================\n");

  // Basic 配下のすべての index.tsx を取得
  const componentFiles = await glob(
    "packages/ui/components/Basic/**/index.tsx",
    {
      ignore: ["**/node_modules/**", "**/dist/**", "**/hooks/**"]
    }
  );

  console.log(`📁 ${componentFiles.length} 個のコンポーネントを発見\n`);

  let processedCount = 0;
  let skippedCount = 0;

  for (const file of componentFiles) {
    const updated = addJSDocToFile(file);
    if (updated) {
      processedCount++;
    } else {
      skippedCount++;
    }
  }

  console.log("\n================================");
  console.log("📊 完了サマリー");
  console.log(`  処理済み: ${processedCount} ファイル`);
  console.log(`  スキップ: ${skippedCount} ファイル`);
  console.log("================================\n");

  console.log("🎉 JSDoc の一括追加が完了しました！");
  console.log("\n次のステップ:");
  console.log("1. pnpm catalog:build を実行してマニフェストを再生成");
}

main().catch(console.error);
