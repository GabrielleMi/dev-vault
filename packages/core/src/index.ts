/**
 * Utility functions
 * @remarks
 * This library is an experimental project.
 * @alpha
 *
 * @packageDocumentation
 */

export {
  LRUCache,
  CollatorsCache,
  IntlCache,
  NumberFormatsCache
} from './cache';

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
  PUT,

  HTTP_BAD_REQUEST,
  HTTP_CONFLICT,
  HTTP_CREATED,
  HTTP_FORBIDDEN,
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_METHOD_NOT_ALLOWED,
  HTTP_NOT_FOUND,
  HTTP_NOT_MODIFIED,
  HTTP_NO_CONTENT,
  HTTP_OK,
  HTTP_UNAUTHORIZED,
  HTTP_UNPROCESSABLE_ENTITY,
  HTTP_CODES,

  EMPTY_OBJECT,
  EMPTY_ARRAY
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
  isEquivalent
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
  clamp,
  safeDivide
} from './number.js';

/** @category Objects */
export {
  getEntry,
  getEntryAt,
  pick,
  omit
} from './object.js';

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
  type AssertPositive,
  type Primitive,
  type Falsy
} from './types.js';
