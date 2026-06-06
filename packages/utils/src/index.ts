/**
 * Utility functions
 * @remarks
 * This library is an experimental project.
 * @alpha
 *
 * @packageDocumentation
 */

/** @category Constants */
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

/** @category Array */
export {
  safeArray,
  toArray,
  isIncluded,
  splitInChunks,

  type AssertArray
} from './array.js';

/** @category Security */
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

/** @category Validation */
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

/** @category Serialization */
export {
  safeStringify,
  safeParse
} from './json.js';

/** @category Cloning */
export {
  cloneDeep
} from './misc.js';

/** @category Math */
export {
  safeDivide
} from './number.js';

/** @category Objects */
export {
  getDeepEntry
} from './object.js';

export {
  ChainPromise
} from './promises.js';

/** @category Search */
export {
  search,

  type SearchKey,
  type SearchKeyConfig
} from './search.js';

/** @category Sort */
export {
  sort,

  type SortKeyConfig,
  type SortKeyFn,
  type SortKeyStr,
  type SortKey,
  type SortConfigs
} from './sort.js';

/** @category Strings */
export {
  safeJoin,
  normalizeStr,
  isStrEqualCi
} from './string.js';

/** @category Time */
export {
  convertTimeUnit,

  type ConvertableTimeUnit
} from './time.js';

/** @category Types */
export {
  type Positive,
  type AssertPositive
} from './types.js';
