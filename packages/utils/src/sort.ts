import { isFn, isString } from './is.js';
import { getDeepEntry } from './object.js';
import { safeStringify } from './json.js';

export type SortKeyConfig = {
  isDesc?: true;
  key: SortKeyStr;
  collator?: Intl.Collator;
};

export type SortKeyFn<T> = (a: T, b: T) => number;

export type SortKeyStr = string;

export type SortKey<T> = SortKeyStr | SortKeyFn<T> | SortKeyConfig;

export type SortConfigs = {
  locale?: Intl.LocalesArgument;
  isDesc?: true;
  collator?: Intl.Collator;
  options?: Intl.CollatorOptions;
};

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
 * @examplesFromTests ../test/sort.test.js
 */
export const sort = <T extends object[]>(arr: T, configs?: SortConfigs) => {
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
};
