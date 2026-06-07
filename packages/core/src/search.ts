import { isEmpty, isNil, isNumber, isObject, isString } from './is.js';
import { getDeepEntry } from './object.js';
import { normalizeStr } from './string.js';
import { safeDivide } from './number.js';

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
export function getLevenshteinDistance(s: string, t: string): number {
  if (s === t) {
    return 0;
  }

  const n = s.length, m = t.length;
  if (n === 0 || m === 0) {
    return n + m;
  }

  let x = 0, y, a, b, c, d, g, h;
  const p = new Uint16Array(n);
  const u = new Uint32Array(n);

  for (y = 0; y < n;) {
    u[y] = s.charCodeAt(y);
    p[y] = ++y;
  }

  for (; (x + 3) < m; x += 4) {
    const e1 = t.charCodeAt(x);
    const e2 = t.charCodeAt(x + 1);
    const e3 = t.charCodeAt(x + 2);
    const e4 = t.charCodeAt(x + 3);
    c = x;
    b = x + 1;
    d = x + 2;
    g = x + 3;
    h = x + 4;
    for (y = 0; y < n; y++) {
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

  for (; x < m;) {
    const e = t.charCodeAt(x);
    c = x;
    d = ++x;
    for (y = 0; y < n; y++) {
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
  if (isString(searchKey)) {
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
  configs: {
    /** The keys to search. */
    keys: SearchKey[];
    /** Whether the search should be case-sensitive. */
    isCaseSensitive?: boolean;
    /** The threshold for fuzzy matching (between 0 and 1). */
    threshold?: number;
    /** The locale for normalization. */
    locale?: Intl.LocalesArgument;
  }
): {
  /**
   * Provides the search inputs and returns the filtered array.
   * @param searchInputs - The terms to search for.
   * @returns The filtered array of objects.
   */
  with(...searchInputs: string[]): T;
} {
  const keysToSearch = configs?.keys || [];
  const isFuzzy = isNumber(configs?.threshold) && configs.threshold > 0;
  const isGlobalCaseSensitive = configs?.isCaseSensitive;

  const searchStr = (strToSearch: string, searchTerms: string[], isSensitive?: boolean) => {
    const finalStrToSearch = String(isSensitive ? strToSearch : normalizeStr(strToSearch));

    if (isFuzzy) {
      for (const searchTerm of searchTerms) {
        const finalSearchTerm = isSensitive ? searchTerm : normalizeStr(searchTerm);
        const maxLength = Math.max(finalStrToSearch.length, finalSearchTerm.length);
        const levenshteinDist = getLevenshteinDistance(finalStrToSearch, finalSearchTerm);
        const similarity = 1 - safeDivide(levenshteinDist, maxLength);

        if (similarity >= (configs.threshold as number)) {
          return true;
        }
      }

      return false;
    }

    return searchTerms.some((searchTerm) => {
      return finalStrToSearch.includes(isSensitive ? searchTerm : normalizeStr(searchTerm));
    });
  };

  return {
    with: function (...searchInputs: string[]) {
      if (isEmpty(arr) || searchInputs.length === 0 || keysToSearch.length === 0) {
        return [...(arr || [])] as T;
      }

      return arr.filter((item) => {
        if (!isObject(item)) {
          if (!isEmpty(keysToSearch)) {
            console.warn('Keys are not used when the array contains primitive values.');
          }

          return searchStr(String(item), searchInputs, isGlobalCaseSensitive);
        }

        for (const searchKey of keysToSearch) {
          const keyConfig = getKeyConfig(searchKey);
          const keyValue = isObject(item) ? getDeepEntry(item, keyConfig.key) : item;

          if (!isNil(keyValue)) {
            return searchStr(
              String(keyValue),
              searchInputs,
              keyConfig.isCaseSensitive ?? isGlobalCaseSensitive
            );
          }
        }

        return false;
      }) as T;
    }
  };
}
