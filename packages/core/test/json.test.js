import { safeParse, safeStringify } from '../src';

describe('stringify', () => {
  it('should stringify a string', () => {
    expect(safeStringify('test')).toBe('"test"');
  });

  it('should stringify a number', () => {
    expect(safeStringify(1)).toBe('1');
  });

  it('should stringify objects', () => {
    expect(safeStringify({ test: { test: 1 } })).toBeDefined();
  });

  it('should return undefined when sending undefined', () => {
    expect(safeStringify()).toBeUndefined();
  });

  it('should stringify bigints', () => {
    expect(() => JSON.stringify(BigInt(9007199254740991))).toThrow();
    expect(() => safeStringify(BigInt(9007199254740991))).not.toThrow();
    expect(safeStringify(BigInt(9007199254740991))).toContain('9007199254740991');
  });

  it('should stringify circular references', () => {
    const circularReference = {};
    circularReference.myself = circularReference;

    expect(() => JSON.stringify(circularReference)).toThrow();
    expect(() => safeStringify(circularReference)).not.toThrow();

    expect(safeStringify(circularReference)).toBeDefined();
  });

  it('should stringify nested circular references', () => {
    const complexCircularReference = { a: 1, b: { c: 2 } };
    complexCircularReference.b.d = complexCircularReference.b;

    expect(() => JSON.stringify(complexCircularReference)).toThrow();
    expect(() => safeStringify(complexCircularReference)).not.toThrow();
    expect(safeStringify(complexCircularReference)).toBeDefined();
  });

  it('should stringify circular references in an array', () => {
    const complexCircularReference = { a: [], b: {} };
    complexCircularReference.b.c = [complexCircularReference.b];

    expect(() => JSON.stringify(complexCircularReference)).toThrow();
    expect(() => safeStringify(complexCircularReference)).not.toThrow();
    expect(safeStringify(complexCircularReference)).toBeDefined();
  });

  it('should respect the native array replacer behavior (whitelist)', () => {
    const obj = { id: 1, name: 'Alice', role: 'admin' };

    const result = safeStringify(obj, [ 'id', 'name' ]);
    expect(result).toBe(JSON.stringify(obj, [ 'id', 'name' ]));
  });

  it('should format correctly when a function replacer alters values', () => {
    const obj = { width: 10, height: 20 };

    const doubleReplacer = (_key, value) => {
      return typeof value === 'number' ? value * 2 : value;
    };

    const result = safeStringify(obj, doubleReplacer);
    expect(result).toBe(JSON.stringify(obj, doubleReplacer));
  });

  it('should return undefined when JSON.stringify throws an error', () => {
    const malformedObject = {
      get faultyGetter() {
        throw new Error('Boom!');
      }
    };

    const result = safeStringify(malformedObject);

    expect(result).toBeUndefined();
  });
});

describe('parse', () => {
  const badJSON = '[1, 2, 3, 4,]';
  const bigInt = BigInt(9007199254740991);

  it('should parse stringified bigints', () => {
    const stringifiedBigInt = safeStringify(bigInt);
    expect(safeParse(stringifiedBigInt)).toBe(bigInt);
  });

  it('should parse stringified circular dependencies', () => {
    const circularReference = {};
    circularReference.myself = circularReference;
    const stringified = safeStringify(circularReference);

    expect(stringified).toBeDefined();
    expect(safeParse(stringified)).toEqual(circularReference);
  });

  it('should not throw', () => {
    expect(() => JSON.parse(badJSON)).toThrow();
    expect(() => safeParse(badJSON)).not.toThrow();
    expect(safeParse(badJSON)).toBeUndefined();
  });

  it('should return the fallback when json is invalid', () => {
    expect(() => JSON.parse(badJSON)).toThrow();
    expect(safeParse(badJSON, 'fallback')).toBe('fallback');
  });

  it('should correctly restore deep nested circular references and retain reference identity', () => {
    const user = { name: 'Bob' };
    const group = { owner: user, members: [user] };
    user.group = group;

    const stringified = safeStringify(group);
    expect(stringified).toBeDefined();

    const parsed = safeParse(stringified);

    expect(parsed.owner.name).toBe('Bob');
    expect(parsed.owner).toBe(parsed.members[0]);
    expect(parsed.owner.group).toBe(parsed);
  });

  it('should handle an object containing a list with a circular reference back to itself', () => {
    const list = [];
    const obj = { embedded: list };
    list.push(obj);

    const stringified = safeStringify(obj);
    expect(stringified).toBe('{"embedded":["$:~"]}');

    const parsed = safeParse(stringified);

    expect(parsed.embedded[0]).toBe(parsed);
  });

  it('should handle shared (but non-circular) references by maintaining identity', () => {
    const sharedNode = { value: 'shared' };
    const root = {
      first: sharedNode,
      second: sharedNode
    };

    const stringified = safeStringify(root);
    const parsed = safeParse(stringified);

    expect(parsed.first).toBe(parsed.second);
    expect(parsed.second.value).toBe('shared');
  });

  it('should respect the native reviver behavior', () => {
    const jsonStr = '{"value":10,"text":"hello"}';

    const customReviver = (_key, val) => {
      return typeof val === 'number' ? val * 10 : val;
    };

    const parsed = safeParse(jsonStr, undefined, customReviver);
    expect(parsed.value).toBe(100);
    expect(parsed.text).toBe('hello');
  });

  it('should correctly handle objects with native or custom toJSON methods', () => {
    const data = {
      date: new Date('2026-03-04T00:00:00.000Z'),
      custom: {
        toJSON() {
          return { wrapper: BigInt(42) };
        }
      }
    };

    const stringified = safeStringify(data);
    const parsed = safeParse(stringified);

    expect(parsed.date).toBe('2026-03-04T00:00:00.000Z');
    expect(parsed.custom.wrapper).toBe(BigInt(42));
  });
});
