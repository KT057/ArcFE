import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  external: ['axios', 'react', 'react-dom'],
  tsconfig: 'tsconfig.build.json',
  outExtension({ format }) {
    return {
      js: '.js',
    };
  },
});