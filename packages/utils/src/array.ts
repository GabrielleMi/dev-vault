import { isArray, isEquivalent, isNumber } from './is.js';
import { type AssertPositive } from './types.js';

/**
 * Makes sure the received value is an array. If it's not, returns an empty array.
 *
 * @example With an array
 * ```javascript
 * const arr = safeArray([ "hi" ]);
 * console.log(arr); // [ "hi" ];
 * ```
 *
 * @example With a value other than array
 * ```javascript
 * const arr = safeArray("hi");
 * console.log(arr); // [];
 * ```
 *
 * @example With an uncertain value
 * ```javascript
 * const ressources = await getRessources();
 * safeArray(ressources).map((ressource) => ...); // will never throw
 * ```
 */
export const safeArray = <T>(value: T) => (isArray(value) ? value : []) as T extends unknown[] ? T : [];

type AssertArray<T> = T extends unknown[] ? T : T extends (null | undefined | '' | false) ? [] : (T extends number ? (T extends 0 ? [0] : ([] | [number])) : [T]);

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Will enforce the received value as an array.
 * If the value is null, undefined, "" or NaN the array will be empty.
 *
 * @example With arrays
 * toArray([ 1 ]); // returns [ 1 ]
 * toArray([ {} ]); // returns [ {} ]
 * toArray([ "" ]); // returns [ "" ]
 * toArray([ false ]); // returns [ false ]
 *
 * @example With numbers
 * toArray(1); // returns [ 1 ]
 * toArray(0); // returns [ 0 ]
 * toArray(NaN); // returns []
 *
 * @example With falsy values
 * toArray(null); // returns []
 * toArray(); // returns []
 * toArray(""); // returns []
 * toArray(false); // returns []
 *
 * @example With truthy values
 * toArray("hi"); // returns [ "hi" ]
 * toArray(true); // returns [ true ]
 */
export const toArray = <T>(value: T): AssertArray<T> => {
  if (isArray(value)) {
    return value as any;
  }

  if (isNumber(value) && isNaN(value)) {
    return [] as any;
  }

  if (value === null || value === undefined || value === '' || value === false) {
    return [] as any;
  }

  return [value] as any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Checks if a value is included in an array. Will check equivalence, not by reference.
 */
export const isIncluded = (value: unknown, arr: unknown[]) => {
  return arr.some((arrValue) => isEquivalent(arrValue, value));
};

/**
 * Splits a given array into chunks of a specified size.
 *
 * @examplesFromTests ../test/array.test.js
 */
export const splitInChunks = <T extends unknown[], N extends number>(value: T, chunkSize: AssertPositive<N>): Array<T> => {
  if (!value || chunkSize <= 0) {
    return value ? [value] : [];
  }

  const chunks = [];

  for (let i = 0; i < value.length; i += chunkSize) {
    chunks.push(value.slice(i, i + chunkSize) as T);
  }

  return chunks;
};
