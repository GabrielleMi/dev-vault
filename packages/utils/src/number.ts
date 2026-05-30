/**
 * Returns 0 when a number or the other is 0 before performing a division.
 *
 * @example Standard Division
 * ```javascript
 * 6 / 2; // returns 3
 * safeDivide(6, 2); // returns 3
 * ```
 *
 * @example Handling 0
 * ```javascript
 * 0 / 0; // returns NaN
 * safeDivide(0, 0); // returns 0
 *
 * 1 / 0; // returns Infinity
 * safeDivide(1, 0); // returns 0
 * ```
 *
 * @example Handling NaN
 * ```javascript
 * NaN / 1 // returns NaN
 * safeDivide(NaN, 1); // returns 0
 *
 * NaN / NaN; // returns NaN
 * safeDivide(NaN, NaN); // returns 0
 * ```
 *
 * @example Handling Infinity
 * ```javascript
 * Infinity / 2; // returns Infinity
 * safeDivide(Infinity, 2); // returns 0
 *
 * Infinity / Infinity; // returns NaN
 * safeDivide(Infinity, Infinity); // returns 0
 * ```
 */
export const safeDivide = (a: number, b: number) => {
  if (
    !Number.isFinite(a)
    || !Number.isFinite(b)
    || a === 0
    || b === 0
  ) {
    return 0;
  }

  return a / b;
};

export function clamp(nb: number, min: number, max: number) {
  return Math.min(Math.max(nb, min), max);
};
