import { addNumbers, concatStrings } from './source';

it('should be ignored by plugin', () => {
  expect(1).toBe(1);
});

describe('addNumbers', () => {
  // @isTestExample Usage of addNumbers
  it('should add two numbers correctly', () => {
    const result = addNumbers(2, 3);

    // eslint-disable-next-line
      console.log('calculating...');

    expect(result).toBe(5);
  });

  // @isTestExample Usage of addNumbers
  it('should handle negative numbers', () => {
    const result = addNumbers(-1, -2);
    expect(result).toBe(-3);
  });
});

// @isTestExample [concatStrings] Merging two strings
it('should add two numbers correctly', () => {
  const result = concatStrings('1', '2');

  // eslint-disable-next-line
    console.log('concatening...');

  expect(result).toBe('12');
});

const emptyCallback = undefined;
// @isTestExample [addNumbers] Invalid Callback Example
it('should fail gracefully', emptyCallback);
