import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: { resolve: true },
  minify: false, // UIコンポーネントなので、デバッグのためminifyは無効化
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'styled-components'],
  outExtension({ format }) {
    return {
      js: '.js',
      dts: '.d.ts',
    };
  },
});
