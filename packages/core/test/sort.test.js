import { sort } from '../src';

describe('sort', () => {
  // @isTestExample Sorting by key
  it('sorts objects by a single key', () => {
    const test = [ { name: 'a' }, { name: 'z' }, { name: 'u' }, { name: 'b' } ];
    expect(sort(test).by('name')).toEqual([ { name: 'a' }, { name: 'b' }, { name: 'u' }, { name: 'z' } ]);
  });

  // @isTestExample Sorting with a nested key
  it('sorts objects by a nested key', () => {
    const test = [ { author: { name: 'b' } }, { author: { name: 'z' } }, { author: { name: 'a' } } ];
    expect(sort(test).by('author.name')).toEqual([
      { author: { name: 'a' } },
      { author: { name: 'b' } },
      { author: { name: 'z' } }
    ]);
  });

  // @isTestExample Using a fallback key
  it('uses fallback keys when primary values are equal', () => {
    const test = [ { a: 1, b: 'b' }, { a: 1, b: 'a' }, { a: 0, b: 'c' } ];
    expect(sort(test).by('a', 'b')).toEqual([
      { a: 0, b: 'c' },
      { a: 1, b: 'a' },
      { a: 1, b: 'b' }
    ]);
  });

  // @isTestExample Using a function as a key
  it('uses a comparator function when the key is a function', () => {
    const test = [ { a: 5 }, { a: 2 }, { a: 1 } ];
    expect(sort(test).by((a, b) => `${a.a}`.localeCompare(`${b.a}`))).toEqual([
      { a: 1 },
      { a: 2 },
      { a: 5 }
    ]);
  });

  // @isTestExample Sorting descending
  it('sorts descending with global and local flags', () => {
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
  it('applies descending order to one key without affecting the others', () => {
    const test = [ { score: 12, name: 'John' }, { score: 12, name: 'Alicia' }, { score: 10, name: 'Joe' } ];

    expect(sort(test).by({ key: 'score', isDesc: true }, 'name'))
      .toEqual([ { score: 12, name: 'Alicia' }, { score: 12, name: 'John' }, { score: 10, name: 'Joe' } ]);
  });

  it('keeps equal values in their original order', () => {
    const test = [ { a: 1 }, { a: 1 } ];
    expect(sort(test).by('a')).toEqual([ { a: 1 }, { a: 1 } ]);
  });

  it('prioritizes local isDesc over global isDesc', () => {
    const test = [ { a: 1 }, { a: 2 } ];
    const result = sort(test, { isDesc: undefined }).by({ key: 'a', isDesc: true });

    expect(result).toEqual([ { a: 2 }, { a: 1 } ]);
  });

  it('falls back to global isDesc when the key has none', () => {
    const test = [ { a: 1, b: '2' }, { a: 2, b: '1' } ];

    expect(sort(test, { isDesc: true }).by('a')).toEqual([ { a: 2, b: '1' }, { a: 1, b: '2' } ]);
    expect(sort(test, { isDesc: true }).by('b')).toEqual([ { a: 1, b: '2' }, { a: 2, b: '1' } ]);
  });

  it('prefers key-specific isDesc over the global flag', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' }
    ];

    const result = sort(data, { isDesc: true })
      .by({ key: 'name', isDesc: false }, 'id');

    expect(result[0].name).toBe('Alice');
    expect(result[1].name).toBe('Alice');
    expect(result[2].name).toBe('Bob');
  });

  it('sorts by multiple key types', () => {
    const data = [
      { id: 1, name: 'Alice', score: 10 },
      { id: 2, name: 'Bob', score: 5 },
      { id: 3, name: 'Alice', score: 15 }
    ];

    const result = sort(data).by('name', (a, b) => b.score - a.score);
    expect(result[0].name).toBe('Alice');
    expect(result[0].score).toBe(15);
    expect(result[1].name).toBe('Alice');
    expect(result[1].score).toBe(10);
    expect(result[2].name).toBe('Bob');
  });

  it('handles unexisting keys gracefully', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    const result = sort(data).by('nonexistentKey');
    expect(result).toEqual(data);
  });

  it('returns a shallow copy when no sort key is provided', () => {
    const data = [ { a: 2 }, { a: 1 } ];
    const result = sort(data).by();

    expect(result).toEqual(data);
    expect(result).not.toBe(data);
  });

  it('sorts with deep getters for 3+ nested levels', () => {
    const data3 = [
      { id: 1, profile: { stats: { score: 2 } } },
      { id: 2, profile: { stats: { score: 1 } } }
    ];

    const data4 = [
      { id: 1, a: { b: { c: { d: 3 } } } },
      { id: 2, a: { b: { c: { d: 1 } } } },
      { id: 3, a: { b: { c: { d: 2 } } } }
    ];

    expect(sort(data3).by('profile.stats.score').map((x) => x.id)).toEqual([ 2, 1 ]);
    expect(sort(data4).by('a.b.c.d').map((x) => x.id)).toEqual([ 2, 3, 1 ]);
  });

  it('handles deep numeric sorting in descending order with nullish values first', () => {
    const data = [
      { id: 1, metrics: { score: 5 } },
      { id: 2, metrics: { score: null } },
      { id: 3, metrics: { score: 10 } },
      { id: 4, metrics: { score: undefined } }
    ];

    expect(sort(data).by({ key: 'metrics.score', isDesc: true }).map((x) => x.id))
      .toEqual([ 2, 4, 3, 1 ]);
  });

  it('uses key-specific collator over global collator', () => {
    const data = [
      { value: '10' },
      { value: '2' }
    ];

    const globalLexical = new Intl.Collator('en', { numeric: false });
    const localNumeric = new Intl.Collator('en', { numeric: true });

    const result = sort(data, { collator: globalLexical })
      .by({ key: 'value', collator: localNumeric });

    expect(result).toEqual([ { value: '2' }, { value: '10' } ]);
  });

  it('uses multiple locales', () => {
    const data = [
      { value: '10' },
      { value: '2' }
    ];

    const result = sort(data, { locale: [ 'fr-CA', 'fr' ] }).by('value');

    expect(result).toEqual([ { value: '10' }, { value: '2' } ]);
  });

  it('handles mixed criteria with a function and nullish values', () => {
    const data = [
      { id: 1, name: undefined },
      { id: 2, name: 'Alice' },
      { id: 3, name: null },
      { id: 4, name: 'Bob' }
    ];

    const result = sort(data).by(() => 0, 'name');
    expect(result.map((x) => x.id)).toEqual([ 2, 4, 1, 3 ]);
  });

  it('handles nullish roots and intermediates for 2-level deep keys', () => {
    const data = [
      null,
      undefined,
      { id: 'n0', a: null },
      { id: 'u0', a: undefined },
      { a: { b: 2 } },
      { a: { b: 1 } }
    ];

    const result = sort(data).by('a.b');
    expect(result.map((x) => x?.a?.b)).toEqual([ 1, 2, undefined, undefined, undefined, undefined ]);
    expect(result.slice(2)).toEqual([ null, undefined, { id: 'n0', a: null }, { id: 'u0', a: undefined } ]);
  });

  it('handles nullish roots and intermediates for 3-level deep keys', () => {
    const data = [
      null,
      { id: 'n0', a: null },
      { id: 'n1', a: { b: null } },
      { a: { b: { c: 2 } } },
      { a: { b: { c: 1 } } }
    ];

    const result = sort(data).by('a.b.c');
    expect(result.map((x) => x?.a?.b?.c)).toEqual([ 1, 2, undefined, undefined, undefined ]);
    expect(result.slice(2)).toEqual([ null, { id: 'n0', a: null }, { id: 'n1', a: { b: null } } ]);
  });

  it('handles nullish intermediates for 4-level deep keys', () => {
    const data = [
      null,
      { id: 'n0', a: null },
      { id: 'n1', a: { b: null } },
      { id: 'n2', a: { b: { c: null } } },
      { a: { b: { c: { d: 2 } } } },
      { a: { b: { c: { d: 1 } } } }
    ];

    const result = sort(data).by('a.b.c.d');
    expect(result.map((x) => x?.a?.b?.c?.d)).toEqual([ 1, 2, undefined, undefined, undefined, undefined ]);
    expect(result.slice(2)).toEqual([
      null,
      { id: 'n0', a: null },
      { id: 'n1', a: { b: null } },
      { id: 'n2', a: { b: { c: null } } }
    ]);
  });

  it('uses deep non-string/non-number comparator in ascending and descending modes', () => {
    const data = [
      { id: 1, flags: { active: true } },
      { id: 2, flags: { active: false } },
      { id: 3, flags: { active: undefined } }
    ];

    expect(sort(data).by('flags.active').map((x) => x.id)).toEqual([ 2, 1, 3 ]);
    expect(sort(data).by({ key: 'flags.active', isDesc: true }).map((x) => x.id)).toEqual([ 1, 2, 3 ]);
  });

  it('sorts descending with deep string keys and keeps stable ties', () => {
    const data = [
      { id: 1, profile: { name: 'Bob' } },
      { id: 2, profile: { name: 'Alice' } },
      { id: 3, profile: { name: 'Bob' } }
    ];

    const result = sort(data).by({ key: 'profile.name', isDesc: true });
    expect(result.map((x) => x.id)).toEqual([ 1, 3, 2 ]);
  });

  it('uses global collator when key-specific collator is explicitly undefined', () => {
    const data = [
      { value: '10' },
      { value: '2' }
    ];

    const globalNumeric = new Intl.Collator('en', { numeric: true });
    const result = sort(data, { collator: globalNumeric })
      .by({ key: 'value', collator: undefined });

    expect(result).toEqual([ { value: '2' }, { value: '10' } ]);
  });
});
