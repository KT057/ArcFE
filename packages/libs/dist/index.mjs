// src/formatDate/index.ts
var formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// src/imageConverter/convertImages.ts
import fs from "fs";
import path from "path";
import sharp from "sharp";
var DEFAULT_OPTIONS = {
  outputFormat: "webp",
  quality: 80,
  supportedFormats: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
  logger: {
    log: console.log,
    error: console.error
  }
};
var ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
var getAllFiles = (dirPath, arrayOfFiles = []) => {
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
var formatBytes = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round(bytes / Math.pow(k, i) * 100) / 100} ${sizes[i]}`;
};
var convertImage = async (inputPath, outputPath, format, quality, logger) => {
  try {
    const image = sharp(inputPath);
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
    logger?.log(`\u2713 ${path.basename(inputPath)} \u2192 ${path.basename(outputPath)}`);
    logger?.log(
      `  ${formatBytes(inputStats.size)} \u2192 ${formatBytes(outputStats.size)} (${reduction}% \u524A\u6E1B)`
    );
    return { success: true, bytesSaved };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger?.error(
      `\u2717 ${path.basename(inputPath)} \u306E\u5909\u63DB\u306B\u5931\u6557: ${errorMessage}`
    );
    return { success: false, bytesSaved: 0 };
  }
};
var convertImages = async (options) => {
  const {
    sourceDir,
    outputDir,
    outputFormat = DEFAULT_OPTIONS.outputFormat,
    quality = DEFAULT_OPTIONS.quality,
    supportedFormats = DEFAULT_OPTIONS.supportedFormats,
    logger = DEFAULT_OPTIONS.logger
  } = options;
  logger.log(`\u{1F5BC}\uFE0F  \u753B\u50CF\u5909\u63DB\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u958B\u59CB\u3057\u307E\u3059 (\u51FA\u529B\u5F62\u5F0F: ${outputFormat})...
`);
  if (!fs.existsSync(sourceDir)) {
    throw new Error(
      `\u30A8\u30E9\u30FC: ${sourceDir} \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002

\u307E\u305A\u3001${sourceDir} \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u4F5C\u6210\u3057\u3066\u3001\u5909\u63DB\u3057\u305F\u3044\u753B\u50CF\u3092\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`
    );
  }
  ensureDir(outputDir);
  const allFiles = getAllFiles(sourceDir);
  const imageFiles = allFiles.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return supportedFormats.includes(ext);
  });
  if (imageFiles.length === 0) {
    logger.log("\u5909\u63DB\u3059\u308B\u753B\u50CF\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
    return {
      totalImages: 0,
      successCount: 0,
      failureCount: 0,
      totalBytesSaved: 0
    };
  }
  logger.log(`${imageFiles.length} \u500B\u306E\u753B\u50CF\u3092\u5909\u63DB\u3057\u307E\u3059...
`);
  let successCount = 0;
  let failureCount = 0;
  let totalBytesSaved = 0;
  for (const inputPath of imageFiles) {
    const relativePath = path.relative(sourceDir, inputPath);
    const parsedPath = path.parse(relativePath);
    const outputRelativePath = path.join(
      parsedPath.dir,
      `${parsedPath.name}.${outputFormat}`
    );
    const outputPath = path.join(outputDir, outputRelativePath);
    ensureDir(path.dirname(outputPath));
    const result = await convertImage(inputPath, outputPath, outputFormat, quality, logger);
    if (result.success) {
      successCount++;
      totalBytesSaved += result.bytesSaved;
    } else {
      failureCount++;
    }
  }
  logger.log("\n\u2728 \u3059\u3079\u3066\u306E\u753B\u50CF\u306E\u5909\u63DB\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\uFF01");
  logger.log(
    `\u6210\u529F: ${successCount}\u4EF6, \u5931\u6557: ${failureCount}\u4EF6, \u5408\u8A08\u524A\u6E1B\u30B5\u30A4\u30BA: ${formatBytes(totalBytesSaved)}`
  );
  return {
    totalImages: imageFiles.length,
    successCount,
    failureCount,
    totalBytesSaved
  };
};

// src/svgr/generateStorybookComponent.ts
import fs2 from "fs";
var generateStorybookComponent = (options) => {
  const {
    iconsDir,
    outputPath,
    componentNamePattern = /^(.*)\.(tsx?)$/
  } = options;
  const files = fs2.readdirSync(iconsDir);
  const outputFile = { index: [] };
  const indexPaths = [];
  for (const file of files) {
    if (file.indexOf("index") !== -1 || file.indexOf("StorybookComponent") !== -1 || file.indexOf(".stories") !== -1) {
      continue;
    }
    const match = file.match(componentNamePattern);
    if (match) {
      const basename = match[1];
      const componentName = /^\d/.test(basename) ? `Svg${basename}Icon` : `${basename}Icon`;
      indexPaths.push(componentName);
    }
  }
  outputFile.index = indexPaths;
  const childrenImports = Object.keys(outputFile).map((key) => {
    if (key === "index") return null;
    const items = outputFile[key];
    return `
      import { ${items?.join(", ")} } from './${key}';
    `;
  }).filter((item) => item);
  const childrenContents = Object.keys(outputFile).map((key) => {
    if (key === "index") return null;
    const items = outputFile[key];
    return `
      <div
        style={{
          marginBottom: '60px',
        }}
      >
        <h2>${key}</h2>
        <ul
          style={{
            margin: '-10px',
            width: 'calc(100% + 20px)',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: 0,
          }}
        >
          ${items?.map(
      (name) => `
            <li
              style={{
                padding: '10px',
                textAlign: "center",
              }}
            >
              <p
                style={{
                  marginBottom: '10px',
                }}
              >
                ${name}
              </p>
              <${name} fill="#000" />
            </li>`
    ).join("")}
        </ul>
      </div>
    `;
  }).filter((item) => item);
  const storyContent = `
  import React from 'react';
  import { ${indexPaths.join(", ")} } from '.';
  ${childrenImports.join("")}

  export const StorybookComponent = () => (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          marginBottom: '60px',
        }}
      >
        <ul
          style={{
            margin: '-10px',
            width: 'calc(100% + 20px)',
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: 0,
          }}
        >
          ${outputFile?.index.map(
    (name) => `
            <li
              style={{
                padding: '10px',
                textAlign: "center",
              }}
            >
               <p
                style={{
                  marginBottom: '10px',
                }}
              >
                ${name}
              </p>
              <${name} />
            </li>`
  ).join("")}
        </ul>
      </div>
      ${childrenContents.map((item) => item).join("")}
    </div>
  );
  `;
  fs2.writeFileSync(outputPath, storyContent);
};

// src/svgr/generateSvgComponents.ts
import fs3 from "fs";
import { createRequire } from "module";
import path2 from "path";
import { transform } from "@svgr/core";
var require2 = createRequire(import.meta.url);
var generateSvgComponents = async (options) => {
  const {
    inputDir,
    outputDir,
    template: templatePath,
    indexTemplate: indexTemplatePath,
    svgrConfig = {},
    replaceAttrValues = {}
  } = options;
  if (!fs3.existsSync(outputDir)) {
    fs3.mkdirSync(outputDir, { recursive: true });
  }
  const files = fs3.readdirSync(inputDir).filter((file) => path2.extname(file) === ".svg");
  const transformedFiles = [];
  for (const file of files) {
    const svgPath = path2.join(inputDir, file);
    const svgContent = fs3.readFileSync(svgPath, "utf-8");
    const basename = path2.basename(file, ".svg");
    const componentName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    const config = {
      typescript: true,
      plugins: ["@svgr/plugin-jsx"],
      jsxRuntime: "automatic",
      ...svgrConfig
    };
    if (templatePath) {
      config.template = require2(templatePath);
    }
    if (Object.keys(replaceAttrValues).length > 0) {
      config.replaceAttrValues = replaceAttrValues;
    }
    const jsCode = await transform(svgContent, config, { componentName });
    const outputPath = path2.join(outputDir, `${basename}.tsx`);
    fs3.writeFileSync(outputPath, jsCode);
    transformedFiles.push({
      path: outputPath,
      basename
    });
  }
  let indexContent;
  if (indexTemplatePath) {
    const indexTemplateFunction = require2(indexTemplatePath);
    const filePaths = transformedFiles.map((f) => ({
      path: f.path
    }));
    indexContent = indexTemplateFunction(filePaths);
  } else {
    indexContent = transformedFiles.map((f) => {
      const exportName = /^\d/.test(f.basename) ? `Svg${f.basename}` : f.basename;
      return `export { ${exportName} } from './${f.basename}';`;
    }).join("\n");
  }
  fs3.writeFileSync(path2.join(outputDir, "index.ts"), indexContent);
};
export {
  convertImages,
  formatDate,
  generateStorybookComponent,
  generateSvgComponents
};
