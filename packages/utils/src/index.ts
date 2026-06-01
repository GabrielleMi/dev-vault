/**
 * Utility functions
 * @packageDocumentation
 *
 * @remarks
 * This library is an experimental project.
 *
 * @alpha
 */

export {
  STRING,
  NUMBER,
  BIGINT,
  BOOLEAN,
  OBJECT,
  FUNCTION,

  DAY,
  DAYS_PER_WEEK,
  HOUR,
  HOURS_PER_DAY,
  MILLISECOND,
  MINUTE,
  MIN_PER_HOUR,
  MONTH,
  MONTHS_PER_YEAR,
  MS_PER_SEC,
  SECOND,
  SEC_PER_MIN,
  WEEK,
  YEAR,

  POST,
  PATCH,
  GET,
  DELETE,
  HTTP_CODES
} from './constants.js';

export {
  safeArray,
  toArray,
  isIncluded,
  splitInChunks
} from './array.js';

export {
  buildCSP,

  type CSP,
  type CSPDirectiveList,
  type CSPSource,
  type CSPSelf,
  type CSPAll,
  type CSPNone,
  type FrameAncestorSource
} from './csp.js';

export {
  isObject,
  isEmpty,
  isArray,
  isBigInt,
  isBool,
  isFn,
  isNil,
  isNumber,
  isPrimitive,
  isString,
  isEquivalent,

  type Primitive,
  type Falsy
} from './is.js';

export {
  safeStringify,
  safeParse
} from './json.js';

export {
  cloneDeep
} from './misc.js';

export {
  safeDivide
} from './number.js';

export {
  getDeepEntry
} from './object.js';

export {
  search,

  type SearchKey,
  type SearchKeyConfig
} from './search.js';

export {
  sort,

  type SortKeyConfig,
  type SortKeyFn,
  type SortKeyStr,
  type SortKey,
  type SortConfigs
} from './sort.js';

export {
  safeJoin,
  isStrEqualCi
} from './string.js';

export {
  convertTimeUnit,

  type ConvertableTimeUnit
} from './time.js';

export {
  type Positive
} from './types.js';
