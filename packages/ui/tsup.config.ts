import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  minify: false, // UIコンポーネントなので、デバッグのためminifyは無効化
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  platform: 'browser',
  external: [
    'react',
    'react-dom',
    'styled-components',
    'keen-slider',
    'swiper',
    'gsap',
    'axios'
  ],
  esbuildOptions(options) {
    options.platform = 'browser';
  },
  outExtension({ format }) {
    return {
      js: '.js',
    };
  },
});
