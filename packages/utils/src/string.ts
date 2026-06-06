/**
 * Joins an array of strings together. Acts like `Array.join()`, but automatically skips falsy values.
 * Useful for building addresses, names, or any string concatenation where some parts might be missing.
 *
 * @param strings - An array of strings, numbers, or falsy values to join.
 * @param splitter - The separator to insert between joined parts.
 * @returns A joined string.
 *
 * @examplesFromTests ../test/string.test.js
 */
export function safeJoin(
  strings: (string | null | undefined | false | number)[],
  splitter?: string
): string {
  return strings.reduce<string>((finalStr: string, str) => {
    if (str) {
      return finalStr ? `${finalStr}${splitter || ''}${str}` : `${str}`;
    }

    return finalStr;
  }, '');
}

/**
 * Compares two strings for equality while ignoring case and accent differences.
 *
 * @returns `true` if strings are equivalent, `false` otherwise.
 * @example
 * ```typescript
 * isStrEqualCi('a', 'A'); // true
 * isStrEqualCi('é', 'e'); // true
 * ```
 */
export function isStrEqualCi(a: string, b: string) {
  return a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0;
}

/**
 * Normalizes a string by removing diacritics (accents), trimming whitespace, and converting to lowercase.
 *
 * @returns The normalized string.
 * @example
 * ```typescript
 * normalizeStr('  Héllö Wörld  '); // "hello world"
 * ```
 */
export function normalizeStr(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
