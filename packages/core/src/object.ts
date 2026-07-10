import { isObject } from './is.js';

/**
 * Retrieves a nested value from an object using an array of keys.
 * This function sequentially traverses the object's properties matching the order 
 * of the provided keys array.
 *
 * @template T - The type of the source object.
 * @param {T} object - The source object to query.
 * @param {(string | number)[]} keys - An array of property keys representing the deep path.
 * @returns {unknown} The value at the specified path, or `undefined` if the path cannot be resolved.
 * @example
 * const user = { profile: { name: 'Alice', roles: ['admin'] } };
 * getEntryAt(user, ['profile', 'name']); // => 'Alice'
 * getEntryAt(user, ['profile', 'roles', 0]); // => 'admin'
 * getEntryAt(user, ['profile', 'invalid', 'key']); // => undefined
 */
export function getEntryAt<T extends object>(
  object: T,
  keys: (string | number)[]
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let val: any = object;

  for (let i = 0; i < keys.length; i++) {
    if (val == null) {
      return undefined;
    }
    val = val[keys[i]];
  }

  return val;
}

/**
 * Retrieves a nested value from an object using a dot-notation string.
 * Supports both standard property access (`a.b.c`) and array index access (`a.b.0`).
 *
 * @returns The found value, or `undefined` if the path does not exist.
 *
 * @examplesFromTests ../test/object.test.js
 */
export function getEntry<T extends object>(
  /** The source object to query. */
  object: T,
  /** The path string using dot notation (e.g., `'user.address.street'`, `items.0.name`). */
  key: string
): T | unknown | undefined {
  if (!key) {
    return object;
  }

  if (object === undefined) {
    return;
  }

  return getEntryAt(object, key.split('.'));
}

/**
 * Creates a new object composed of the picked properties from the source object.
 * Only properties that exist directly on the source object (own properties) 
 * will be copied. Inherited properties from the prototype chain are ignored.
 *
 * @template T - The type of the source object, conforming to a record structure.
 * @template K - The literal keys to pick from the source object.
 * @param {T} obj - The source object to pick properties from.
 * @param {K[]} keys - An array of property keys to extract.
 * @returns {Pick<T, K>} A new object containing only the specified keys. 
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

/**
 * @internal
 */
const deepMergeObjects = (
  left: Record<string, unknown>,
  right: Record<string, unknown>
): Record<string, unknown> => {
  const result = { ...left };

  Object.keys(right).forEach((key) => {
    const rightValue = right[key];
    const leftValue = result[key];

    if (isObject(leftValue) && isObject(rightValue)) {
      result[key] = deepMergeObjects(leftValue, rightValue);
      return;
    }

    if (isObject(rightValue)) {
      result[key] = deepMergeObjects({}, rightValue);
      return;
    }

    result[key] = rightValue;
  });

  return result;
};

/**
 * @template T - The type of the target object.
 * @template U - The type of the source object.
 * Merges properties from the source object into the target object.
 * @returns A new object containing properties from both the target and source objects.
 *
 * @description Deep merges two objects, combining their properties.
 *  If a property exists in both objects, the value from the source object will overwrite the value in the target object.
 * 
 */
export function merge<T extends object, const U extends object>(
  /** Object to be merged into */
  target: T,
  /** Object to merge from. Will overwrite properties in the target if they exist in the source. */
  source: U
): T & U {
  if (!isObject(target) || !isObject(source)) {
    throw new Error('Both target and source must be objects.');
  }

  return deepMergeObjects(target, source) as T & U;
}
