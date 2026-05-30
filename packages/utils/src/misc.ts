import { isArray, isFn, isPrimitive } from './is.js';

/**
 * @internal
 * @private
 */
const _cloneDeep = <T>(value: T, hash = new WeakMap()) => {
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

  // structuredClone does not recurse into non-enumerable properties
  if (isArray(value)) {
    const clonedArr: unknown[] = [];
    hash.set(value, clonedArr);
    for (let i = 0; i < value.length; i++) {
      clonedArr[i] = _cloneDeep(value[i], hash);
    }

    return clonedArr as T;
  }

  // structuredClone throws on FormData
  if (value instanceof FormData) {
    const copy = new FormData();

    value.forEach((val, key) => {
      copy.append(key, val);
    });

    return copy as T;
  }

  // StructuredClone would throw if keys/values contain functions/DOM nodes
  if (value instanceof Map) {
    const clonedMap = new Map();
    hash.set(value, clonedMap);
    for (const [key, val] of value.entries()) {
      clonedMap.set(_cloneDeep(key, hash), _cloneDeep(val, hash));
    }

    return clonedMap as T;
  }

  // StructuredClone would throw if values contain functions/DOM nodes
  if (value instanceof Set) {
    const clonedSet = new Set();
    hash.set(value, clonedSet);
    for (const val of value.values()) {
      clonedSet.add(_cloneDeep(val, hash));
    }

    return clonedSet as T;
  }

  // structuredClone does not keep lastIndex
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

    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        clone[key] = _cloneDeep(value[key], hash);
      }
    }

    return clone as T;
  }
};

/**
 * Clones deeply a value by leveraging the {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone | structuredClone} method.
 * @param value The value to deep clone.
 */
export const cloneDeep = <T>(value: T) => _cloneDeep(value);
