/**
 * A type representing a non-negative number (greater than or equal to zero).
 *
 * @remarks
 * This type uses "Branding" to prevent the accidental assignment of negative numbers.
 * You must use {@link AssertPositive} to convert a standard `number` to a `Positive`.
 *
 */
export type Positive = number & { __brand: 'positive' };

/**
 * Utility type to validate whether a number is positive at compile time.
 *
 * @template N - The number or literal type to verify.
 * @returns {@link Positive} if the number is >= 0, otherwise returns the original type `N`.
 * @example
 * ```typescript
 * // Type becomes 'Positive'
 * type Valid = AssertPositive<10>;
 *
 * // Type remains 'number' (or could trigger an error if constraints are added)
 * type Invalid = AssertPositive<-5>;
 * ```
 */
export type AssertPositive<N extends number> = number extends N ? N : `${N}` extends `-${string}` ? Positive : N extends 0 ? Positive : N;

export type Primitive = string | number | boolean | bigint | symbol | null | undefined;
export type Falsy = null | undefined | '' | false | 0;
