import { isArray, isFn, isPrimitive } from './is.js';

/**
 * Internal recursive implementation of deep cloning.
 * @remarks
 * Handles circular references, `FormData`, `Map`, `Set`, `RegExp`,
 * and custom object prototypes that `structuredClone` might strip.
 *
 * @internal
 */
const _cloneDeep = <T>(value: T, hash = new WeakMap()): T => {
  if (isPrimitive(value)) {
    return value;
  }

  // Prevent circular references
  if (hash.has(value as object)) {
    return hash.get(value as object) as T;
  }

  // Functions are copied by reference
  if (isFn(value)) {
    hash.set(value, value);
    return value;
  }

  if (isArray(value)) {
    const clonedArr: unknown[] = [];
    hash.set(value, clonedArr);
    for (let i = 0; i < value.length; i++) {
      clonedArr[i] = _cloneDeep(value[i], hash);
    }
    return clonedArr as T;
  }

  if (value instanceof FormData) {
    const copy = new FormData();
    value.forEach((val, key) => {
      copy.append(key, val);
    });
    return copy as T;
  }

  if (value instanceof Map) {
    const clonedMap = new Map();
    hash.set(value, clonedMap);
    for (const [ key, val ] of value.entries()) {
      clonedMap.set(_cloneDeep(key, hash), _cloneDeep(val, hash));
    }
    return clonedMap as T;
  }

  if (value instanceof Set) {
    const clonedSet = new Set();
    hash.set(value, clonedSet);
    for (const val of value.values()) {
      clonedSet.add(_cloneDeep(val, hash));
    }
    return clonedSet as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  try {
    const clonedStructured = structuredClone(value as object);
    if (
      Object.getPrototypeOf(clonedStructured) === Object.prototype
      && Object.getPrototypeOf(value as object) !== Object.prototype
    ) {
      throw new Error('Structured clone stripped prototype, falling back to manual cloning.');
    }

    hash.set(value as object, clonedStructured);
    return clonedStructured as T;
  } catch (_) {
    const clone = Object.create(Object.getPrototypeOf(value));
    hash.set(value as object, clone);

    Object.keys(value as object).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clone[key] = _cloneDeep((value as Record<string, any>)[key], hash);
    });

    return clone as T;
  }
};

/**
 * Creates a deep clone of a value.
 * @remarks
 * Unlike the standard {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone | structuredClone},
 * this implementation preserves custom prototypes and handles edge cases
 * like `FormData`, `Map`, `Set`, and functions (copied by reference).
 * @returns A deep copy of the original value.
 * @example
 * ```typescript
 * const original = { a: 1, b: { c: 2 } };
 * const copy = cloneDeep(original);
 * console.log(copy !== original); // true
 * ```
 */
export const cloneDeep = <T>(value: T): T => _cloneDeep(value);
