import fs from "node:fs";

export type GenerateStorybookComponentOptions = {
  iconsDir: string;
  outputPath: string;
  componentNamePattern?: RegExp;
};

export const generateStorybookComponent = (
  options: GenerateStorybookComponentOptions
): void => {
  const {
    iconsDir,
    outputPath,
    componentNamePattern = /^(.*)\.(tsx?)$/
  } = options;

  const files = fs.readdirSync(iconsDir);
  const outputFile: Record<string, string[]> = { index: [] };

  const indexPaths: string[] = [];
  for (const file of files) {
    if (
      file.indexOf("index") !== -1 ||
      file.indexOf("StorybookComponent") !== -1 ||
      file.indexOf(".stories") !== -1
    ) {
      continue;
    }

    const match = file.match(componentNamePattern);
    if (match) {
      const basename = match[1];
      const componentName = /^\d/.test(basename)
        ? `Svg${basename}Icon`
        : `${basename}Icon`;
      indexPaths.push(componentName);
    }
  }

  outputFile.index = indexPaths;

  const childrenImports = Object.keys(outputFile)
    .map((key) => {
      if (key === "index") return null;
      const items = outputFile[key];

      return `
      import { ${items?.join(", ")} } from './${key}';
    `;
    })
    .filter((item) => item);

  const childrenContents = Object.keys(outputFile)
    .map((key) => {
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
          ${items
            ?.map(
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
            )
            .join("")}
        </ul>
      </div>
    `;
    })
    .filter((item) => item);

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
          ${outputFile?.index
            .map(
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
            )
            .join("")}
        </ul>
      </div>
      ${childrenContents.map((item) => item).join("")}
    </div>
  );
  `;

  fs.writeFileSync(outputPath, storyContent);
};
