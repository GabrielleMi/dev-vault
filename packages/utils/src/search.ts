import { isEmpty, isNil, isNumber, isObject, isString } from './is.js';
import { getDeepEntry } from './object.js';
import { normalizeStr } from './string.js';
import { safeDivide } from './number.js';

export type SearchKeyConfig = {
  isCaseSensitive?: boolean;
  weight?: number;
  key: string;
};

export type SearchKey = SearchKeyConfig | string;

/**
 * @author Gustav Anderson
 * @private
 * @see {@link https://stackoverflow.com/questions/18516942/fastest-general-purpose-levenshtein-javascript-implementation}
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
 * Function to search an array.
 * @param arr Array to search
 * @param configs Configure how the array should be searched
 */
export const search = <T extends object[]>(
  arr: T,
  configs: {
    keys: SearchKey[];
    isCaseSensitive?: boolean;
    threshold?: number;
    locale?: Intl.LocalesArgument;
  }
) => {
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
};
