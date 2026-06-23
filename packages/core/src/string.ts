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

const DIACRITICS_RE = /[\u0300-\u036f]/g;

const isAsciiOnly = (value: string): boolean => {
  for (let i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) > 0x7F) {
      return false;
    }
  }

  return true;
};

/**
 * Normalizes a string by removing diacritics (accents), trimming whitespace, and converting to lowercase.
 *
 * @returns The normalized string.
 * @example
 * ```typescript
 * normalizeStr('  Héllö Wörld  '); // "hello world"
 * ```
 */
export function normalizeStr(str: string, locale?: Intl.LocalesArgument) {
  const trimmed = str.trim();
  const s = locale ? trimmed.toLocaleLowerCase(locale) : trimmed.toLowerCase();

  if (isAsciiOnly(s)) {
    return s;
  }

  return s.normalize('NFD').replace(DIACRITICS_RE, '');
}
