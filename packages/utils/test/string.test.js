import { isStrEqualCi, safeJoin } from '../src';
import { normalizeStr } from '../src/string';

describe('isStrEqualCi', () => {
  it('returns true for identical strings', () => {
    expect(isStrEqualCi('a', 'a')).toBe(true);
  });

  it('returns true for strings with capital diff', () => {
    expect(isStrEqualCi('a', 'A')).toBe(true);
  });

  it('returns false for different strings', () => {
    expect(isStrEqualCi('a', 'b')).toBe(false);
  });

  it('returns false for strings with accent diff', () => {
    expect(isStrEqualCi('è', 'e')).toBe(false);
  });
});

describe('safeJoin', () => {
  // @isTestExample Joining a simple array of strings
  it('should join an array of strings without a splitter if none is provided', () => {
    expect(safeJoin(['one', 'two', 'three'])).toBe('onetwothree');
  });

  // @isTestExample Joining with a splitter
  it('should join an array of strings with a given splitter', () => {
    expect(safeJoin(['one', 'two', 'three'], '-')).toBe('one-two-three');
  });

  // @isTestExample Joining falsy values
  it('should skip null values', () => {
    expect(['one', null, 'two'].join('-')).toBe('one--two');
    expect(safeJoin(['one', null, 'two'], '-')).toBe('one-two');
  });

  // @isTestExample Joining falsy values
  it('should skip undefined values', () => {
    expect(['one', null, 'two'].join('-')).toBe('one--two');
    expect(safeJoin(['one', undefined, 'two'], '-')).toBe('one-two');
  });

  // @isTestExample Joining falsy values
  it('should skip false boolean values', () => {
    expect(safeJoin(['one', false, 'two'], '-')).toBe('one-two');
  });

  it('should skip empty string values when they are not the only values', () => {
    expect(safeJoin(['one', '', 'two'], '-')).toBe('one-two');
  });

  it('should skip 0 (zero) values', () => {
    expect(safeJoin(['one', 0, 'two'], '-')).toBe('one-two');
  });

  it('should skip NaN values', () => {
    expect(safeJoin(['one', NaN, 'two'], '-')).toBe('one-two');
    expect(safeJoin([null, undefined, false, '', 0, NaN], '-')).toBe('');
  });

  it('should return an empty string for an empty input array', () => {
    expect(safeJoin([])).toBe('');
    expect(safeJoin([], '-')).toBe('');
  });

  it('should return the single string if the array contains only one string', () => {
    expect(safeJoin(['single'])).toBe('single');
    expect(safeJoin(['single'], '-')).toBe('single');
  });

  it('should return an empty string if the array contains only one falsy value', () => {
    expect(safeJoin([null])).toBe('');
    expect(safeJoin([false])).toBe('');
    expect(safeJoin([''])).toBe('');
    expect(safeJoin([0])).toBe('');
  });

  it('should handle mixed truthy and falsy values with various splitters', () => {
    expect(safeJoin(['a', null, 'b', undefined, 'c'], ' | ')).toBe('a | b | c');
    expect(safeJoin(['first', '', 'second', false, 'third'], '$$')).toBe('first$$second$$third');
  });
});

describe('normalizeStr', () => {
  it('should remove diacritics, convert to lowercase, and trim whitespace', () => {
    const input = '  Crème Brulée TEST  ';
    expect(normalizeStr(input)).toBe('creme brulee test');
  });

  it('should remove diacritics and convert to lowercase without trimming if no whitespace', () => {
    const input = 'ÀÇÊÎÔÛÄËÏÖÜŸçéîôûäëïöüÿ';
    expect(normalizeStr(input)).toBe('aceiouaeiouyceiouaeiouy');
  });

  it('should convert to lowercase and trim whitespace if no diacritics', () => {
    const input = '  HELLO WORLD  ';
    expect(normalizeStr(input)).toBe('hello world');
  });

  it('should remove diacritics and trim whitespace if no casing changes', () => {
    const input = '  Testé  '; // 'e' is already lowercase, but diacritic needs removal
    expect(normalizeStr(input)).toBe('teste');
  });

  it('should only remove diacritics if no other changes are needed', () => {
    const input = 'Testé';
    expect(normalizeStr(input)).toBe('teste');
  });

  it('should only convert to lowercase if no other changes are needed', () => {
    const input = 'HELLO';
    expect(normalizeStr(input)).toBe('hello');
  });

  it('should only trim whitespace if no other changes are needed', () => {
    const input = '  test  ';
    expect(normalizeStr(input)).toBe('test');
  });

  it('should return an empty string for an empty input string', () => {
    expect(normalizeStr('')).toBe('');
  });

  it('should return an empty string for a string containing only whitespace', () => {
    expect(normalizeStr('   \t\n ')).toBe('');
  });

  it('should return the same string if no normalization is required', () => {
    expect(normalizeStr('simple string')).toBe('simple string');
    expect(normalizeStr('no accents or caps')).toBe('no accents or caps');
  });

  it('should handle complex mixed inputs correctly', () => {
    const input = '  Fácíl Prueba con Ácèntos Y MAYÚSCULAS  ';
    expect(normalizeStr(input)).toBe('facil prueba con acentos y mayusculas');
  });

  it('should preserve non-diacritic unicode characters', () => {
    expect(normalizeStr('  你好 世界  ')).toBe('你好 世界'); // Chinese characters
    expect(normalizeStr('  €£$  ')).toBe('€£$'); // Currency symbols
  });
});
