import fs from "node:fs";
import path from "node:path";

export const generateIconComponentForStorybook = () => {
  const startPath = path.resolve("components/Basic/Icons");

  const files = fs.readdirSync(startPath);
  const outputFile: { [key: string]: string[] } = { index: [] };

  const indexPaths: string[] = [];
  for (const file of files) {
    if (
      file.indexOf("index") !== -1 ||
      file.indexOf("StorybookComponent") !== -1 ||
      file.indexOf("Icons.stories") !== -1
    ) {
      continue;
    }

    indexPaths.push(`Svg${file.replace(/\.tsx$/, "")}Icon`);
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

  fs.writeFileSync(
    "components/Basic/Icons/StorybookComponent.tsx",
    storyContent
  );
};

generateIconComponentForStorybook();
