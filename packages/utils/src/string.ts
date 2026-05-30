/**
 * Join strings together. Acts like Array.join(), but skips falsy values. Useful for building adresses and such.
 *
 * @examplesFromTests ../test/string.test.js
 */
export const safeJoin = (strings: (string | null | undefined | false | number)[], splitter?: string): string => {
  return strings.reduce<string>((finalStr: string, str) => {
    if (str) {
      return finalStr ? `${finalStr}${splitter || ''}${str}` : `${str}`;
    }

    return finalStr;
  }, '');
};

/**
 * Compares two strings case insensitive.
 *
 * @example
 * ```javascript
 * isStrEqualCi('a', 'a'); // true
 * isStrEqualCi('a', 'A'); // true
 * isStrEqualCi('a', 'b'); // false
 * ```
 */
export const isStrEqualCi = (a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0;

/**
 * Function to normalize a string
 *
 * - Removes diacritic
 * - Trims
 * - Converts to lowercase
 */
export const normalizeStr = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
};
