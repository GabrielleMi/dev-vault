import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['packages/*/vitest.config.ts'],
    include: [ 'test/**/*.test.ts', 'test/**/*.test.js' ],
    exclude: [ 'node_modules', 'dist', '.idea', '.git', '.cache' ],
    coverage: {
      provider: 'v8',
      reporter: [ 'text', 'json-summary', 'json', 'html' ],
      exclude: [
        '**/test/**',
        '**/test-utils.ts',
        '**/fixtures/**',
        '**/*.config.ts',
        'docs-src',
        '**/dist/**'
      ]
    }
  }
});
