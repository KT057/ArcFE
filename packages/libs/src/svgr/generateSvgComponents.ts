import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { transform } from "@svgr/core";

const require = createRequire(import.meta.url);

export type GenerateSvgComponentsOptions = {
  inputDir: string;
  outputDir: string;
  template?: string;
  indexTemplate?: string;
  svgrConfig?: Record<string, unknown>;
  replaceAttrValues?: Record<string, string>;
};

export const generateSvgComponents = async (
  options: GenerateSvgComponentsOptions
): Promise<void> => {
  const {
    inputDir,
    outputDir,
    template: templatePath,
    indexTemplate: indexTemplatePath,
    svgrConfig = {},
    replaceAttrValues = {}
  } = options;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read all SVG files
  const files = fs
    .readdirSync(inputDir)
    .filter((file) => path.extname(file) === ".svg");

  // Transform each SVG file
  const transformedFiles: Array<{ path: string; basename: string }> = [];

  for (const file of files) {
    const svgPath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    const basename = path.basename(file, ".svg");
    const componentName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    // Build SVGR config
    const config: Record<string, unknown> = {
      typescript: true,
      plugins: ["@svgr/plugin-jsx"],
      jsxRuntime: "automatic",
      ...svgrConfig
    };

    // Add template if provided
    if (templatePath) {
      config.template = require(templatePath);
    }

    // Add replaceAttrValues if provided
    if (Object.keys(replaceAttrValues).length > 0) {
      config.replaceAttrValues = replaceAttrValues;
    }

    // Transform SVG to React component
    const jsCode = await transform(svgContent, config, { componentName });

    // Write component file
    const outputPath = path.join(outputDir, `${basename}.tsx`);
    fs.writeFileSync(outputPath, jsCode);

    transformedFiles.push({
      path: outputPath,
      basename
    });
  }

  // Generate index file
  let indexContent: string;

  if (indexTemplatePath) {
    const indexTemplateFunction = require(indexTemplatePath);
    const filePaths = transformedFiles.map((f) => ({
      path: f.path
    }));
    indexContent = indexTemplateFunction(filePaths);
  } else {
    // Default index template
    indexContent = transformedFiles
      .map((f) => {
        const exportName = /^\d/.test(f.basename)
          ? `Svg${f.basename}`
          : f.basename;
        return `export { ${exportName} } from './${f.basename}';`;
      })
      .join("\n");
  }

  fs.writeFileSync(path.join(outputDir, "index.ts"), indexContent);
};
