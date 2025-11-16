/**
 * Format a date to YYYY-MM-DD format
 * @param date - Date to format
 * @returns Formatted date string
 */
declare const formatDate: (date: Date) => string;

type GenerateSvgComponentsOptions = {
    inputDir: string;
    outputDir: string;
    template?: string;
    indexTemplate?: string;
    svgrConfig?: Record<string, unknown>;
    replaceAttrValues?: Record<string, string>;
};
declare const generateSvgComponents: (options: GenerateSvgComponentsOptions) => Promise<void>;

type GenerateStorybookComponentOptions = {
    iconsDir: string;
    outputPath: string;
    componentNamePattern?: RegExp;
};
declare const generateStorybookComponent: (options: GenerateStorybookComponentOptions) => void;

export { type GenerateStorybookComponentOptions, type GenerateSvgComponentsOptions, formatDate, generateStorybookComponent, generateSvgComponents };
