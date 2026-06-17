import { isObject } from './is.js';

/**
 * Retrieves a nested value from an object using a dot-notation string.
 * Supports both standard property access (`a.b.c`) and array index access (`a.b[0]`).
 *
 * @returns The found value, or `undefined` if the path does not exist.
 *
 * @examplesFromTests ../test/object.test.js
 */
export function getDeepEntry<T extends object>(
  /** The source object to query. */
  object: T,
  /** The path string using dot notation (e.g., `'user.address.street'`, `'items[0].name'`, `items.0.name`). */
  key: string
): T | unknown | undefined {
  if (!key) {
    return object;
  }

  if (object === undefined) {
    return;
  }

  const keyMatches = Array.from(`${key}`.matchAll(/(\w+)|\[(\d+)\]/g));
  let val = object;

  if (keyMatches.length === 0) {
    return;
  }

  for (const [ , match1, match2 ] of keyMatches) {
    const key = match1 || match2;
    let nextVal;

    if (isObject(val)) {
      nextVal = val[key];
    } else if (Array.isArray(val)) {
      nextVal = val[parseInt(key)];
    }

    val = nextVal;

    if (val === undefined) {
      return;
    }
  }

  return val;
}

/**
 * Creates a new object composed of the picked properties from the source object.
 * * Only properties that exist directly on the source object (own properties) 
 * will be copied. Inherited properties from the prototype chain are ignored.
 *
 * @template T - The type of the source object, conforming to a record structure.
 * @template K - The literal keys to pick from the source object.
 * * @param {T} obj - The source object to pick properties from.
 * @param {K[]} keys - An array of property keys to extract.
 * * @returns {Pick<T, K>} A new object containing only the specified keys. 
 * If the input `obj` is not a valid object, it is returned as-is.
 *
 * @examplesFromTests ../test/object.test.js
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  if (!isObject(obj)) {
    return obj;
  }

  const n = {} as Pick<T, K>;
  for (const key of keys) {
    if (Object.hasOwn(obj, key)) {
      n[key] = obj[key];
    }
  }

  return n;
}

/**
 * Creates a new object composed of the properties of the source object that are not omitted.
 *
 * This function extracts all enumerable own properties from the source object,
 * excluding the specific keys provided in the `keys` array. Inherited properties 
 * from the prototype chain are naturally ignored.
 *
 * @template T - The type of the source object, conforming to a record structure.
 * @template K - The literal keys to omit from the source object.
 * @param {T} obj - The source object to omit properties from.
 * @param {K[]} keys - An array of property keys to exclude from the resulting object.
 * @returns {Omit<T, K>} A new object containing all keys from the source object except the omitted ones.
 * 
 * @examplesFromTests ../test/object.test.js
 **/
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  if (!isObject(obj)) {
    return obj;
  }

  const n = {} as Record<string, unknown>;
  const keysToOmit = new Set<K>(keys);

  for (const key of Object.keys(obj)) {
    if (!keysToOmit.has(key as K)) {
      n[key] = obj[key];
    }
  }

  return n as Omit<T, K>;
}
