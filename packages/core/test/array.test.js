import { isIncluded, splitInChunks } from '../src/array.js';
import { safeArray, toArray } from '../src/index.js';

describe('safeArray', () => {
  it('should return the array itself if the value is an array', () => {
    const arr = [ 'a', 'b', 'c' ];
    expect(safeArray(arr)).toBe(arr);
    expect(safeArray([ 1, 2 ])).toEqual([ 1, 2 ]);
  });

  it('should return an empty array if the value is null', () => {
    expect(safeArray(null)).toEqual([]);
  });

  it('should return an empty array if the value is undefined', () => {
    expect(safeArray(undefined)).toEqual([]);

    // @ts-expect-error test
    expect(safeArray()).toEqual([]);
  });

  it('should return an empty array if the value is a string', () => {
    expect(safeArray('hello')).toEqual([]);
    expect(safeArray('')).toEqual([]);
  });

  it('should return an empty array if the value is a number', () => {
    expect(safeArray(123)).toEqual([]);
    expect(safeArray(0)).toEqual([]);
    expect(safeArray(NaN)).toEqual([]);
  });

  it('should return an empty array if the value is a boolean', () => {
    expect(safeArray(true)).toEqual([]);
    expect(safeArray(false)).toEqual([]);
  });

  it('should return an empty array if the value is a non-array object', () => {
    expect(safeArray({})).toEqual([]);
    expect(safeArray({ a: 1 })).toEqual([]);
  });
});

describe('toArray', () => {
  it('should return the array itself if the value is an array', () => {
    const arr = [ 1, 2, 3 ];
    expect(toArray(arr)).toBe(arr);
    expect(toArray([ 'a', 'b' ])).toEqual([ 'a', 'b' ]);
    expect(toArray([ null, undefined, 0, false, '' ])).toEqual([ null, undefined, 0, false, '' ]);
  });

  it('should return an empty array if the value is null', () => {
    expect(toArray(null)).toEqual([]);
  });

  it('should return an empty array if the value is undefined', () => {
    expect(toArray(undefined)).toEqual([]);

    // @ts-expect-error test
    expect(toArray()).toEqual([]);
  });

  it('should return an empty array if the value is NaN', () => {
    expect(toArray(NaN)).toEqual([]);
  });

  it('should return an empty array if the value is an empty string ("")', () => {
    expect(toArray('')).toEqual([]);
  });

  it('should return an empty array if the value is boolean false', () => {
    expect(toArray(false)).toEqual([]);
  });

  it('should wrap a truthy string in an array', () => {
    expect(toArray('hello')).toEqual(['hello']);
    expect(toArray(' ')).toEqual([' ']);
  });

  it('should wrap a truthy number in an array', () => {
    expect(toArray(123)).toEqual([123]);
    expect(toArray(-5)).toEqual([-5]);
  });

  it('should wrap zero (0) in an array', () => {
    expect(toArray(0)).toEqual([0]);
  });

  it('should wrap a truthy boolean in an array', () => {
    expect(toArray(true)).toEqual([true]);
  });

  it('should wrap a non-array object in an array', () => {
    const obj = { key: 'value', num: 123 };
    expect(toArray(obj)).toEqual([obj]);
    expect(toArray({})).toEqual([{}]);
  });

  it('should wrap a function in an array', () => {
    const func = () => {};
    expect(toArray(func)).toEqual([func]);
  });
});

describe('splitInChunks', () => {
  // @isTestExample Splitting an array
  it('should split an array into even chunks', () => {
    const arr = [ 1, 2, 3, 4, 5, 6 ];
    expect(splitInChunks(arr, 2)).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]);
  });

  it('should split an array into uneven chunks (last chunk smaller)', () => {
    const arr = [ 1, 2, 3, 4, 5 ];
    const expected = [ [ 1, 2 ], [ 3, 4 ], [5] ];
    expect(splitInChunks(arr, 2)).toEqual(expected);
  });

  it('should handle a chunkSize equal to the array length', () => {
    const arr = [ 'a', 'b', 'c' ];
    expect(splitInChunks(arr, 3)).toEqual([[ 'a', 'b', 'c' ]]);
  });

  it('should handle a chunkSize larger than the array length', () => {
    const arr = [ 10, 20 ];
    expect(splitInChunks(arr, 5)).toEqual([[ 10, 20 ]]);
  });

  it('should return chunks where each contains only one element when chunkSize is 1', () => {
    const arr = [ 'x', 'y', 'z' ];
    expect(splitInChunks(arr, 1)).toEqual([ ['x'], ['y'], ['z'] ]);
  });

  it('should return an empty array when the input array is empty', () => {
    expect(splitInChunks([], 3)).toEqual([]);
  });

  it('should return an empty array when value is null (runtime behavior check)', () => {
    expect(splitInChunks(null, 3)).toEqual([]);
  });

  it('should return an empty array when value is undefined (runtime behavior check)', () => {
    expect(splitInChunks(undefined, 3)).toEqual([]);
  });

  // @isTestExample Invalid chunk value (0 or lower)
  it('should return the original array as a single chunk when chunkSize is 0', () => {
    const arr = [ 1, 2, 3 ];
    const chunkSize = 0;
    // @ts-expect-error test
    expect(splitInChunks(arr, chunkSize)).toEqual([[ 1, 2, 3 ]]);
  });

  it('should return the original array as a single chunk when chunkSize is negative', () => {
    const arr = [ 'a', 'b' ];
    const chunkSize = -5;
    const expected = [[ 'a', 'b' ]];
    // @ts-expect-error test
    expect(splitInChunks(arr, chunkSize)).toEqual(expected);
  });

  it('should work correctly with an array of strings', () => {
    const arr = [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ];
    const expected = [ [ 'apple', 'banana' ], [ 'cherry', 'date' ], ['elderberry'] ];
    expect(splitInChunks(arr, 2)).toEqual(expected);
  });

  it('should work correctly with an array of objects', () => {
    const obj1 = { id: 1, name: 'Alice' };
    const obj2 = { id: 2, name: 'Bob' };
    const obj3 = { id: 3, name: 'Charlie' };
    const obj4 = { id: 4, name: 'David' };
    const arr = [ obj1, obj2, obj3, obj4 ];
    const expected = [ [ obj1, obj2, obj3 ], [obj4] ];
    expect(splitInChunks(arr, 3)).toEqual(expected);
  });

  it('should work correctly with a mixed array', () => {
    const arr = [ 1, 'two', true, { four: 4 } ];
    const expected = [ [ 1, 'two' ], [ true, { four: 4 } ] ];
    expect(splitInChunks(arr, 2)).toEqual(expected);
  });
});

describe('isIncluded', () => {
  it('should return true for primitive values present in the array', () => {
    expect(isIncluded(1, [ 1, 2, 3 ])).toBe(true);
    expect(isIncluded('hello', [ 'hi', 'hello' ])).toBe(true);
    expect(isIncluded(true, [ false, true ])).toBe(true);
  });

  it('should return false for primitive values not present in the array', () => {
    expect(isIncluded(4, [ 1, 2, 3 ])).toBe(false);
    expect(isIncluded('world', [ 'hi', 'hello' ])).toBe(false);
  });

  it('should handle object equivalence (if isEquivalent supports it)', () => {
    const obj = { a: 1 };
    // Test avec la référence exacte
    expect(isIncluded(obj, [ { b: 2 }, obj ])).toBe(true);

    // Test avec une équivalence structurelle (dépend de votre fonction isEquivalent)
    expect(isIncluded({ a: 1 }, [ { a: 1 }, { b: 2 } ])).toBe(true);
  });

  it('should handle array equivalence', () => {
    expect(isIncluded([ 1, 2 ], [ [ 1, 2 ], [ 3, 4 ] ])).toBe(true);
  });

  it('should return false for empty arrays', () => {
    expect(isIncluded(1, [])).toBe(false);
  });

  it('should handle null and undefined', () => {
    expect(isIncluded(null, [ null, 1 ])).toBe(true);
    expect(isIncluded(undefined, [ 1, undefined ])).toBe(true);
  });
});
