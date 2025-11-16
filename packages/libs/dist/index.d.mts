/**
 * Format a date to YYYY-MM-DD format
 * @param date - Date to format
 * @returns Formatted date string
 */
declare const formatDate: (date: Date) => string;

/**
 * 画像変換オプション
 */
type ConvertImagesToWebPOptions = {
    /** 元画像のディレクトリパス */
    sourceDir: string;
    /** 出力先ディレクトリパス */
    outputDir: string;
    /** WebP品質 (0-100) */
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
declare const convertImagesToWebP: (options: ConvertImagesToWebPOptions) => Promise<ConversionStats>;

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

export { type ConversionStats, type ConvertImagesToWebPOptions, type GenerateStorybookComponentOptions, type GenerateSvgComponentsOptions, convertImagesToWebP, formatDate, generateStorybookComponent, generateSvgComponents };
