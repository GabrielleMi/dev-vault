import { isObject } from './is.js';

/**
 * Returns an object entry using dot notation. Can retrieve nested arrays values as well.
 * If the exact index is not found, will return undefined.
 *
 * @examplesFromTests ../test/object.test.js
 */
export const getDeepEntry = <T extends object>(object: T, key: string): T | unknown | undefined => {
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

  for (const [, match1, match2] of keyMatches) {
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
};
