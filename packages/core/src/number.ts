/**
 * Returns 0 when a number or the other is 0 or non-finite before performing a division.
 * This prevents `NaN`, `Infinity`, or `-Infinity` results.
 * 
 * @param a The dividend
 * @param b The divisor
 * @returns The result of the division, or 0 if unsafe.
 * @example Standard Division
 * ```typescript
 * safeDivide(6, 2); // 3
 * ```
 * @example Handling 0 and NaN
 * ```typescript
 * safeDivide(0, 0); // 0
 * safeDivide(NaN, 1); // 0
 * ```
 * @example Handling Infinity
 * ```typescript
 * Infinity / 2; // returns Infinity
 * safeDivide(Infinity, 2); // 0
 *
 * Infinity / Infinity; // returns NaN
 * safeDivide(Infinity, Infinity); // returns 0
 * ```
 */
export function safeDivide(
  a: number,
  b: number
) {
  if (
    !Number.isFinite(a)
    || !Number.isFinite(b)
    || a === 0
    || b === 0
  ) {
    return 0;
  }

  return a / b;
}

/**
 * Constrains a number between a minimum and a maximum value.
 *
 * @returns The clamped value.
 * @example
 * ```typescript
 * clamp(10, 0, 5); // 5
 * clamp(-5, 0, 5); // 0
 * ```
 */
export function clamp(
  /** The number to clamp. */
  nb: number,
  /** The lower bound. */
  min: number,
  /** The upper bound. */
  max: number
) {
  return Math.min(Math.max(nb, min), max);
}
