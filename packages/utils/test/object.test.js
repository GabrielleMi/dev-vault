import { getDeepEntry } from '../src';

describe('getDeepEntry', () => {
  const testObject = {
    a: 1,
    b: {
      c: 'hello',
      d: {
        e: true,
        f: null,
        g: undefined,
        h: 123n,
        i: Symbol('test')
      },
      arr: [
        'apple',
        { name: 'banana', price: 1.50 },
        ['nested', 'array']
      ],
      nestedArr: [
        { id: 10, data: 'itemA' },
        { id: 20, data: 'itemB' }
      ],
      deepArr: {
        items: [
          { value: 100 },
          { value: 200 }
        ]
      }
    },
    x: 'outer'
  };

  it('should retrieve a top-level property', () => {
    expect(getDeepEntry(testObject, 'a')).toBe(1);
  });

  it('should retrieve a nested property', () => {
    expect(getDeepEntry(testObject, 'b.c')).toBe('hello');
  });

  it('should retrieve a deeply nested property', () => {
    expect(getDeepEntry(testObject, 'b.d.e')).toBe(true);
  });

  it('should retrieve a BigInt property', () => {
    expect(getDeepEntry(testObject, 'b.d.h')).toBe(123n);
  });

  it('should retrieve a Symbol property', () => {
    expect(getDeepEntry(testObject, 'b.d.i')).toBe(testObject.b.d.i);
  });

  it('should retrieve outer-level property after deep path', () => {
    expect(getDeepEntry(testObject, 'x')).toBe('outer');
  });

  // @isTestExample Using array syntax
  it('should retrieve an item from a top-level array using array syntax', () => {
    const objWithArray = { data: ['one', 'two'] };
    expect(getDeepEntry(objWithArray, 'data[0]')).toBe('one');
    expect(getDeepEntry(objWithArray, 'data[1]')).toBe('two');
  });

  it('should retrieve an item from a nested array using array syntax', () => {
    expect(getDeepEntry(testObject, 'b.arr[0]')).toBe('apple');
  });

  it('should retrieve an object within a nested array', () => {
    expect(getDeepEntry(testObject, 'b.arr[1]')).toEqual({ name: 'banana', price: 1.50 });
  });

  it('should retrieve a property of an object within a nested array', () => {
    expect(getDeepEntry(testObject, 'b.arr[1].name')).toBe('banana');
  });

  it('should retrieve an item from a deeply nested array', () => {
    expect(getDeepEntry(testObject, 'b.arr[2][0]')).toBe('nested');
  });

  it('should retrieve an item from an array of objects using array syntax', () => {
    expect(getDeepEntry(testObject, 'b.nestedArr[0].data')).toBe('itemA');
    expect(getDeepEntry(testObject, 'b.nestedArr[1].id')).toBe(20);
  });

  it('should retrieve item from array nested inside an object property', () => {
    expect(getDeepEntry(testObject, 'b.deepArr.items[1].value')).toBe(200);
  });

  it('should return undefined for a non-existent top-level key', () => {
    expect(getDeepEntry(testObject, 'z')).toBeUndefined();
  });

  it('should return undefined for a non-existent nested key', () => {
    expect(getDeepEntry(testObject, 'b.nonExistent.key')).toBeUndefined();
  });

  it('should return undefined if a part of the path is not an object', () => {
    expect(getDeepEntry(testObject, 'a.someProp')).toBeUndefined();
  });

  it('should return undefined for an out-of-bounds array index', () => {
    expect(getDeepEntry(testObject, 'b.arr[99]')).toBeUndefined();
  });

  it('should return undefined if property before array is not an array', () => {
    expect(getDeepEntry(testObject, 'b.c[0]')).toBeUndefined();
  });

  it('should return undefined if the initial object is null', () => {
    expect(getDeepEntry(null, 'a')).toBeUndefined();
  });

  it('should return undefined if the initial object is undefined', () => {
    expect(getDeepEntry(undefined, 'a')).toBeUndefined();
  });

  it('should return undefined if the initial object is a primitive', () => {
    // @ts-expect-error testing
    expect(getDeepEntry(123, 'a')).toBeUndefined();
    // @ts-expect-error testing
    expect(getDeepEntry('string', 'a')).toBeUndefined();
    // @ts-expect-error testing
    expect(getDeepEntry(true, 'a')).toBeUndefined();
  });

  it('should return null if the target value is null', () => {
    expect(getDeepEntry(testObject, 'b.d.f')).toBeNull();
  });

  it('should return undefined if the target value is undefined', () => {
    expect(getDeepEntry(testObject, 'b.d.g')).toBeUndefined();
  });

  it('should handle an empty key string (return the object itself)', () => {
    expect(getDeepEntry(testObject, '')).toBe(testObject);
  });

  it('should handle a single-level key without dots', () => {
    expect(getDeepEntry(testObject, 'x')).toBe('outer');
  });

  it('should handle a key with only an array index (e.g., for root array)', () => {
    const rootArray = [{ id: 1 }];
    expect(getDeepEntry(rootArray, '[0].id')).toBe(1);
  });

  it('should return undefined if array access is attempted on a non-array object', () => {
    expect(getDeepEntry(testObject, 'b.d[0]')).toBeUndefined();
  });
});
