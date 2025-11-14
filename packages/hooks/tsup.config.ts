import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  external: ['axios', 'react', 'react-dom', '@packages/context', '@packages/utils'],
  tsconfig: "tsconfig.build.json",
  outExtension({ format }) {
    return {
      js: '.js',
    };
  },
});
