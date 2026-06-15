import { sort } from '../src';

describe('sort', () => {
  // @isTestExample Sorting by key
  it('should sort objects by key', () => {
    const test = [ { name: 'a' }, { name: 'z' }, { name: 'u' }, { name: 'b' } ];
    expect(sort(test).by('name')).toEqual([ { name: 'a' }, { name: 'b' }, { name: 'u' }, { name: 'z' } ]);
  });

  // @isTestExample Sorting with a nested key
  it('should sort objects by nested key', () => {
    const test = [ { author: { name: 'b' } }, { author: { name: 'z' } }, { author: { name: 'a' } } ];
    expect(sort(test).by('author.name')).toEqual([
      { author: { name: 'a' } },
      { author: { name: 'b' } },
      { author: { name: 'z' } }
    ]);
  });

  // @isTestExample Using a fallback key
  it('should use fallback key when values are the same', () => {
    const test = [ { a: 1, b: 'b' }, { a: 1, b: 'a' }, { a: 0, b: 'c' } ];
    expect(sort(test).by('a', 'b')).toEqual([
      { a: 0, b: 'c' },
      { a: 1, b: 'a' },
      { a: 1, b: 'b' }
    ]);
  });

  // @isTestExample Using a function as a key
  it('should use the function when the key is a function', () => {
    const test = [ { a: 5 }, { a: 2 }, { a: 1 } ];
    expect(sort(test).by((a, b) => `${a.a}`.localeCompare(`${b.a}`))).toEqual([
      { a: 1 },
      { a: 2 },
      { a: 5 }
    ]);
  });

  // @isTestExample Sorting descending
  it('should sort descending', () => {
    const test = [ { a: 5 }, { a: 2 }, { a: 1 } ];
    expect(sort(test, { isDesc: true }).by('a')).toEqual([
      { a: 5 },
      { a: 2 },
      { a: 1 }
    ]);

    expect(sort(test, { isDesc: true }).by({ key: 'a' })).toEqual([
      { a: 5 },
      { a: 2 },
      { a: 1 }
    ]);
  });

  // @isTestExample Sorting descending for a specific key
  it('should sort descending for only a specific key', () => {
    const test = [ { score: 12, name: 'John' }, { score: 12, name: 'Alicia' }, { score: 10, name: 'Joe' } ];

    expect(sort(test).by({ key: 'score', isDesc: true }, 'name'))
      .toEqual([ { score: 12, name: 'Alicia' }, { score: 12, name: 'John' }, { score: 10, name: 'Joe' } ]);
  });

  it('should return 0 when values are identical (stability/equality check)', () => {
    const test = [ { a: 1 }, { a: 1 } ];
    expect(sort(test).by('a')).toEqual([ { a: 1 }, { a: 1 } ]);
  });

  it('should prioritize local isDesc over global isDesc', () => {
    const test = [ { a: 1 }, { a: 2 } ];
    const result = sort(test, { isDesc: undefined }).by({ key: 'a', isDesc: true });

    expect(result).toEqual([ { a: 2 }, { a: 1 } ]);
  });

  it('should fallback to global isDesc when local isDesc is not defined', () => {
    const test = [ { a: 1 }, { a: 2 } ];

    const result = sort(test, { isDesc: true }).by('a');

    expect(result).toEqual([ { a: 2 }, { a: 1 } ]);
  });

  it('should prioritize key.isDesc when defined', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];

    const result = sort(data, { isDesc: true })
      .by({ key: 'name', isDesc: false });

    expect(result[0].name).toBe('Alice');
    expect(result[1].name).toBe('Bob');
  });
});
