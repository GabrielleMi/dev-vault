import { isEmpty, isEquivalent, isObject, isPrimitive } from '../src/index.js';

describe('isEmpty', () => {
  describe('when value is an array', () => {
    // @isTestExample Handling arrays
    it('should return true for an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    it('should return false for a non-empty array', () => {
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty(['a', 'b'])).toBe(false);
      expect(isEmpty([null])).toBe(false);
    });
  });

  describe('when value is an object', () => {
    // @isTestExample Handling empty objects
    it('should return true for an empty plain object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for a non-empty plain object', () => {
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty({ key: 'value' })).toBe(false);
    });

    it('should return false for an object with inherited properties (unless those are enumerable)', () => {
      const proto = { inherited: 'prop' };
      const obj = Object.create(proto);
      expect(isEmpty(obj)).toBe(true);

      obj.own = 'value';
      expect(isEmpty(obj)).toBe(false);
    });
  });

  describe('when value is a Map or Set', () => {
    // @isTestExample Handling Maps
    it('should return true for an empty Map', () => {
      expect(isEmpty(new Map())).toBe(true);
    });

    it('should return false for a non-empty Map', () => {
      const myMap = new Map();
      myMap.set('key', 'value');
      expect(isEmpty(myMap)).toBe(false);
    });

    it('should return true for an empty Set', () => {
      expect(isEmpty(new Set())).toBe(true);
    });

    it('should return false for a non-empty Set', () => {
      const mySet = new Set();
      mySet.add('item');
      expect(isEmpty(mySet)).toBe(false);
    });
  });

  describe('when value is nullish', () => {
    it('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
      expect(isEmpty()).toBe(true);
    });
  });

  describe('when value is a string', () => {
    it('should return true for an empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('should return false for a non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty(' ')).toBe(false);
    });
  });

  describe('when value is a number', () => {
    it('should return true for 0 (falsy number)', () => {
      expect(isEmpty(0)).toBe(true);
    });

    it('should return true for NaN (falsy number)', () => {
      expect(isEmpty(NaN)).toBe(true);
    });

    it('should return false for any other number (truthy number)', () => {
      expect(isEmpty(1)).toBe(false);
      expect(isEmpty(-10)).toBe(false);
      expect(isEmpty(0.001)).toBe(false);
    });
  });

  describe('when value is a boolean', () => {
    it('should return true for false (falsy boolean)', () => {
      expect(isEmpty(false)).toBe(true);
    });

    it('should return false for true (truthy boolean)', () => {
      expect(isEmpty(true)).toBe(false);
    });
  });

  describe('when value is a function', () => {
    it('should return false for a function (truthy)', () => {
      expect(isEmpty(() => {})).toBe(false);
      expect(isEmpty(function () {})).toBe(false);
    });
  });

  describe('when value is a BigInt', () => {
    it('should return true for 0n (falsy BigInt)', () => {
      expect(isEmpty(0n)).toBe(true);
    });

    it('should return false for a non-zero BigInt (truthy BigInt)', () => {
      expect(isEmpty(1n)).toBe(false);
      expect(isEmpty(-5n)).toBe(false);
    });
  });

  describe('when value is a Symbol', () => {
    it('should return false for a Symbol (truthy)', () => {
      expect(isEmpty(Symbol('test'))).toBe(false);
    });
  });
});

describe('isObject', () => {
  // @isTestExample Checking an object
  it('should return true when the value provided is an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 'a' })).toBe(true);
  });

  // @isTestExample Checking null
  it('should return false when the value provided is null', () => {
    expect(isObject(null)).toBe(false);
  });

  // @isTestExample Checking an array
  it('should return false when the value provided is an array', () => {
    expect(isObject([])).toBe(false);
  });

  // @isTestExample Checking other values
  it('should return false when the value provided is not an object', () => {
    expect(isObject('')).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(Symbol('test'))).toBe(false);
    expect(isObject(function () {})).toBe(false);
  });
});

describe('isPrimitive', () => {
  // @isTestExample Primitives
  it('should return true for null', () => {
    expect(isPrimitive(null)).toBe(true);
  });

  // @isTestExample Primitives
  it('should return true for undefined', () => {
    expect(isPrimitive(undefined)).toBe(true);
  });

  // @isTestExample Primitives
  it('should return true for a string', () => {
    expect(isPrimitive('hello')).toBe(true);
    expect(isPrimitive('')).toBe(true);
  });

  // @isTestExample Primitives
  it('should return true for a number', () => {
    expect(isPrimitive(123)).toBe(true);
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(NaN)).toBe(true);
  });

  // @isTestExample Primitives
  it('should return true for a boolean', () => {
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
  });

  // @isTestExample Primitives
  it('should return true for a symbol', () => {
    expect(isPrimitive(Symbol('test'))).toBe(true);
  });

  // @isTestExample Primitives
  it('should return true for a BigInt', () => {
    expect(isPrimitive(1n)).toBe(true);
    expect(isPrimitive(0n)).toBe(true);
  });

  // @isTestExample Non Primitives
  it('should return false for a plain object', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive({ a: 1 })).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for an array', () => {
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive([1, 2])).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for a function', () => {
    expect(isPrimitive(() => {})).toBe(false);
    expect(isPrimitive(function () {})).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for a Map', () => {
    expect(isPrimitive(new Map())).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for a Set', () => {
    expect(isPrimitive(new Set())).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for a Date object', () => {
    expect(isPrimitive(new Date())).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for a RegExp object', () => {
    expect(isPrimitive(/abc/)).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for a Class instance', () => {
    class MyClass {}
    expect(isPrimitive(new MyClass())).toBe(false);
  });

  // @isTestExample Non Primitives
  it('should return false for an Error object', () => {
    expect(isPrimitive(new Error())).toBe(false);
  });
});

describe('isEquivalent', () => {
  // @isTestExample Primitive values
  it('should return true for identical primitive values', () => {
    expect(isEquivalent(1, 1)).toBe(true);
    expect(isEquivalent('hello', 'hello')).toBe(true);
    expect(isEquivalent(true, true)).toBe(true);
    expect(isEquivalent(null, null)).toBe(true);
    expect(isEquivalent(undefined, undefined)).toBe(true);
    expect(isEquivalent(0, -0)).toBe(true);
    expect(isEquivalent(NaN, NaN)).toBe(true);
  });

  it('should return false for different primitive values', () => {
    expect(isEquivalent(1, 2)).toBe(false);
    expect(isEquivalent('hello', 'world')).toBe(false);
    expect(isEquivalent(true, false)).toBe(false);
    expect(isEquivalent(null, undefined)).toBe(false);
    expect(isEquivalent(1, '1')).toBe(false);
    expect(isEquivalent(0, null)).toBe(false);
  });

  // @isTestExample Objects
  it('should return true for equivalent simple objects', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'hello' };
    const obj3 = { b: 'hello', a: 1 };
    expect(isEquivalent(obj1, obj2)).toBe(true);
    expect(isEquivalent(obj3, obj2)).toBe(true);
  });

  it('should return false for objects with different values', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, b: 'world' };
    expect(isEquivalent(obj1, obj2)).toBe(false);
  });

  it('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1, c: 'hello' };
    expect(isEquivalent(obj1, obj2)).toBe(false);
  });

  it('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 'hello' };
    const obj2 = { a: 1 };
    expect(isEquivalent(obj1, obj2)).toBe(false);
  });

  it('should handle empty objects correctly', () => {
    expect(isEquivalent({}, {})).toBe(true);
    expect(isEquivalent({}, { a: 1 })).toBe(false);
  });

  // @isTestExample Arrays
  it('should return true for equivalent simple arrays', () => {
    expect(isEquivalent([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEquivalent(['a', 'b'], ['a', 'b'])).toBe(true);
  });

  it('should return false for arrays with different values', () => {
    expect(isEquivalent([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it('should return false for arrays with different lengths', () => {
    expect(isEquivalent([1, 2, 3], [1, 2])).toBe(false);
  });

  it('should handle empty arrays correctly', () => {
    expect(isEquivalent([], [])).toBe(true);
    expect(isEquivalent([], [1])).toBe(false);
  });

  it('should return true for equivalent nested objects', () => {
    const obj1 = { a: 1, b: { c: 'd', e: { f: 2 } } };
    const obj2 = { a: 1, b: { c: 'd', e: { f: 2 } } };
    expect(isEquivalent(obj1, obj2)).toBe(true);
  });

  it('should return false for different nested objects', () => {
    const obj1 = { a: 1, b: { c: 'd', e: { f: 2 } } };
    const obj2 = { a: 1, b: { c: 'd', e: { f: 3 } } };
    expect(isEquivalent(obj1, obj2)).toBe(false);
  });

  it('should return true for equivalent nested arrays', () => {
    expect(isEquivalent([1, [2, 3], 4], [1, [2, 3], 4])).toBe(true);
  });

  it('should return false for different nested arrays', () => {
    expect(isEquivalent([1, [2, 3], 4], [1, [2, 4], 4])).toBe(false);
  });

  it('should return true for equivalent objects containing arrays', () => {
    const obj1 = { data: [1, { id: 'abc' }, 3], name: 'test' };
    const obj2 = { data: [1, { id: 'abc' }, 3], name: 'test' };
    expect(isEquivalent(obj1, obj2)).toBe(true);
  });

  it('should return false for objects containing different arrays', () => {
    const obj1 = { data: [1, { id: 'abc' }, 3], name: 'test' };
    const obj2 = { data: [1, { id: 'xyz' }, 3], name: 'test' };
    expect(isEquivalent(obj1, obj2)).toBe(false);
  });

  it('should return true for equivalent arrays containing objects', () => {
    const arr1 = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
    const arr2 = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
    expect(isEquivalent(arr1, arr2)).toBe(true);
  });

  it('should return false for arrays containing different objects', () => {
    const arr1 = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
    const arr2 = [{ id: 1, value: 'a' }, { id: 2, value: 'c' }];
    expect(isEquivalent(arr1, arr2)).toBe(false);
  });

  it('should return false when comparing an object and an array', () => {
    expect(isEquivalent({}, [])).toBe(false);
  });

  it('should return false when comparing an object and null', () => {
    expect(isEquivalent({}, null)).toBe(false);
  });

  it('should return false when comparing an array and null', () => {
    expect(isEquivalent([], null)).toBe(false);
  });

  it('should return false when comparing an object and a primitive', () => {
    expect(isEquivalent({ a: 1 }, 1)).toBe(false);
  });

  it('should return false when comparing an array and a primitive', () => {
    expect(isEquivalent([1], 1)).toBe(false);
  });

  it('should handle more complex nested structures', () => {
    const data1 = {
      user: {
        id: 123,
        name: 'Alice',
        settings: { notifications: true, theme: 'dark' }
      },
      permissions: ['read', 'write'],
      status: 'active',
      tags: ['premium', 'verified']
    };

    const data2 = {
      user: {
        id: 123,
        name: 'Alice',
        settings: { theme: 'dark', notifications: true } // Different key order in settings
      },
      permissions: ['read', 'write'],
      status: 'active',
      tags: ['premium', 'verified']
    };

    const data3 = {
      user: {
        id: 123,
        name: 'Bob', // Different name
        settings: { notifications: true, theme: 'dark' }
      },
      permissions: ['read', 'write'],
      status: 'active',
      tags: ['premium', 'verified']
    };

    const data4 = {
      user: {
        id: 123,
        name: 'Alice',
        settings: { notifications: true, theme: 'light' }
      },
      permissions: ['read', 'write'],
      status: 'active',
      tags: ['premium', 'verified']
    };

    const data5 = {
      user: {
        id: 123,
        name: 'Alice',
        settings: { notifications: true, theme: 'dark' }
      },
      permissions: ['read'],
      status: 'active',
      tags: ['premium', 'verified']
    };

    expect(isEquivalent(data1, data2)).toBe(true);
    expect(isEquivalent(data1, data3)).toBe(false);
    expect(isEquivalent(data1, data4)).toBe(false);
    expect(isEquivalent(data1, data5)).toBe(false);
  });
});
