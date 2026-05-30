import { sort } from '../src';

describe('sort', () => {
  // @isTestExample Sorting by key
  it('should sort objects by key', () => {
    const test = [{ name: 'a' }, { name: 'z' }, { name: 'u' }, { name: 'b' }];
    expect(sort(test).by('name')).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'u' }, { name: 'z' }]);
  });

  // @isTestExample Sorting with a nested key
  it('should sort objects by nested key', () => {
    const test = [{ author: { name: 'b' } }, { author: { name: 'z' } }, { author: { name: 'a' } }];
    expect(sort(test).by('author.name')).toEqual([
      { author: { name: 'a' } },
      { author: { name: 'b' } },
      { author: { name: 'z' } }
    ]);
  });

  // @isTestExample Using a fallback key
  it('should use fallback key when values are the same', () => {
    const test = [{ a: 1, b: 'b' }, { a: 1, b: 'a' }, { a: 0, b: 'c' }];
    expect(sort(test).by('a', 'b')).toEqual([
      { a: 0, b: 'c' },
      { a: 1, b: 'a' },
      { a: 1, b: 'b' }
    ]);
  });

  // @isTestExample Using a function as a key
  it('should use the function when the key is a function', () => {
    const test = [{ a: 5 }, { a: 2 }, { a: 1 }];
    expect(sort(test).by((a, b) => `${a.a}`.localeCompare(`${b.a}`))).toEqual([
      { a: 1 },
      { a: 2 },
      { a: 5 }
    ]);
  });

  // @isTestExample Sorting descending
  it('should sort descending', () => {
    const test = [{ a: 5 }, { a: 2 }, { a: 1 }];
    expect(sort(test, { isDesc: true }).by('a')).toEqual([
      { a: 5 },
      { a: 2 },
      { a: 1 }
    ]);
  });

  // @isTestExample Sorting descending for a specific key
  it('should sort descending for only a specific key', () => {
    const test = [{ score: 12, name: 'John' }, { score: 12, name: 'Alicia' }, { score: 10, name: 'Joe' }];

    expect(sort(test).by({ key: 'score', isDesc: true }, 'name'))
      .toEqual([{ score: 12, name: 'Alicia' }, { score: 12, name: 'John' }, { score: 10, name: 'Joe' }]);
  });
});
