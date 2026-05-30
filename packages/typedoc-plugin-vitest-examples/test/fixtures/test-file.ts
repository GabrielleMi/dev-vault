import { addNumbers, concatStrings } from './source';

describe('addNumbers', () => {
  // @isTestExample Usage of addNumbers
  it('should add two numbers correctly', () => {
    const result = addNumbers(2, 3);

    // eslint-disable-next-line
      console.log('calculating...');

    expect(result).toBe(5);
  });
});

// @isTestExample [concatStrings] Merging two strings
it('should add two numbers correctly', () => {
  const result = concatStrings('1', '2');

  // eslint-disable-next-line
    console.log('concatening...');

  expect(result).toBe('3');
});
