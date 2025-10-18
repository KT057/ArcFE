import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@packages/context': path.resolve(__dirname, './packages/context/src'),
      '@packages/hooks': path.resolve(__dirname, './packages/hooks/src'),
      '@packages/utils': path.resolve(__dirname, './packages/utils/src'),
      '@packages/tests': path.resolve(__dirname, './packages/tests/src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    root: fileURLToPath(new URL('.', import.meta.url)),
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
});