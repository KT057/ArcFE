#!/usr/bin/env ts-node

import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

/**
 * Figmaからフォントスタイルを取得してCSSを生成するスクリプト
 *
 * 使用方法:
 * 1. 環境変数にFIGMA_TOKENを設定
 * 2. ts-node figma-font-extractor.ts <figma-file-id>
 *
 * 例:
 * FIGMA_TOKEN=your_token ts-node figma-font-extractor.ts abc123def456
 */

interface FigmaStyle {
  key: string;
  name: string;
  description: string;
  style_type: string;
  node_id: string;
}

interface FigmaStylesResponse {
  meta: {
    styles: FigmaStyle[];
  };
}

interface FigmaTextStyle {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeightPx?: number;
  lineHeightPercent?: number;
  letterSpacing?: number;
  textCase?: "UPPER" | "LOWER" | "TITLE";
  textDecoration?: "UNDERLINE" | "STRIKETHROUGH";
}

interface FigmaNodeDocument {
  document?: {
    style?: FigmaTextStyle;
  };
}

interface FigmaNodesResponse {
  nodes: Record<string, FigmaNodeDocument>;
}

interface CSSProperties {
  [key: string]: string;
}

interface ProcessedStyle {
  name: string;
  description: string;
  css: CSSProperties;
}

export class FigmaFontExtractor {
  private readonly token: string;
  private readonly baseUrl = "https://api.figma.com/v1";

  constructor(token: string) {
    this.token = token;
  }

  /**
   * Figmaのテキストスタイルを取得
   */
  private async fetchTextStyles(fileId: string): Promise<FigmaStyle[]> {
    console.log("fetchTextStyles", fileId);
    const response = await fetch(`${this.baseUrl}/files/${fileId}/styles`, {
      headers: {
        "X-Figma-Token": this.token
      }
    });

    if (!response.ok) {
      throw new Error(
        `Figma API error: ${response.status} ${response.statusText}`
      );
    }

    const data: FigmaStylesResponse = await response.json();
    // TEXT タイプのスタイルのみを抽出
    return data.meta.styles.filter((style) => style.style_type === "TEXT");
  }

  /**
   * スタイルIDからスタイル詳細を取得
   */
  private async fetchStyleDetails(
    fileId: string,
    styleIds: string[]
  ): Promise<FigmaNodesResponse> {
    const response = await fetch(
      `${this.baseUrl}/files/${fileId}/nodes?ids=${styleIds.join(",")}`,
      {
        headers: {
          "X-Figma-Token": this.token
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `Figma API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * FigmaのフォントプロパティをCSSプロパティに変換
   */
  private convertToCssProperties(textStyle: FigmaTextStyle): CSSProperties {
    const css: CSSProperties = {};

    // フォントファミリー
    if (textStyle.fontFamily) {
      css["font-family"] = `"${textStyle.fontFamily}"`;
    }

    // フォントサイズ（emバージョン）
    if (textStyle.fontSize) {
      css["font-size-em"] = `\${em(${textStyle.fontSize})}`;
    }

    // フォントサイズ（remバージョン）
    if (textStyle.fontSize) {
      css["font-size-rem"] = `\${rem(${textStyle.fontSize})}`;
    }

    // フォントウェイト
    if (textStyle.fontWeight) {
      css["font-weight"] = textStyle.fontWeight.toString();
    }

    // 行間（フォントサイズの倍数で計算）
    if (textStyle.lineHeightPx && textStyle.fontSize) {
      const lineHeightRatio = textStyle.lineHeightPx / textStyle.fontSize;
      css["line-height"] = lineHeightRatio.toFixed(2);
    } else if (textStyle.lineHeightPercent) {
      const lineHeightRatio = textStyle.lineHeightPercent / 100;
      css["line-height"] = lineHeightRatio.toFixed(2);
    }

    // 文字間隔
    if (textStyle.letterSpacing) {
      css["letter-spacing"] = `${textStyle.letterSpacing}px`;
    }

    // テキスト変換
    if (textStyle.textCase) {
      switch (textStyle.textCase) {
        case "UPPER":
          css["text-transform"] = "uppercase";
          break;
        case "LOWER":
          css["text-transform"] = "lowercase";
          break;
        case "TITLE":
          css["text-transform"] = "capitalize";
          break;
      }
    }

    // テキスト装飾
    if (textStyle.textDecoration) {
      switch (textStyle.textDecoration) {
        case "UNDERLINE":
          css["text-decoration"] = "underline";
          break;
        case "STRIKETHROUGH":
          css["text-decoration"] = "line-through";
          break;
      }
    }

    return css;
  }

  /**
   * スタイル名をスネークケースのプロパティ名に変換
   * 重複するフォント名部分を削除する
   */
  private toSnakeCase(name: string): string {
    // フォント名の重複を削除
    // 例: "Zen Kaku Gothic (JP)/Zen Kaku Gothic_700_62" → "Zen Kaku Gothic (JP)_700_62"
    const parts = name.split("/");
    if (parts.length === 2) {
      const [fontFamily, styleInfo] = parts;
      const fontFamilyClean = fontFamily.replace(/\s*\([^)]*\)\s*$/, "").trim(); // (JP)などを削除
      const styleInfoClean = styleInfo.trim();

      // スタイル情報からフォント名の重複を削除
      const fontNamePattern = new RegExp(
        `^${fontFamilyClean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}_?`,
        "i"
      );
      const cleanStyleInfo = styleInfoClean.replace(fontNamePattern, "");

      // フォント名とスタイル情報を結合
      const result = `${fontFamilyClean}_${cleanStyleInfo}`;
      return result
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
    }

    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  /**
   * TypeScriptファイルを生成
   */
  private generateTypeScript(styles: ProcessedStyle[]): string {
    let ts = `/* Generated from Figma - ${new Date().toISOString()} */\n`;
    ts += `import { css } from "styled-components";\n`;
    ts += `import { em, rem } from "./font";\n\n`;

    // emスタイルとremスタイルを分けて格納
    const emStyles: string[] = [];
    const remStyles: string[] = [];
    const processedNames = new Set<string>();

    for (const style of styles) {
      const snakeCaseName = this.toSnakeCase(style.name);

      // 重複チェック
      if (processedNames.has(snakeCaseName)) {
        continue;
      }
      processedNames.add(snakeCaseName);

      // emバージョンのプロパティ
      const emProperties = Object.entries(style.css)
        .filter(([property]) => property !== "font-size-rem")
        .map(([property, value]) => {
          if (property === "font-size-em") {
            return `    font-size: ${value};`;
          }
          return `    ${property}: ${value};`;
        })
        .join("\n");

      // remバージョンのプロパティ
      const remProperties = Object.entries(style.css)
        .filter(([property]) => property !== "font-size-em")
        .map(([property, value]) => {
          if (property === "font-size-rem") {
            return `    font-size: ${value};`;
          }
          return `    ${property}: ${value};`;
        })
        .join("\n");

      emStyles.push(`  ${snakeCaseName}: css\`\n${emProperties}\n  \``);
      remStyles.push(`  ${snakeCaseName}: css\`\n${remProperties}\n  \``);
    }

    // export const font オブジェクト形式で出力
    ts += `export const font = {\n`;
    ts += `  em: {\n`;
    ts += emStyles.join(",\n");
    ts += `\n  },\n`;
    ts += `  rem: {\n`;
    ts += remStyles.join(",\n");
    ts += `\n  }\n`;
    ts += `};\n`;

    return ts;
  }

  /**
   * メイン実行関数
   */
  async extract(fileId: string, outputDir = "./styles"): Promise<void> {
    try {
      console.log("Figmaからテキストスタイルを取得中...");

      // テキストスタイル一覧を取得
      const textStyles = await this.fetchTextStyles(fileId);
      console.log(`${textStyles.length}個のテキストスタイルが見つかりました`);

      if (textStyles.length === 0) {
        console.log("テキストスタイルが見つかりませんでした");
        return;
      }

      // スタイル詳細を取得
      const styleIds = textStyles.map((style) => style.node_id);
      const styleDetails = await this.fetchStyleDetails(fileId, styleIds);

      // スタイルをCSSプロパティに変換
      const processedStyles: ProcessedStyle[] = [];

      for (const style of textStyles) {
        const nodeData = styleDetails.nodes[style.node_id];
        const textStyle = nodeData?.document?.style || {};

        const cssProperties = this.convertToCssProperties(textStyle);

        if (Object.keys(cssProperties).length > 0) {
          processedStyles.push({
            name: style.name,
            description: style.description || "",
            css: cssProperties
          });
        }
      }

      if (processedStyles.length === 0) {
        console.log("有効なフォントスタイルが見つかりませんでした");
        return;
      }

      // 出力ディレクトリを作成
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // TypeScriptファイルを生成
      const tsContent = this.generateTypeScript(processedStyles);
      const tsPath = path.join(outputDir, "figma-fonts.ts");
      fs.writeFileSync(tsPath, tsContent);
      console.log(`TypeScriptファイルを生成しました: ${tsPath}`);

      console.log(
        `\n${processedStyles.length}個のフォントスタイルが抽出されました:`
      );
      for (const style of processedStyles) {
        console.log(`- ${style.name}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("エラーが発生しました:", errorMessage);
      process.exit(1);
    }
  }
}

// CLIとして実行される場合
if (require.main === module) {
  const fileId = process.env.FIGMA_FILE_ID;
  const outputDir = "./styles";

  if (!fileId) {
    console.error("環境変数 FIGMA_FILE_ID を設定してください");
    process.exit(1);
  }

  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    console.error("環境変数 FIGMA_TOKEN を設定してください");
    console.error(
      "例: FIGMA_TOKEN=your_token ts-node figma-font-extractor.ts abc123def456"
    );
    process.exit(1);
  }

  const extractor = new FigmaFontExtractor(token);
  extractor.extract(fileId, outputDir);
}
