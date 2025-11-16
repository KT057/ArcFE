// src/formatDate/index.ts
var formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// src/svgr/generateSvgComponents.ts
import { transform } from "@svgr/core";
import { createRequire } from "module";
import fs from "fs";
import path from "path";
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
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const files = fs.readdirSync(inputDir).filter((file) => path.extname(file) === ".svg");
  const transformedFiles = [];
  for (const file of files) {
    const svgPath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    const basename = path.basename(file, ".svg");
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
    const outputPath = path.join(outputDir, `${basename}.tsx`);
    fs.writeFileSync(outputPath, jsCode);
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
  fs.writeFileSync(path.join(outputDir, "index.ts"), indexContent);
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
export {
  formatDate,
  generateStorybookComponent,
  generateSvgComponents
};
