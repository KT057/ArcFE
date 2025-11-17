import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

/**
 * サポートされている出力フォーマット
 */
export type OutputFormat = "webp" | "jpeg" | "png" | "avif";

/**
 * 画像変換オプション
 */
export type ConvertImagesOptions = {
  /** 元画像のディレクトリパス */
  sourceDir: string;
  /** 出力先ディレクトリパス */
  outputDir: string;
  /** 出力フォーマット (デフォルト: 'webp') */
  outputFormat?: OutputFormat;
  /** 品質 (0-100) */
  quality?: number;
  /** サポートする画像形式 */
  supportedFormats?: readonly string[];
  /** カスタムロガー */
  logger?: {
    log: (message: string) => void;
    error: (message: string) => void;
  };
};

/**
 * 変換結果の統計情報
 */
export type ConversionStats = {
  /** 処理した画像数 */
  totalImages: number;
  /** 成功した変換数 */
  successCount: number;
  /** 失敗した変換数 */
  failureCount: number;
  /** 合計削減バイト数 */
  totalBytesSaved: number;
};

/**
 * デフォルト設定
 */
const DEFAULT_OPTIONS = {
  outputFormat: "webp" as OutputFormat,
  quality: 80,
  supportedFormats: [".jpg", ".jpeg", ".png", ".gif", ".webp"] as const,
  logger: {
    log: console.log,
    error: console.error,
  },
} as const;

/**
 * ディレクトリを再帰的に作成
 */
const ensureDir = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

/**
 * ディレクトリ内の全ファイルを再帰的に取得
 */
const getAllFiles = (
  dirPath: string,
  arrayOfFiles: string[] = []
): string[] => {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
};

/**
 * バイト数を読みやすい形式に変換
 */
const formatBytes = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"] as const;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
};

/**
 * 画像を指定されたフォーマットに変換
 */
const convertImage = async (
  inputPath: string,
  outputPath: string,
  format: OutputFormat,
  quality: number,
  logger: ConvertImagesOptions["logger"]
): Promise<{ success: boolean; bytesSaved: number }> => {
  try {
    const image = sharp(inputPath);

    // フォーマットに応じて変換
    switch (format) {
      case "webp":
        await image.webp({ quality }).toFile(outputPath);
        break;
      case "jpeg":
        await image.jpeg({ quality }).toFile(outputPath);
        break;
      case "png":
        await image.png({ quality }).toFile(outputPath);
        break;
      case "avif":
        await image.avif({ quality }).toFile(outputPath);
        break;
      default:
        throw new Error(`Unsupported format: ${format}`);
    }

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const bytesSaved = inputStats.size - outputStats.size;
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(
      1
    );

    logger?.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    logger?.log(
      `  ${formatBytes(inputStats.size)} → ${formatBytes(outputStats.size)} (${reduction}% 削減)`
    );

    return { success: true, bytesSaved };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger?.error(
      `✗ ${path.basename(inputPath)} の変換に失敗: ${errorMessage}`
    );
    return { success: false, bytesSaved: 0 };
  }
};

/**
 * 画像変換のメイン処理
 */
export const convertImages = async (
  options: ConvertImagesOptions
): Promise<ConversionStats> => {
  const {
    sourceDir,
    outputDir,
    outputFormat = DEFAULT_OPTIONS.outputFormat,
    quality = DEFAULT_OPTIONS.quality,
    supportedFormats = DEFAULT_OPTIONS.supportedFormats,
    logger = DEFAULT_OPTIONS.logger,
  } = options;

  logger.log(`🖼️  画像変換スクリプトを開始します (出力形式: ${outputFormat})...\n`);

  // 元ディレクトリの存在確認
  if (!fs.existsSync(sourceDir)) {
    throw new Error(
      `エラー: ${sourceDir} が見つかりません。\n\nまず、${sourceDir} ディレクトリを作成して、変換したい画像を配置してください。`
    );
  }

  // 出力ディレクトリの作成
  ensureDir(outputDir);

  // 全ファイルを取得
  const allFiles = getAllFiles(sourceDir);
  const imageFiles = allFiles.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return supportedFormats.includes(ext);
  });

  if (imageFiles.length === 0) {
    logger.log("変換する画像が見つかりませんでした。");
    return {
      totalImages: 0,
      successCount: 0,
      failureCount: 0,
      totalBytesSaved: 0,
    };
  }

  logger.log(`${imageFiles.length} 個の画像を変換します...\n`);

  // 各画像を変換
  let successCount = 0;
  let failureCount = 0;
  let totalBytesSaved = 0;

  for (const inputPath of imageFiles) {
    // 相対パスを取得
    const relativePath = path.relative(sourceDir, inputPath);
    const parsedPath = path.parse(relativePath);

    // 出力パスを生成 (拡張子を指定されたフォーマットに変更)
    const outputRelativePath = path.join(
      parsedPath.dir,
      `${parsedPath.name}.${outputFormat}`
    );
    const outputPath = path.join(outputDir, outputRelativePath);

    // 出力ディレクトリの作成
    ensureDir(path.dirname(outputPath));

    // 変換
    const result = await convertImage(inputPath, outputPath, outputFormat, quality, logger);

    if (result.success) {
      successCount++;
      totalBytesSaved += result.bytesSaved;
    } else {
      failureCount++;
    }
  }

  logger.log("\n✨ すべての画像の変換が完了しました！");
  logger.log(
    `成功: ${successCount}件, 失敗: ${failureCount}件, 合計削減サイズ: ${formatBytes(totalBytesSaved)}`
  );

  return {
    totalImages: imageFiles.length,
    successCount,
    failureCount,
    totalBytesSaved,
  };
};
