import { BIGINT, BOOLEAN, FUNCTION, NUMBER, OBJECT, STRING } from './constants.js';

export type Primitive = string | number | boolean | bigint | symbol | null | undefined;
export type Falsy = null | undefined | '' | false | 0;

/**
 * Checks if the provided value is an object.
 *
 * @examplesFromTests ../test/is.test.js
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === OBJECT && value !== null && !Array.isArray(value);
};

/**
 * Checks if a value is null of undefined
 */
export const isNil = (value: unknown): value is null | undefined => {
  return value === undefined || value === null;
};

export const isNumber = (value: unknown): value is number => typeof value === NUMBER;
export const isString = (value: unknown): value is string => typeof value === STRING;
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFn = (value: unknown): value is Function => typeof value === FUNCTION;
export const isBigInt = (value: unknown): value is bigint => typeof value === BIGINT;
export const isBool = (value: unknown): value is boolean => typeof value === BOOLEAN;

/**
 * Checks if a value is empty depending on their type.
 *
 * @examplesFromTests ../test/is.test.js
 */
export const isEmpty = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return !value;
};

/**
 * Checks the type of a value is primitive.
 *
 * @examplesFromTests ../test/is.test.js
 */
export const isPrimitive = (value: unknown): value is Primitive => {
  if (value === null) {
    return true;
  }

  return typeof value !== OBJECT && typeof value !== FUNCTION;
};

/**
 * Checks if two values are essentially the same.
 * For two objects, the keys and their values will be compared recursively.
 * For arrays, each entry will be compared recursively.
 *
 * @examplesFromTests ../test/is.test.js
 */
export const isEquivalent = (a: unknown, b: unknown) => {
  if (a === b) {
    return true;
  }

  if (isNumber(a) && isNaN(a) && isNumber(b) && isNaN(b)) {
    return true;
  }

  if (isObject(a) && isObject(b)) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (let i = 0; i < keysA.length; i++) {
      const key = keysA[i];

      if (!keysB.includes(key) || !isEquivalent(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!isEquivalent(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return false;
};
