import { EMPTY_ARRAY, EMPTY_OBJECT } from './constants.js';
import { getEntry } from './object.js';
import { normalizeStr } from './string.js';

/**
 * Configuration for a specific key in a search operation.
 */
export interface SearchKeyConfig {
  /** 
   * Whether the search on this specific key should be case-sensitive.
   * @default false
   */
  isCaseSensitive?: boolean;

  /** 
   * The relative importance of this key. 
   * Higher values give this key more influence in the match quality.
   * @default 1
   */
  weight?: number;

  /** 
   * The object path to search within (e.g., 'user.name'). 
   */
  key: string;
}

/**
 * Configuration for the search operation, including keys to search, case sensitivity, fuzzy matching threshold, and locale.
 */
export interface SearchConfigs {
  /** The keys to search. */
  keys: SearchKey[];
  /** Whether the search should be case-sensitive. */
  isCaseSensitive?: boolean;
  /** The threshold for fuzzy matching (between 0 and 1). */
  threshold?: number;
  /** The locale for normalization. */
  locale?: Intl.LocalesArgument;
}

/**
 * A search key defined either as a string path or a {@link SearchKeyConfig}.
 */
export type SearchKey = SearchKeyConfig | string;

/**
 * Calculates the Levenshtein distance between two strings.
 * Used to determine the minimum number of single-character edits required to change one word into the other.
 *
 * @see {@link https://stackoverflow.com/questions/18516942/fastest-general-purpose-levenshtein-javascript-implementation}
 *
 * @author Gustav Anderson
 * @internal
 */
export function getLevenshteinDistance(source: string, target: string): number {
  if (source === target) {
    return 0;
  }

  const sLen = source.length, tLen = target.length;
  if (sLen === 0 || tLen === 0) {
    return sLen + tLen;
  }

  let x = 0, y, a, b, c, d, g, h;
  const p = new Uint16Array(sLen);
  const u = new Uint32Array(sLen);

  for (y = 0; y < sLen;) {
    u[y] = source.charCodeAt(y);
    p[y] = ++y;
  }

  for (; (x + 3) < tLen; x += 4) {
    const e1 = target.charCodeAt(x);
    const e2 = target.charCodeAt(x + 1);
    const e3 = target.charCodeAt(x + 2);
    const e4 = target.charCodeAt(x + 3);
    c = x;
    b = x + 1;
    d = x + 2;
    g = x + 3;
    h = x + 4;
    for (y = 0; y < sLen; y++) {
      a = p[y];
      if (a < c || b < c) {
        c = (a > b ? b + 1 : a + 1);
      } else if (e1 !== u[y]) {
        c++;
      }

      if (c < b || d < b) {
        b = (c > d ? d + 1 : c + 1);
      } else if (e2 !== u[y]) {
        b++;
      }

      if (b < d || g < d) {
        d = (b > g ? g + 1 : b + 1);
      } else if (e3 !== u[y]) {
        d++;
      }

      if (d < g || h < g) {
        g = (d > h ? h + 1 : d + 1);
      } else if (e4 !== u[y]) {
        g++;
      }
      p[y] = h = g;
      g = d;
      d = b;
      b = c;
      c = a;
    }
  }

  for (; x < tLen;) {
    const e = target.charCodeAt(x);
    c = x;
    d = ++x;
    for (y = 0; y < sLen; y++) {
      a = p[y];
      if (a < c || d < c) {
        d = (a > d ? d + 1 : a + 1);
      } else {
        d = (e === u[y] ? c : c + 1);
      }
      p[y] = d;
      c = a;
    }
    h = d;
  }

  return h as number;
}

/**
 * @internal
 */
const getKeyConfig = (searchKey: SearchKey) => {
  if (typeof searchKey === 'string') {
    return {
      key: searchKey,
      weight: 1
    };
  }

  return {
    ...searchKey,
    weight: searchKey.weight ?? 1
  };
};

/**
 * @internal
 */
const fuzzySearchStr = (
  strToSearch: string,
  searchTerms: string[],
  threshold: number
) => {
  for (const searchTerm of searchTerms) {
    const maxLength = Math.max(strToSearch.length, searchTerm.length);
    const levenshteinDist = getLevenshteinDistance(strToSearch, searchTerm);
    const similarity = 1 - (levenshteinDist / maxLength);

    if (similarity >= threshold) {
      return true;
    }
  }

  return false;
};

/**
 * @internal
 */
const searchStr = (strToSearch: string, searchTerms: string[]) => {
  for (const searchTerm of searchTerms) {
    if (strToSearch.includes(searchTerm)) {
      return true;
    }
  }

  return false;
};

/**
 * Performs a search operation on an array of objects.
 * Supports fuzzy matching and specific field targeting.
 *
 * @returns A search chain object with a `with` method to provide search inputs.
 * @example
 * ```typescript
 * const result = search(data, { keys: ['name'], threshold: 0.8 })
 * .with('searchTerm');
 * ```
 */
export function search<T extends object[]>(
  /** The array of objects to search. */
  arr: T,
  /** Configuration object defining keys to search, threshold for fuzzy matching, etc. */
  configs?: SearchConfigs
): {
  /**
   * Provides the search inputs and returns the filtered array.
   * @param searchInputs - The terms to search for.
   * @returns The filtered array of objects.
   */
  with(...searchInputs: string[]): T;
} {
  const c = (configs || EMPTY_OBJECT) as SearchConfigs;
  const threshold = c.threshold ?? 0;
  const keysToSearch = c.keys || EMPTY_ARRAY;
  const isGlobalCaseSensitive = c.isCaseSensitive;
  const locale = c.locale;

  const matchFn = threshold > 0
    ? (t: string, s: string[]) => fuzzySearchStr(t, s, threshold)
    : searchStr;

  const precompiledGetters = keysToSearch.map((searchKey) => {
    const config = getKeyConfig(searchKey);
    return {
      ...config,
      getValue: (item: T[number]) => getEntry(item, config.key)
    };
  });

  return {
    with: function (...searchInputs: string[]) {
      if (!arr || arr.length === 0 || !searchInputs || searchInputs.length === 0) {
        return [...(arr || EMPTY_ARRAY)] as T;
      }

      const normalizedSearchInputs = searchInputs.map((s) => normalizeStr(s, locale));

      return arr.filter((item) => {
        if (typeof item !== 'object' || item === null) {
          if (keysToSearch.length > 0) {
            console.warn('Keys are not used when the array contains primitive values.');
          }

          return matchFn(
            isGlobalCaseSensitive ? String(item) : normalizeStr(String(item), locale),
            isGlobalCaseSensitive ? searchInputs : normalizedSearchInputs
          );
        }

        for (const keyConfig of precompiledGetters) {
          const keyValue = keyConfig.getValue(item);

          if (keyValue !== null && keyValue !== undefined) {
            const isCaseSensitive = keyConfig.isCaseSensitive ?? isGlobalCaseSensitive;
            const strValue = String(keyValue);
            return matchFn(
              isCaseSensitive ? strValue : normalizeStr(strValue, locale),
              isCaseSensitive ? searchInputs : normalizedSearchInputs
            );
          }
        }

        return false;
      }) as T;
    }
  };
}
