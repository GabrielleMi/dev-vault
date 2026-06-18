import { isBigInt, isFn, isString } from './is.js';
import { getEntry } from './object.js';
import { OBJECT } from './constants.js';

/**
 * @internal
 * @useDeclaredType
 */
type StringifyParams = Parameters<typeof JSON.stringify>;
/**
 * @internal
 * @useDeclaredType
 */
type ParseParams = Parameters<typeof JSON.parse>;
/**
 * @internal
 * @useDeclaredType
 */
type ParseReviverParams = Parameters<Required<ParseParams>[1]>;

const CIRCULAR_PATH_PREFIX = '$:~' as const;

/**
 * @internal
 * Checks if a string represents a circular reference pointer.
 */
const isCircularPath = (value: unknown): value is `${typeof CIRCULAR_PATH_PREFIX}${string}` => isString(value) && value.startsWith(CIRCULAR_PATH_PREFIX);

/**
 * @internal
 * Custom replacer for JSON.stringify to handle circular dependencies and BigInt.
 */
function handleReplace(replacer?: StringifyParams[1] | ((key: string, value: unknown) => unknown)) {
  const visited = new Map<unknown, string>();

  const applyReplacer = (key: string, value: unknown) => {
    if (Array.isArray(replacer)) {
      return key === '' || replacer.includes(key) ? value : undefined;
    }
    return isFn(replacer) ? replacer(key, value) : value;
  };

  return function (this: Record<string, unknown>, key: string, value: unknown) {
    let finalValue = applyReplacer(key, value);

    if (typeof finalValue === OBJECT && finalValue !== null) {
      const parentPath = visited.get(this);
      const currentPath = parentPath ? `${parentPath}.${key}` : key;

      const existingPath = visited.get(finalValue);
      if (existingPath !== undefined) {
        return `${CIRCULAR_PATH_PREFIX}${existingPath ? '.' : ''}${existingPath}`;
      }

      visited.set(finalValue, currentPath);
    }

    if (isBigInt(finalValue)) {
      finalValue = `BigInt(${finalValue.toString()})`;
    }

    return finalValue;
  };
}

/**
 * A safe version of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify|JSON.stringify} that prevents circular dependency errors
 * and serializes `BigInt` values.
 * @remarks
 * Circular references are replaced with a path string prefixed by `$:~`.
 * `BigInt` values are serialized as `BigInt(value)`.
 * If stringification fails, returns `undefined` instead of throwing.
 * @param value - The value to stringify
 * @param replacer - A function or array to transform the results, same as {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#replacer | JSON.stringify}
 * @param space - Adds indentation/whitespace to the output.
 * @returns The JSON string or `undefined` if an error occurs.
 * @example
 * ```typescript
 * const obj = { a: 1n };
 * obj.self = obj;
 * safeStringify(obj); // '{"a":"BigInt(1)","self":"$:~"}'
 * ```
 * @see {@link safeParse} for safe parsing.
 */
export function safeStringify(
  value: StringifyParams[0],
  replacer?: StringifyParams[1] | ((key: string, value: unknown) => unknown),
  space?: StringifyParams[2]
): undefined | string {
  if (value === undefined) {
    return;
  }

  try {
    return JSON.stringify(value, handleReplace(replacer), space);
  } catch (_error) {
    return;
  }
}

/**
 * @internal
 * Recursively resolves circular paths back to object references.
 */
function resolveReferences(root: Record<string, unknown>) {
  const visited = new WeakSet();

  function walk(obj: unknown) {
    if (!obj || typeof obj !== OBJECT || visited.has(obj)) {
      return;
    }

    visited.add(obj);

    const target = obj as Record<string, unknown>;

    for (const key of Object.keys(target)) {
      const val = target[key];

      if (isCircularPath(val)) {
        let path = val.replace(CIRCULAR_PATH_PREFIX, '');
        if (path.startsWith('.')) {
          path = path.slice(1);
        }
        target[key] = path ? getEntry(root, path) : root;
      } else {
        walk(val);
      }
    }
  }

  walk(root);
}

/**
 * @internal
 * Custom reviver for JSON.parse to restore BigInt and circular references.
 */
function handleRevive(reviver?: ParseParams[1]) {
  const revive = (key: ParseReviverParams[0], val: ParseReviverParams[1]) => {
    return reviver ? reviver(key, val) : val;
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
 * A safe version of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse|JSON.parse} that handles circular references and `BigInt` values
 * serialized by {@link safeStringify}.
 *
 * @remarks
 * If the input string is invalid JSON, the function returns the provided `fallback`
 * value instead of throwing an error.
 * @param value - The JSON string to parse.
 * @param fallback - The value to return if parsing fails.
 * @param reviver - A transformation function, same as {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#reviver | JSON.parse}.
 * @returns The parsed object or the fallback value.
 * @example
 * ```typescript
 * const json = '{"a":"BigInt(1)","self":"$:~"}';
 * const obj = safeParse(json);
 * console.log(obj.a); // 1n
 * console.log(obj.self === obj); // true
 * ```
 * @see {@link safeStringify} for safe JSON stringification.
 */
export function safeParse(
  value: ParseParams[0],
  fallback?: unknown,
  reviver?: ParseParams[1]
) {
  try {
    const parsed = JSON.parse(value, handleRevive(reviver));

    if (typeof parsed === OBJECT && parsed !== null && value.includes(CIRCULAR_PATH_PREFIX)) {
      resolveReferences(parsed as Record<string, unknown>);
    }

    return parsed;
  } catch (_error) {
    return fallback;
  }
}
