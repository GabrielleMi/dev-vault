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
});
