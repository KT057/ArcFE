/**
 * Format a date to YYYY-MM-DD format
 * @param date - Date to format
 * @returns Formatted date string
 */
declare const formatDate: (date: Date) => string;

/**
 * サポートされている出力フォーマット
 */
type OutputFormat = "webp" | "jpeg" | "png" | "avif";
/**
 * 画像変換オプション
 */
type ConvertImagesOptions = {
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
type ConversionStats = {
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
 * 画像変換のメイン処理
 */
declare const convertImages: (options: ConvertImagesOptions) => Promise<ConversionStats>;

type GenerateStorybookComponentOptions = {
    iconsDir: string;
    outputPath: string;
    componentNamePattern?: RegExp;
};
declare const generateStorybookComponent: (options: GenerateStorybookComponentOptions) => void;

type GenerateSvgComponentsOptions = {
    inputDir: string;
    outputDir: string;
    template?: string;
    indexTemplate?: string;
    svgrConfig?: Record<string, unknown>;
    replaceAttrValues?: Record<string, string>;
};
declare const generateSvgComponents: (options: GenerateSvgComponentsOptions) => Promise<void>;

export { type ConversionStats, type ConvertImagesOptions, type GenerateStorybookComponentOptions, type GenerateSvgComponentsOptions, type OutputFormat, convertImages, formatDate, generateStorybookComponent, generateSvgComponents };
