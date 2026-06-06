import { isFn, isString } from './is.js';
import { getDeepEntry } from './object.js';
import { safeStringify } from './json.js';

/**
 * Configuration for a specific sort key.
 */
export interface SortKeyConfig {
  /** Enables descending order for this specific key. */
  isDesc?: true;
  /** The object path to sort by. */
  key: string;
  /** A specific collator to override the global one. */
  collator?: Intl.Collator;
}

/**
 * Custom comparator function for sorting.
 * @template T - The type of elements being compared.
 */
export type SortKeyFn<T> = (a: T, b: T) => number;

/**
 * Simple property key string for sorting.
 */
export type SortKeyStr = string;

/**
 * Defines a sort criteria.
 * Can be a string (property path), a comparator function, or a {@link SortKeyConfig}.
 * @template T - The type of elements in the array.
 */
export type SortKey<T> = SortKeyStr | SortKeyFn<T> | SortKeyConfig;

/**
 * Global configuration for sorting operations.
 */
export interface SortConfigs {
  /** The locale used for string comparison. */
  locale?: Intl.LocalesArgument;
  /** Enables descending order globally. */
  isDesc?: true;
  /** A pre-configured Collator instance. */
  collator?: Intl.Collator;
  /** Options passed to the internal Intl.Collator. */
  options?: Intl.CollatorOptions;
}

/**
 * @internal
 * Internal cache for reusable Collator instances.
 */
class CollatorCache {
  cache: Map<string, Intl.Collator>;

  constructor() {
    this.cache = new Map();
  }

  get(locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions) {
    const key = `${locales}-${safeStringify(options || '0')}`;
    if (!this.cache.has(key)) {
      this.cache.set(key, new Intl.Collator(locales, options));
    }

    return this.cache.get(key) as Intl.Collator;
  }
}

const collators = new CollatorCache();

const getDirection = (isDesc?: boolean) => isDesc ? -1 : 1;

/**
 * Function used to sort arrays of objects.
 * 
 * @param arr The array of objects to sort.
 * @param configs Global sorting configurations including locale and collator options.
 *
 * @examplesFromTests ../test/sort.test.js
 */
export function sort<T extends object[]>(
  arr: T,
  configs?: SortConfigs
): {
  /**
   * Sort the table by key.
   * @returns The sorted table.
   */
  by(...keys: SortKey<(T[number])>[]): T;
} {
  const locale = configs?.locale;
  const collator = configs?.collator || collators.get(locale, configs?.options);
  const isDesc = configs?.isDesc;

  const getKeyFull = (key: SortKeyStr | SortKeyConfig): { key: SortKeyStr; dir: 1 | -1; collator?: Intl.Collator } => {
    if (isString(key)) {
      return {
        key,
        dir: getDirection(isDesc)
      };
    }

    return {
      ...key,
      dir: getDirection(key.isDesc || isDesc)
    };
  };

  const compare = (byKey: SortKey<(T[number])>, a: T[number], b: T[number]) => {
    if (isFn(byKey)) {
      return byKey(a, b);
    }

    const { key, dir, collator: keyCollator } = getKeyFull(byKey);
    const valueA = getDeepEntry(a, key);
    const valueB = getDeepEntry(b, key);

    return (keyCollator || collator).compare(String(valueA), String(valueB)) * dir;
  };

  return {
    by: function (...keys: SortKey<(T[number])>[]) {
      return arr.slice().sort((a, b) => {
        for (let i = 0; i < keys.length; i++) {
          const order = compare(keys[i], a, b);

          if (order !== 0) {
            return order;
          }
        }

        return 0;
      }) as T;
    }
  };
}
