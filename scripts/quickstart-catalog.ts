#!/usr/bin/env tsx

/**
 * ArcFE Catalog Quickstart
 *
 * Phase 1の基礎部分を素早く実装するスクリプト
 * - AST解析でprops抽出
 * - Storybookストーリー解析
 * - スクリーンショット収集
 * - component-manifest.json生成（CLIP Embeddingなし版）
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { parse } from "@typescript-eslint/typescript-estree";
import { glob } from "glob";

interface ComponentInfo {
  id: string;
  category: string;
  subcategory: string;
  productVariant?: string;
  name: string;
  displayName: string;
  props: any;
  screenshots: any;
  usageSnippets: any[];
  sourceFile: string;
}

// Step 1: コンポーネント探索
async function findAllComponents(): Promise<ComponentInfo[]> {
  console.log("🔍 Step 1: コンポーネント探索中...");

  const componentPaths = await glob("packages/ui/components/**/index.tsx", {
    ignore: ["**/node_modules/**", "**/dist/**"]
  });

  const components: ComponentInfo[] = [];

  for (const componentPath of componentPaths) {
    const parts = componentPath.split("/");
    const category = parts[3]; // Basic or Advanced
    const subcategory = parts[4]; // Button, Input, etc.
    const productVariant = parts[5]?.startsWith("Product")
      ? parts[5]
      : undefined;

    const name = productVariant
      ? `${subcategory}${productVariant.replace("Product", "")}`
      : subcategory;

    const id = `${category.toLowerCase()}-${subcategory.toLowerCase()}${productVariant ? "-" + productVariant.toLowerCase() : ""}`;

    components.push({
      id,
      category,
      subcategory,
      productVariant,
      name,
      displayName: name,
      props: {},
      screenshots: { variants: [] },
      usageSnippets: [],
      sourceFile: componentPath
    });
  }

  console.log(`✅ ${components.length}個のコンポーネントを発見`);
  return components;
}

// Step 2: AST解析でProps抽出（型情報 + JSDoc）
function extractProps(sourceCode: string): any {
  try {
    const ast = parse(sourceCode, {
      jsx: true,
      loc: true,
      range: true,
      comment: true,
      tokens: false
    });

    // interface または type の定義を探す
    const propsInterface = findPropsInterface(ast);

    if (!propsInterface) {
      return { extracted: {} };
    }

    // コメントとノードをマッピング
    const comments = ast.comments || [];
    attachComments(ast, comments);

    return {
      interface: propsInterface.name,
      extracted: parseInterface(propsInterface)
    };
  } catch (error) {
    console.error("AST解析エラー:", error);
    return { extracted: {} };
  }
}

function findPropsInterface(ast: any): any {
  // interface XXXProps または type XXXProps を探す
  for (const node of ast.body || []) {
    if (
      node.type === "TSInterfaceDeclaration" &&
      node.id.name.endsWith("Props")
    ) {
      return node;
    }
    if (
      node.type === "TSTypeAliasDeclaration" &&
      node.id.name.endsWith("Props")
    ) {
      return node;
    }
  }
  return null;
}

function parseInterface(interfaceNode: any): any {
  const props: any = {};

  // インターフェースの場合
  if (interfaceNode.type === "TSInterfaceDeclaration") {
    for (const member of interfaceNode.body?.body || []) {
      if (member.type === "TSPropertySignature") {
        const propName = member.key.name;
        props[propName] = parsePropSignature(member);
      }
    }
  }

  // 型エイリアスの場合
  if (interfaceNode.type === "TSTypeAliasDeclaration") {
    const typeAnnotation = interfaceNode.typeAnnotation;
    if (typeAnnotation?.type === "TSTypeLiteral") {
      for (const member of typeAnnotation.members || []) {
        if (member.type === "TSPropertySignature") {
          const propName = member.key.name;
          props[propName] = parsePropSignature(member);
        }
      }
    }
  }

  return props;
}

function parsePropSignature(member: any): any {
  const typeInfo = parseTypeAnnotation(member.typeAnnotation);
  const description = extractJSDoc(member);

  return {
    type: typeInfo.kind,
    tsType: typeInfo.tsType,
    required: !member.optional,
    optional: member.optional || false,
    description: description || undefined,
    enumValues: typeInfo.enumValues || undefined
  };
}

function parseTypeAnnotation(typeAnnotation: any): any {
  if (!typeAnnotation?.typeAnnotation) {
    return { kind: "unknown", tsType: "unknown" };
  }

  const type = typeAnnotation.typeAnnotation;

  // プリミティブ型
  if (type.type === "TSStringKeyword") {
    return { kind: "string", tsType: "string" };
  }
  if (type.type === "TSNumberKeyword") {
    return { kind: "number", tsType: "number" };
  }
  if (type.type === "TSBooleanKeyword") {
    return { kind: "boolean", tsType: "boolean" };
  }

  // リテラル型
  if (type.type === "TSLiteralType") {
    const value = type.literal.value || type.literal.raw;
    return { kind: "literal", tsType: String(value) };
  }

  // Union型
  if (type.type === "TSUnionType") {
    const types = type.types.map((t: any) => {
      if (t.type === "TSLiteralType") {
        return t.literal.value || t.literal.raw;
      }
      return "unknown";
    });
    const tsType = types.map((t: any) => JSON.stringify(t)).join(" | ");
    return {
      kind: "union",
      tsType: tsType,
      enumValues: types
    };
  }

  // 関数型
  if (type.type === "TSFunctionType") {
    return { kind: "function", tsType: "(...args: any[]) => any" };
  }

  // ReactNode
  if (type.type === "TSTypeReference" && type.typeName?.name === "ReactNode") {
    return { kind: "ReactNode", tsType: "ReactNode" };
  }

  // その他の型参照
  if (type.type === "TSTypeReference") {
    return {
      kind: "reference",
      tsType: type.typeName?.name || "unknown"
    };
  }

  return { kind: "unknown", tsType: "unknown" };
}

function attachComments(ast: any, comments: any[]): void {
  // AST を再帰的に走査して、各ノードにコメントを添付
  function visit(node: any): void {
    if (!node || typeof node !== "object") return;

    // range が存在する場合、直前のコメントを探す
    if (node.range) {
      const nodeStart = node.range[0];
      // ノードの直前にあるコメントを探す
      const leadingComments = comments.filter((comment) => {
        if (!comment.range) return false;
        const commentEnd = comment.range[1];
        // コメントの終了位置がノードの開始位置より前
        return commentEnd < nodeStart;
      });

      // 最も近いコメントを選択
      if (leadingComments.length > 0) {
        const closestComment = leadingComments[leadingComments.length - 1];
        // コメントとノードの間に他のコードがないか確認（簡易版）
        const distance = nodeStart - closestComment.range[1];
        if (distance < 100) {
          // 100文字以内なら添付
          node.leadingComments = [closestComment];
        }
      }
    }

    // 子ノードを再帰的に処理
    for (const key in node) {
      if (key === "range" || key === "loc" || key === "leadingComments") {
        continue;
      }
      const child = node[key];
      if (Array.isArray(child)) {
        child.forEach(visit);
      } else if (child && typeof child === "object") {
        visit(child);
      }
    }
  }

  visit(ast);
}

function extractJSDoc(node: any): string | null {
  // leadingComments から JSDoc を探す
  const comments = node.leadingComments || [];
  for (const comment of comments) {
    if (comment.type === "Block" && comment.value.startsWith("*")) {
      // JSDoc コメントを整形
      return comment.value
        .split("\n")
        .map((line: string) => line.trim().replace(/^\* ?/, ""))
        .filter((line: string) => line && !line.startsWith("@"))
        .join(" ")
        .trim();
    }
  }
  return null;
}

// Step 3: Storybookストーリー解析
async function extractStories(componentPath: string): Promise<any[]> {
  const storiesPath = componentPath.replace("index.tsx", "index.stories.tsx");

  if (!fs.existsSync(storiesPath)) {
    return [];
  }

  const storiesCode = fs.readFileSync(storiesPath, "utf-8");

  // 簡易版: export const XXX = で始まる行を探す
  const storyNames = storiesCode
    .split("\n")
    .filter((line) => /^export const \w+ = /.test(line))
    .map((line) => {
      const match = line.match(/^export const (\w+) = /);
      return match ? match[1] : null;
    })
    .filter(Boolean);

  return storyNames.map((name) => ({
    name,
    code: `// Story: ${name}\n// See ${storiesPath}`,
    providers: ["ThemeProvider"] // デフォルト
  }));
}

// Step 4: スクリーンショット収集
async function findScreenshots(component: ComponentInfo): Promise<any> {
  const screenshotBase = component.productVariant
    ? `packages/ui/__screenshots__/components/${component.category}/${component.subcategory}/${component.productVariant}/index`
    : `packages/ui/__screenshots__/components/${component.category}/${component.subcategory}/index`;

  const screenshots = await glob(`${screenshotBase}/*.png`);

  // basePath から packages/ui/ を除去
  const basePath = screenshotBase.replace(/^packages\/ui\//, '');

  return {
    basePath: basePath,
    variants: screenshots.map((screenshot) => {
      const filename = path.basename(screenshot, ".png");
      return {
        id: `${component.id}-${filename.toLowerCase()}`,
        name: filename,
        file: `${filename}.png`,
        // CLIP Embeddingは後で追加
        embeddingVector: null,
        visualFeatures: {
          // 後で画像解析して追加
          dominantColors: [],
          shape: "unknown"
        },
        props: {} // Storiesから推測
      };
    }),
    totalVariants: screenshots.length
  };
}

// メイン処理
async function main() {
  console.log("🚀 ArcFE Catalog Quickstart");
  console.log("================================\n");

  // Step 1: コンポーネント探索
  const components = await findAllComponents();

  // Step 2-4: 各コンポーネントの詳細情報を抽出
  console.log("\n📝 Step 2-4: コンポーネント詳細を解析中...");

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    process.stdout.write(
      `\r[${i + 1}/${components.length}] ${component.name}...`
    );

    // AST解析
    const sourceCode = fs.readFileSync(component.sourceFile, "utf-8");
    component.props = extractProps(sourceCode);

    // Storybookストーリー
    component.usageSnippets = await extractStories(component.sourceFile);

    // スクリーンショット
    component.screenshots = await findScreenshots(component);
  }
  console.log("\n✅ 完了\n");

  // Step 5: Manifest生成
  console.log("📦 Step 5: component-manifest.json を生成中...");

  const manifest = {
    version: "2.0.0-quickstart",
    metadata: {
      totalComponents: components.length,
      totalScreenshots: components.reduce(
        (sum, c) => sum + c.screenshots.totalVariants,
        0
      ),
      lastUpdated: new Date().toISOString(),
      note: "Quickstart版: CLIP Embeddingは未実装"
    },
    components: components.map((c) => ({
      id: c.id,
      category: c.category,
      subcategory: c.subcategory,
      productVariant: c.productVariant,
      name: c.name,
      displayName: c.displayName,
      props: c.props,
      screenshots: c.screenshots,
      usageSnippets: c.usageSnippets,
      dependencies: {
        requiredProviders: ["ThemeProvider"] // 簡易版
      },
      tags: [c.category.toLowerCase(), c.subcategory.toLowerCase()]
    }))
  };

  const outputPath = "packages/ui/component-manifest.json";
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

  console.log(`✅ ${outputPath} を生成しました\n`);

  // サマリー
  console.log("📊 サマリー");
  console.log("================================");
  console.log(`コンポーネント数: ${manifest.metadata.totalComponents}`);
  console.log(`スクリーンショット数: ${manifest.metadata.totalScreenshots}`);
  console.log(
    `平均バリアント数: ${(manifest.metadata.totalScreenshots / manifest.metadata.totalComponents).toFixed(1)}`
  );
  console.log("\n🎉 Quickstart完了！");
  console.log("\n次のステップ:");
  console.log("1. component-manifest.json を確認");
  console.log("2. CLIP Embeddingを追加（scripts/generate-embeddings.py）");
  console.log("3. カスタムスラッシュコマンドをテスト");
}

main().catch(console.error);
