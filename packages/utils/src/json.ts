import { isBigInt, isFn, isObject, isString } from './is.js';
import { getDeepEntry } from './object.js';

type StringifyParams = Parameters<typeof JSON.stringify>;
type StringifyReplacerParams = StringifyParams[1] | ((key: string, value: unknown) => unknown);
type ParseParams = Parameters<typeof JSON.parse>;
type ParseReviverParams = Parameters<Required<ParseParams>[1]>;

const CIRCULAR_PATH_PREFIX = '$:~' as const;
const isCircularPath = (value: unknown): value is `${typeof CIRCULAR_PATH_PREFIX}${string}` => isString(value) && value.startsWith(CIRCULAR_PATH_PREFIX);

function handleReplace(replacer?: StringifyReplacerParams) {
  const objectPaths = new Map();
  const visitedObjects = new Map();
  let init: unknown = null;

  const replace = (key: string, value: unknown) => {
    if (Array.isArray(replacer)) {
      return replacer.includes(key) ? undefined : value;
    }

    return isFn(replacer) ? replacer(key, value) : value;
  };

  return function (this: object, key: string, value: unknown) {
    const parentPath = objectPaths.get(this) || '';
    const currentPath = Array.isArray(this) ? `${parentPath}[${key}]` : `${parentPath ? `${parentPath}.` : ''}${key}`;
    const isObj = isObject(value);

    if (isObj) {
      objectPaths.set(value, currentPath);
    }

    const existingPath = visitedObjects.get(value);

    let finalValue = value;

    if (existingPath) {
      finalValue = `${CIRCULAR_PATH_PREFIX}${existingPath.startsWith('[') ? '' : '.'}${existingPath}`;
    } else if (isObj) {
      visitedObjects.set(value, currentPath);
    }

    if (!init) {
      init = value;
    } else if (finalValue === init) {
      finalValue = CIRCULAR_PATH_PREFIX;
    }

    if (isBigInt(finalValue)) {
      finalValue = `BigInt(${finalValue.toString()})`;
    }

    return replace(key, finalValue);
  };
};

/**
 * JSON.stringify, but it doesn't throw. Safely stringifies circular paths and bigints.
 *
 * @see
 * {@link safeParse} for safe parsing
 */
export function safeStringify(
  value: StringifyParams[0],
  replacer?: StringifyReplacerParams,
  space?: StringifyParams[2]
): undefined | string {
  if (!value) {
    return;
  }

  try {
    return JSON.stringify(value, handleReplace(replacer), space);
  } catch (_error) {
    return;
  }
}

function resolveReferences(root: Record<string, unknown>) {
  const visited = new WeakSet();

  function walk(obj: unknown) {
    if (!obj || !isObject(obj) || visited.has(obj)) {
      return;
    }

    visited.add(obj);

    for (const key of Object.keys(obj)) {
      const val = (obj as Record<string, unknown>)[key];

      if (isCircularPath(val)) {
        const path = val.replace(CIRCULAR_PATH_PREFIX, '');
        obj[key] = path ? getDeepEntry(root, path) : root;
      } else {
        walk(val);
      }
    }
  }

  walk(root);
}

function handleRevive(reviver?: ParseParams[1]) {
  const revive = (key: ParseReviverParams[0], val: ParseReviverParams[1]) => {
    if (reviver) {
      return reviver(key, val);
    }

    return val;
  };

  return function (key: string, val: unknown) {
    if (isString(val) && val.startsWith('BigInt(')) {
      const number = val.replace(/^BigInt\(|\)$/g, '');

      return revive(key, BigInt(number));
    }

    return revive(key, val);
  };
}

/**
 * JSON.parse, but it doesn't throw. Parses back circular paths and bigint safely.
 *
 * @see
 * {@link safeStringify} for safe JSON.stringify
 */
export function safeParse(
  value: ParseParams[0],
  fallback?: unknown,
  reviver?: ParseParams[1]
) {
  try {
    const parsed = JSON.parse(value, handleRevive(reviver));

    if (value.includes(CIRCULAR_PATH_PREFIX)) {
      resolveReferences(parsed);
    }

    return parsed;
  } catch (_error) {
    return fallback;
  }
}
