import { getLevenshteinDistance, search } from '../src/search';

describe('getLevenshteinDistance', () => {
  it('should return 0 when comparing identical strings', () => {
    expect(getLevenshteinDistance('Lorem', 'Lorem')).toBe(0);
  });

  it('should return a valid distance score for varying string lengths', () => {
    expect(getLevenshteinDistance('lore', 'Lorem ipsum')).toBeGreaterThan(0);
  });

  it('should handle empty strings', () => {
    expect(getLevenshteinDistance('', 'abc')).toBe(3);
    expect(getLevenshteinDistance('abc', '')).toBe(3);
    expect(getLevenshteinDistance('', '')).toBe(0);
  });

  it('should calculate correct distance for strings of different lengths', () => {
    expect(getLevenshteinDistance('kitten', 'sitting')).toBe(3);
  });

  it('should trigger complex matrix path when strings are long', () => {
    const longStr1 = 'Lorem ipsum dolor sit amet';
    const longStr2 = 'Lorem ipsum dolor sit';
    expect(getLevenshteinDistance(longStr1, longStr2)).toBe(5);
  });

  it('should correctly handle substitution logic in the final distance matrix loop', () => {
    expect(getLevenshteinDistance('abc', 'adc')).toBe(1);
  });
});

describe('search', () => {
  const data = [
    { id: 1, user: { name: 'Alice' }, status: 'active' },
    { id: 2, user: { name: 'Bob' }, status: 'inactive' },
    { id: 3, user: { name: 'Charlie' }, status: 'active' }
  ];

  it('should perform exact matching by default', () => {
    const result = search(data, { keys: ['user.name'] }).with('Alice');
    expect(result).toHaveLength(1);
    expect(result[0].user.name).toBe('Alice');
  });

  it('should perform fuzzy matching when threshold is provided', () => {
    const result = search(data, { keys: ['user.name'], threshold: 0.7 }).with('Alie');
    expect(result).toHaveLength(1);
    expect(result[0].user.name).toBe('Alice');
  });

  it('should handle SearchKeyConfig objects', () => {
    const result = search(data, {
      keys: [{ key: 'user.name', isCaseSensitive: true }]
    }).with('alice');

    expect(result).toHaveLength(0);
  });

  it('should return all items if search input is empty', () => {
    const result = search(data, { keys: ['user.name'] }).with();
    expect(result).toHaveLength(3);
  });

  it('should respect global case sensitivity', () => {
    const result = search(data, {
      keys: ['user.name'],
      isCaseSensitive: false
    }).with('ALICE');

    expect(result).toHaveLength(1);
  });

  it('should handle non-existent keys gracefully', () => {
    const result = search(data, { keys: ['non.existent'] }).with('foo');
    expect(result).toHaveLength(0);
  });

  it('should handle a mix of objects and primitive values gracefully', () => {
    const mixedData = [
      { id: 1, user: { name: 'Alice' } },
      'Bob',
      { id: 3, user: { name: 'Charlie' } },
      'Alice'
    ];

    // @ts-expect-error Mixing objects and strings
    const result = search(mixedData, { keys: ['user.name'] }).with('Alice');

    expect(result).toHaveLength(2);
    expect(result).toContainEqual({ id: 1, user: { name: 'Alice' } });
    expect(result).toContain('Alice');
  });

  it('should work with primitive array values', () => {
    const primitives = [ 'apple', 'banana', 'cherry' ];
    // @ts-expect-error For limited support
    expect(search(primitives).with('apple')).toEqual(['apple']);
  });

  it('should log a warning when keys are provided for a primitive array', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const primitives = ['apple'];

    // @ts-expect-error For limited support
    search(primitives, { keys: ['ignored'] }).with('apple');

    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it('should return empty array when input array is null or undefined', () => {
    expect(search(null).with('term')).toEqual([]);
  });

  it('should prioritize key-specific case sensitivity over global settings', () => {
    const data = [{ name: 'Alice' }];
    const result = search(data, {
      keys: [{ key: 'name', isCaseSensitive: false }],
      isCaseSensitive: true,
      threshold: 0.99
    }).with('alice');

    expect(result).toHaveLength(1);
  });

  it('should exclude items when targeted property value is null or undefined', () => {
    const data = [ { name: 'Alice' }, { name: null }, { name: undefined } ];
    const result = search(data, { keys: ['name'] }).with('Alice');
    expect(result).toHaveLength(1);
  });

  it('should normalize strings to handle diacritics and accents', () => {
    const data = [{ name: 'Élise' }];
    const result = search(data, { keys: ['name'] }).with('elise');
    expect(result).toHaveLength(1);
  });

  it('should apply fuzzy matching with case sensitivity', () => {
    const data = [{ name: 'Alice' }];
    const result = search(data, {
      keys: [{ key: 'name', isCaseSensitive: true }],
      threshold: 0.9
    }).with('alice');

    expect(result).toHaveLength(0);
  });
});
