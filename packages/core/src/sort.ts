import { isFn, isNumber, isString } from './is.js';
import { getEntryAt } from './object.js';

/**
 * Configuration for a specific sort key.
 */
export interface SortKeyConfig {
  /** Enables descending order for this specific key. */
  isDesc?: boolean;
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

const buildCacheKey = (locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions) => {
  const locKey = Array.isArray(locales) ? locales.join(',') : (locales as string) || 'def';

  return `${locKey}-${options?.sensitivity}-${options?.numeric}-${options?.caseFirst}`;
};

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
    const key = buildCacheKey(locales, options);
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

  const compileKeyToComparator = (key: SortKey<(T[number])>): SortKeyFn<T[number]> => {
    if (isFn(key)) {
      return key;
    }

    const isStr = isString(key);
    const path = isStr ? key : key.key;
    const pathParts = path.split('.');
    const dir = getDirection(isStr ? isDesc : (key.isDesc ?? isDesc));
    const currentCollator = (isStr ? undefined : key.collator) || collator;

    const getter = pathParts.length === 1
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? (obj: T[number]) => (obj as any)[path]
      : (obj: T[number]) => getEntryAt(obj, pathParts);

    return (a: T[number], b: T[number]): number => {
      const valueA = getter(a);
      const valueB = getter(b);

      if (isNumber(valueA) && isNumber(valueB)) {
        return (valueA - valueB) * dir;
      }

      const strA = valueA == null ? '' : String(valueA);
      const strB = valueB == null ? '' : String(valueB);

      return currentCollator.compare(strA, strB) * dir;
    };
  };

  return {
    by: function (...keys: SortKey<(T[number])>[]) {
      const comparators = keys.map(compileKeyToComparator);
      const len = comparators.length;

      if (len === 1) {
        return arr.slice().sort(comparators[0]) as T;
      }

      return arr.slice().sort((a, b) => {
        for (let i = 0; i < len; i++) {
          const order = comparators[i](a, b);
          if (order !== 0) {
            return order;
          }
        }
        return 0;
      }) as T;
    }
  };
}
