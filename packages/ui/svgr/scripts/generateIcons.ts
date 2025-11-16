import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  generateStorybookComponent,
  generateSvgComponents
} from "@packages/libs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const run = async () => {
  const templatesDir = path.resolve(
    __dirname,
    "../../../libs/src/svgr/templates"
  );

  // Generate SVG components
  await generateSvgComponents({
    inputDir: path.resolve(__dirname, "../icons"),
    outputDir: path.resolve(__dirname, "../../components/Basic/Icons"),
    template: path.join(templatesDir, "template.js"),
    indexTemplate: path.join(templatesDir, "index-template.js"),
    replaceAttrValues: { "#000": "currentColor", black: "currentColor" },
    svgrConfig: {
      dimensions: false
    }
  });

  // Generate Storybook component
  generateStorybookComponent({
    iconsDir: path.resolve(__dirname, "../../components/Basic/Icons"),
    outputPath: path.resolve(
      __dirname,
      "../../components/Basic/Icons/StorybookComponent.tsx"
    )
  });

  console.log("✅ Icon components generated successfully!");
};

run().catch((error) => {
  console.error("❌ Error generating icon components:", error);
  process.exit(1);
});
