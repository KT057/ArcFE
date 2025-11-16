# @packages/libs

Core library scripts for the application.

## Features

- **SVG to React Component Generation**: Convert SVG files to React components using SVGR
- **Date Formatting Utilities**: Format dates to various formats

## Usage

### SVG Component Generation

Generate React components from SVG files with customizable templates and configurations.

```typescript
import path from 'node:path';
import { generateSvgComponents, generateStorybookComponent } from '@packages/libs';

// Generate SVG components
await generateSvgComponents({
  inputDir: path.resolve('./assets/icons'),
  outputDir: path.resolve('./components/Icons'),
  template: path.resolve('./templates/icon-template.js'), // Optional
  indexTemplate: path.resolve('./templates/index-template.js'), // Optional
  replaceAttrValues: {
    '#000': 'currentColor',
    'black': 'currentColor'
  },
  svgrConfig: {
    // Additional SVGR configuration options
    // See: https://react-svgr.com/docs/options/
  }
});

// Generate Storybook component (optional)
generateStorybookComponent({
  iconsDir: path.resolve('./components/Icons'),
  outputPath: path.resolve('./components/Icons/StorybookComponent.tsx')
});
```

#### Custom Templates

You can provide custom templates for component and index file generation. The templates are located in `src/svgr/templates/`:

- **template.js**: Template for individual icon components
- **index-template.js**: Template for the index file that exports all icons

#### Example: Using in a Script

```typescript
// scripts/generate-icons.ts
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateSvgComponents } from '@packages/libs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const run = async () => {
  await generateSvgComponents({
    inputDir: path.resolve(__dirname, '../assets/icons'),
    outputDir: path.resolve(__dirname, '../src/components/Icons'),
    replaceAttrValues: {
      '#000': 'currentColor',
      'black': 'currentColor'
    }
  });

  console.log('✅ Icons generated successfully!');
};

run().catch(console.error);
```

Then add to your package.json:

```json
{
  "scripts": {
    "gen:icons": "ts-node scripts/generate-icons.ts"
  }
}
```

### Date Formatting

```typescript
import { formatDate } from '@packages/libs';

const date = new Date('2025-01-15');
const formatted = formatDate(date); // "2025-01-15"
```

## API Reference

### `generateSvgComponents(options)`

Generate React components from SVG files.

#### Options

- `inputDir` (string, required): Directory containing SVG files
- `outputDir` (string, required): Directory to output generated components
- `template` (string, optional): Path to custom component template
- `indexTemplate` (string, optional): Path to custom index template
- `replaceAttrValues` (Record<string, string>, optional): Replace attribute values in SVG (e.g., colors)
- `svgrConfig` (Record<string, unknown>, optional): Additional SVGR configuration

### `generateStorybookComponent(options)`

Generate a Storybook component to display all icons.

#### Options

- `iconsDir` (string, required): Directory containing generated icon components
- `outputPath` (string, required): Path for the generated Storybook component
- `componentNamePattern` (RegExp, optional): Pattern to match component files

### `formatDate(date)`

Format a date to YYYY-MM-DD format.

#### Parameters

- `date` (Date, required): Date object to format

#### Returns

- `string`: Formatted date string in YYYY-MM-DD format

## Development

### Build

```bash
pnpm build
```

### Type Check

```bash
pnpm tsc
```

### Lint

```bash
pnpm lint
```

### Lint and Fix

```bash
pnpm lint:fix
```
