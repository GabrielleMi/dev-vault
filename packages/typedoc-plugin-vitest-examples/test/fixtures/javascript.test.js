import { addNumbers } from './source';

// @isTestExample [addNumbers] JS Implementation
it('works in js', () => {
  const result = addNumbers(1, 1);
  expect(result).toBe(2);
});
