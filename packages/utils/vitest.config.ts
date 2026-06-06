import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: [ 'test/**/*.test.ts', 'test/**/*.test.js' ],
    exclude: [ 'node_modules', 'dist', '.idea', '.git', '.cache' ],
    coverage: {
      provider: 'v8',
      reporter: [ 'text', 'json', 'html' ],
      exclude: [
        'src/index.ts',
        '**/types.ts',
        '**/test/**',
        '**/dist/**',
        '**/*.d.ts'
      ]
    }
  }
});
