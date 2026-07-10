import { CollatorsCache, LRUCache } from './cache.js';

/**
 * Configuration for a specific sort key.
 */
export interface SortKeyConfig {
  /** Enables descending order for this specific key. */
  isDesc?: boolean;
  /** The object path to sort by. Can use dot annotation (e.g., "metadata.role") */
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
  /** A pre-configured Collator instance for string comparison. */
  collator?: Intl.Collator;
  /** Options passed to the internal Intl.Collator */
  options?: Intl.CollatorOptions;
}

/**
 * @internal
 */
type CompiledGetter<T = object> = (obj: T) => unknown;

/**
 * @internal
 */
type SortCriterion<T>
  = | {
    isFn: true;
    compare: SortKeyFn<T>;
  }
  | {
    isFn: false;
    isDeep: boolean;
    key: string;
    desc: boolean;
    collator: Intl.Collator;
    resolve: CompiledGetter<T> | ((obj: T) => unknown);
  };

/**
 * @internal
 */
type SortValueCriterion<T> = Exclude<SortCriterion<T>, { isFn: true }>;

const GETTER_CACHE_MAX = 256;

/**
 * @internal
 */
const getterCache = new LRUCache<CompiledGetter>(GETTER_CACHE_MAX);

/**
 * @internal
 * Converts a dot-separated path string into a reusable accessor function.
 */
function compileGetter(path: string): CompiledGetter {
  const cached = getterCache.get(path);
  if (cached) {
    return cached;
  }

  const parts = path.split('.');
  const len = parts.length;

  let getter: CompiledGetter;
  if (len === 2) {
    const p0 = parts[0];
    const p1 = parts[1];
    getter = (obj) => {
      if (obj === null || obj === undefined) {
        return;
      }
      const next = (obj as Record<string, unknown>)[p0];

      if (next === null || next === undefined) {
        return;
      }

      return (next as Record<string, unknown>)[p1];
    };
  } else if (len === 3) {
    const p0 = parts[0];
    const p1 = parts[1];
    const p2 = parts[2];
    getter = (obj) => {
      if (obj === null || obj === undefined) {
        return;
      }
      const n0 = (obj as Record<string, unknown>)[p0];
      if (n0 === null || n0 === undefined) {
        return;
      }
      const n1 = (n0 as Record<string, unknown>)[p1];

      if (n1 === null || n1 === undefined) {
        return;
      }

      return (n1 as Record<string, unknown>)[p2];
    };
  } else {
    getter = (obj) => {
      let current: unknown = obj;
      for (let i = 0; i < len; i++) {
        if (current === null || current === undefined) {
          return;
        }
        current = (current as Record<string, unknown>)[parts[i]];
      }
      return current;
    };
  }

  getterCache.set(path, getter);
  return getter;
}

/**
 * @internal
 * Normalizes and pre-compiles various sort keys into a uniform criteria array.
 */
function buildSortCriteria<T>(
  keys: SortKey<T>[],
  globalDesc: boolean,
  globalCollator: Intl.Collator
): {
  criteria: SortCriterion<T>[];
  hasFn: boolean;
} {
  const criteria = new Array<SortCriterion<T>>(keys.length);
  let hasFn = false;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof key === 'function') {
      hasFn = true;
      criteria[i] = {
        isFn: true,
        compare: key
      };
      continue;
    }

    let path: string;
    let desc = globalDesc;
    let collator = globalCollator;

    if (typeof key === 'string') {
      path = key;
    } else {
      path = key.key;
      if (typeof key.isDesc !== 'undefined') {
        desc = key.isDesc;
      }
      if (typeof key.collator !== 'undefined') {
        collator = key.collator;
      }
    }

    const isDeep = path.includes('.');

    criteria[i] = {
      isFn: false,
      isDeep,
      key: path,
      desc,
      collator,
      resolve: isDeep
        ? compileGetter(path) as CompiledGetter<T>
        : (obj: T) => (obj as Record<string, unknown>)[path]
    };
  }

  return { criteria, hasFn };
}

/**
 * @internal
 * 
 * Fast-path engine optimized for single-criterion sorting.
 * Bypasses loop and matrix overhead to maximize performance; isolated from {@link sortManyCriteria}.
 */
function sortSingleCriterion<T extends object[]>(
  arr: T,
  criterion: SortValueCriterion<T[number]>
): T {
  const len = arr.length;
  if (!criterion.isDeep) {
    const sortedArr = [...arr] as T;
    const key = criterion.key;
    let firstVal: unknown = undefined;

    for (let i = 0; i < len; i++) {
      const value = (arr[i] as Record<string, unknown>)[key];
      if (firstVal === undefined && value !== undefined && value !== null) {
        firstVal = value;
        break;
      }
    }

    if (typeof firstVal === 'string') {
      const collator = criterion.collator;
      if (criterion.desc) {
        return (sortedArr.sort((a, b) => collator.compare(
          ((b as Record<string, string>)[key] ?? ''),
          ((a as Record<string, string>)[key] ?? '')
        ))) as T;
      }

      return (sortedArr.sort((a, b) => collator.compare(
        ((a as Record<string, string>)[key] ?? ''),
        ((b as Record<string, string>)[key] ?? '')
      ))) as T;
    }

    return (sortedArr.sort((a, b) => {
      const valA = (a as Record<string, unknown>)[key];
      const valB = (b as Record<string, unknown>)[key];
      if (valA === valB) {
        return 0;
      }
      if (valA === undefined || valA === null) {
        return 1;
      }
      if (valB === undefined || valB === null) {
        return -1;
      }
      return criterion.desc ? (valA < valB ? 1 : -1) : (valA < valB ? -1 : 1);
    })) as T;
  }

  const values = new Array<unknown>(len);
  const indices = new Int32Array(len);

  let firstVal: unknown = undefined;
  for (let i = 0; i < len; i++) {
    indices[i] = i;
    const value = criterion.resolve(arr[i]);
    values[i] = value;
    if (firstVal === undefined && value !== undefined && value !== null) {
      firstVal = value;
    }
  }

  if (typeof firstVal === 'string') {
    const collator = criterion.collator;
    if (criterion.desc) {
      indices.sort((a, b) => {
        const res = collator.compare(values[a] as string ?? '', values[b] as string ?? '');
        return res === 0 ? a - b : -res;
      });
    } else {
      indices.sort((a, b) => {
        const res = collator.compare(values[a] as string ?? '', values[b] as string ?? '');
        return res === 0 ? a - b : res;
      });
    }
  } else if (typeof firstVal === 'number') {
    for (let i = 0; i < len; i++) {
      const value = values[i];
      values[i] = (value === undefined || value === null) ? Infinity : value;
    }

    if (criterion.desc) {
      indices.sort((a, b) => {
        const valA = values[a] as number;
        const valB = values[b] as number;
        return valA === valB ? a - b : valB - valA;
      });
    } else {
      indices.sort((a, b) => {
        const valA = values[a] as number;
        const valB = values[b] as number;
        return valA === valB ? a - b : valA - valB;
      });
    }
  } else {
    const compare = criterion.desc
      ? (a: number, b: number) => {
          const valA = values[a];
          const valB = values[b];
          if (valA === valB) {
            return a - b;
          }
          if (valA === undefined || valA === null) {
            return 1;
          }
          if (valB === undefined || valB === null) {
            return -1;
          }
          return valA < valB ? 1 : -1;
        }
      : (a: number, b: number) => {
          const valA = values[a];
          const valB = values[b];
          if (valA === valB) {
            return a - b;
          }
          if (valA === undefined || valA === null) {
            return 1;
          }
          if (valB === undefined || valB === null) {
            return -1;
          }
          return valA < valB ? -1 : 1;
        };

    indices.sort(compare);
  }

  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = arr[indices[i]];
  }

  return result as T;
}

/**
 * @internal
 * Advanced multi-pass sorting engine.
 * Pre-allocates an index matrix to handle sequential evaluation of multiple keys; isolated from {@link sortSingleCriterion}.
 */
function sortManyCriteria<T extends object[]>(
  arr: T,
  criteria: SortValueCriterion<T[number]>[]
): T {
  const len = arr.length;
  const numCriteria = criteria.length;
  const valuesByCriterion = new Array<unknown[]>(numCriteria);
  const indices = new Int32Array(len);

  for (let i = 0; i < numCriteria; i++) {
    valuesByCriterion[i] = new Array(len).fill(undefined);
  }

  for (let i = 0; i < len; i++) {
    indices[i] = i;
    const item = arr[i];
    for (let j = 0; j < numCriteria; j++) {
      valuesByCriterion[j][i] = criteria[j].resolve(item);
    }
  }

  indices.sort((a, b) => {
    for (let i = 0; i < numCriteria; i++) {
      const criterion = criteria[i];
      const valA = valuesByCriterion[i][a];
      const valB = valuesByCriterion[i][b];

      if (valA === valB) {
        continue;
      }

      if (valA === undefined || valA === null) {
        return 1;
      }

      if (valB === undefined || valB === null) {
        return -1;
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        const res = criterion.collator.compare(valA, valB);
        if (res !== 0) {
          return criterion.desc ? -res : res;
        }

        continue;
      }

      return criterion.desc ? (valA < valB ? 1 : -1) : (valA < valB ? -1 : 1);
    }

    return a - b;
  });

  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = arr[indices[i]];
  }

  return result as T;
}

/**
 * @internal
 */
function compareSortItems<T>(criteria: SortCriterion<T>[], a: T, b: T): number {
  for (let i = 0; i < criteria.length; i++) {
    const criterion = criteria[i];

    if (criterion.isFn) {
      const res = criterion.compare(a, b);
      if (res !== 0) {
        return res;
      }
      continue;
    }

    const valA = criterion.resolve(a);
    const valB = criterion.resolve(b);

    if (valA === valB) {
      continue;
    }

    if (valA === undefined || valA === null) {
      return 1;
    }

    if (valB === undefined || valB === null) {
      return -1;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      const res = criterion.collator.compare(valA, valB);
      if (res !== 0) {
        return criterion.desc ? -res : res;
      }

      continue;
    }

    const res = valA < valB ? -1 : 1;
    return criterion.desc ? -res : res;
  }

  return 0;
}

/**
 * Function used to sort arrays of objects.
 * Uses {@link Intl.Collator} for locale-aware string comparisons.
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
  by(...keys: SortKey<(T[number])>[]): T;
} {
  const globalCollator = configs?.collator || CollatorsCache.get(configs?.locale, configs?.options);
  const globalDesc = !!configs?.isDesc;

  return {
    by: function (...keys: SortKey<(T[number])>[]): T {
      const len = arr.length;
      if (len <= 1 || keys.length === 0) {
        return [...arr] as T;
      }

      if (keys.length === 1) {
        const firstK = keys[0];

        if (typeof firstK === 'function') {
          return [...arr].sort(firstK) as T;
        }

        let path: string;
        let desc = globalDesc;
        let collator = globalCollator;

        if (typeof firstK === 'string') {
          path = firstK;
        } else {
          path = firstK.key;
          if (typeof firstK.isDesc !== 'undefined') {
            desc = firstK.isDesc;
          }
          if (typeof firstK.collator !== 'undefined') {
            collator = firstK.collator;
          }
        }

        const isDeep = path.includes('.');

        return sortSingleCriterion(arr, {
          isFn: false,
          isDeep,
          key: path,
          desc,
          collator,
          resolve: compileGetter(path)
        });
      }

      const { criteria, hasFn } = buildSortCriteria(keys, globalDesc, globalCollator);

      if (hasFn) {
        return [...arr].sort((a, b) => compareSortItems(criteria, a, b)) as T;
      }

      const valueCriteria = criteria as SortValueCriterion<T[number]>[];
      return sortManyCriteria(arr, valueCriteria);
    }
  };
}
