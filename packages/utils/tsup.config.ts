import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  tsconfig: "tsconfig.build.json",
  outExtension({ format }) {
    return {
      js: '.js',
    };
  },
});