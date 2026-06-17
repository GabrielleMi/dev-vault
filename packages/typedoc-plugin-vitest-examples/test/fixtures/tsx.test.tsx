import { expect, it } from 'vitest';
import { addNumbers } from './source';

// @isTestExample [addNumbers] Adding two numbers
it('should add two numbers correctly', () => {
  const result = addNumbers(1, 2);

  expect(result).toBe(3);
});
