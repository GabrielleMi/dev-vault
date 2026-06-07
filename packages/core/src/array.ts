import { isArray, isEquivalent, isNumber } from './is.js';
import { type AssertPositive } from './types.js';

/**
 * Makes sure the received value is an array. If it's not, returns an empty array.
 * @remarks
 * This function performs a loose check. It does not attempt to wrap
 * non-array values; it simply returns an empty array if the input is not an array.
 * @returns The original array or an empty array.
 * @example
 * ```typescript
 * safeArray([ "hi" ]); // [ "hi" ]
 * safeArray("hi");     // []
 * ```
 */
export function safeArray<T>(value: T) {
  return (isArray(value) ? value : []) as T extends unknown[] ? T : [];
}

/**
 * Normalizes an input type into a guaranteed array structure.
 * - **Arrays**: Remains as `T[]`.
 * - **Falsy values** (`null`, `undefined`, `''`, `false`): Normalizes to `[]`.
 * - **`0`**: Normalizes to `[0]`.
 * - **Other Numbers**: Returns `number[] | [number]`.
 * - **Single values**: Returns `[T]`.
 * @example
 * ```typescript
 * // Normalizes a single value
 * type A = AssertArray<string>; // [string]
 * 
 * // Normalizes falsy values
 * type B = AssertArray<null>; // []
 * 
 * // Normalizes numeric special cases
 * type C = AssertArray<0>; // [0]
 * type D = AssertArray<number>; // number[] | [number]
 * ```
 *
 * @typeParam T - The type to normalize into an array.
 */
export type AssertArray<T> = T extends unknown[] ? T : T extends (null | undefined | '' | false) ? [] : (T extends number ? (T extends 0 ? [0] : ([] | [number])) : [T]);

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Enforces the received value as an array.
 * @remarks
 * Unlike {@link safeArray}, this function transforms single values into
 * single-element arrays and flattens falsy values (null, undefined, "", NaN, false) into empty arrays.
 * @returns An array containing the value, or an empty array if falsy.
 * @example
 * ```typescript
 * toArray(1);    // [ 1 ]
 * toArray(null); // []
 * toArray([1]);  // [ 1 ]
 * ```
 */
export function toArray<T>(
  value: T
): AssertArray<T> {
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
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Checks if a value is included in an array using deep equivalence.
 *
 * @param value The value to search for
 * @param arr The array to search in
 * @returns `true` if the value is found, `false` otherwise.
 */
export function isIncluded(
  value: unknown,
  arr: unknown[]
) {
  return arr.some((arrValue) => isEquivalent(arrValue, value));
}

/**
 * Splits an array into smaller chunks of a specified size.
 * @param value the array to split
 * @param chunkSize The size of each chunk (must be positive)
 * @returns An array of arrays.
 * @example
 * ```typescript
 * splitInChunks([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
 * ```
 *
 * @examplesFromTests ../test/array.test.js
 */
export function splitInChunks<T extends unknown[], N extends number>(
  value: T,
  chunkSize: AssertPositive<N>
): Array<T> {
  if (!value || chunkSize <= 0) {
    return value ? [value] : [];
  }

  const chunks = [];

  for (let i = 0; i < value.length; i += chunkSize) {
    chunks.push(value.slice(i, i + chunkSize) as T);
  }

  return chunks;
}
