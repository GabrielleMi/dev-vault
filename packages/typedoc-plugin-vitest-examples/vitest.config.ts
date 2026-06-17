import { defineProject } from 'vitest/config';

export default defineProject({
  test: {
    exclude: ['test/fixtures/*.test.{js,ts}'],
    globals: true
  }
});
