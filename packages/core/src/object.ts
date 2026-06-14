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
