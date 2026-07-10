import { DELETE, GET, isArray, isBool, isDefined, isNil, isNumber, isObject, isString, merge, NOOP, PATCH, POST, PUT, safeJoin } from '@GabrielleMi/core';

export type QueryValue = string | number | boolean | null | undefined | QueryValue[] | QueryObject;
export interface QueryObject {
  [key: string]: QueryValue;
}

export type BodyValue = string | number | boolean | null | undefined | Date | BodyValue[] | BodyObject;

export interface BodyObject {
  [key: string]: BodyValue;
}

/**
 * @internal
 */
type SerializableLeaf = string | number | boolean | Date | null | undefined;

/**
 * @internal
 */
type FormLikeValue = string | Blob;

/**
 * @internal
 */
type FormLikeShape = Record<string, FormLikeValue | FormLikeValue[]>;

/**
 * @internal
 */
type ResolvedSerializerOptions = Required<SerializerOptions>;

/**
 * @internal
 */
type NormalizedScalar = boolean | null | number | string | undefined;

/**
 * @inline
 */
export interface SharedSerializerOptions {
  /**
   * Controls how arrays are serialized.
   * - `'bracket'`: Serializes arrays using bracket notation (e.g., `tags[]=a&tags[]=b`).
   * - `'comma'`: Serializes arrays as a single comma-separated value (e.g., `tags=a,b`).
   * - `'repeat'`: Serializes arrays by repeating the key for each value (e.g., `tags=a&tags=b`).
   * - `'indices'`: Serializes arrays using bracket notation with indices (e.g., `tags[0]=a&tags[1]=b`).
   */
  arrayFormat?: 'bracket' | 'comma' | 'repeat' | 'indices';
  /**
   * Controls whether empty arrays are omitted from the output.
   */
  omitEmptyArray?: boolean;
  /**
   * Controls whether empty strings are omitted from the output.
   */
  omitEmptyString?: boolean;
  /**
   * Controls whether empty objects are omitted from the output.
   */
  omitEmptyObject?: boolean;
  /**
   * Controls whether `undefined` values are omitted from the output.
   */
  omitUndefined?: boolean;
}

/**
 * @inheritDoc SharedSerializerOptions
 */
export interface SerializerOptions extends SharedSerializerOptions {
  /**
   * Controls how object keys are serialized.
   * - `'dot'`: Serializes nested objects using dot notation (e.g., `filter.active=true`).
   * - `'bracket'`: Serializes nested objects using bracket notation (e.g., `filter[active]=true`).
   * - `'json'`: Serializes the entire object as a JSON string (e.g., `filter={"active":true}`).
   */
  objectFormat?: 'dot' | 'bracket' | 'json';
  /**
   * Controls how boolean values are serialized.
   * - `'numeric'`: Serializes `true` as `"1"` and `false` as `"0"`.
   * - `'literal'`: Serializes `true` as `"true"` and `false` as `"false"`.
   */
  booleanFormat?: 'numeric' | 'literal';
  /**
   * Controls how `null` values are serialized.
   * - `'omit'`: Excludes `null` values from the serialized output.
   * - `'empty'`: Serializes `null` values as empty strings.
   * - `'literal'`: Serializes `null` values as the string `"null"`.
   */
  nullMode?: 'omit' | 'empty' | 'literal';
}

/**
 * @inheritDoc SharedSerializerOptions
 */
export interface BodySerializerOptions extends SharedSerializerOptions {
  /**
   * Controls how the cleaned body is encoded.
   */
  format?: BodyFormat;
  omitNull?: boolean;
}

export type BodyInput
  = | string
    | URLSearchParams
    | FormData
    | Blob
    | ArrayBuffer
    | File
    | ReadableStream<Uint8Array>
    | null
    | undefined
    | BodyValue
    | BodyValue[];

/**
 * @inline
 */
export type BodyFormat = 'form' | 'json' | 'text' | 'urlencoded';

/**
 * @internal
 */
const getHeader = (headers: RequestInit['headers'], name: string) => {
  if (!headers) {
    return undefined;
  }

  if (headers instanceof Headers) {
    return headers.get(name) ?? undefined;
  }

  if (Array.isArray(headers)) {
    const headerEntry = headers.find(([headerName]) => headerName.toLowerCase() === name.toLowerCase());
    return headerEntry?.[1];
  }

  const matchingKey = Object.keys(headers).find((headerName) => headerName.toLowerCase() === name.toLowerCase());
  const headerValue = matchingKey ? headers[matchingKey] : undefined;

  return isString(headerValue) ? headerValue : undefined;
};

/**
 * A secure wrapper around the native `fetch` API providing generic typing,
 * strict HTTP status handling, and error chaining preservation via `cause`.
 *
 * @template TData The expected type of the response data. Defaults to `unknown`.
 * @param args The exact same arguments accepted by the native `fetch` API (URL, options).
 * @returns A promise that resolves to an object containing the original response and a typed `data` field. For no-content statuses (204, 205, 304), `data` is `null`.
 * @throws {Error} Throws an error if:
 * - The HTTP status is not "ok" (4xx or 5xx).
 * @example
 * ```ts
 * interface Plant { id: string; name: string; }
 *
 * try {
 * const { data } = await ftch<Plant>('/api/plants/1');
 * console.log(data.name); // Fully typed
 * } catch (error) {
 * if (error instanceof Error) {
 * console.error(error.message);
 * }
 * }
 * ```
 * @see {@link fetch}
 * @see {@link Response.json}
 * @see {@link Response.text}
 * @see {@link Response.blob}
 * @see {@link Ftcher}
 */
export async function ftch<TData = unknown>(...args: Parameters<typeof fetch>): Promise<{ data: TData | null } & Response> {
  try {
    const response = await fetch(...args);
    const responseWithData = response as Response & { data: TData | null };

    if (response.status === 204 || response.status === 205 || response.status === 304) {
      responseWithData.data = null;
      return responseWithData;
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `HTTP Error : ${response.status} ${response.statusText}`,
        {
          cause: response
        }
      );
    }

    const contentType = getHeader(response.headers, 'content-type') || '';
    let data: unknown;

    if (contentType.includes('application/json') || contentType.endsWith('+json')) {
      data = await response.json();
    } else if (contentType.includes('text/')) {
      data = await response.text();
    } else {
      data = await response.blob();
    }

    responseWithData.data = data as TData;
    return responseWithData;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new TypeError('An unknown network error occurred.', { cause: e });
  }
}

/**
 * @internal
 */
const isReadableStreamLike = (value: unknown): value is ReadableStream<Uint8Array> => {
  return isDefined(typeof ReadableStream) && value instanceof ReadableStream;
};

/**
 * @internal
 */
const isFileLike = (value: unknown): value is Blob | File => {
  return value instanceof Blob || (isDefined(typeof File) && value instanceof File);
};

/**
 * @internal
 */
const resolveSerializerOptions = (options?: SerializerOptions): ResolvedSerializerOptions => {
  return merge(
    {
      arrayFormat: 'repeat',
      objectFormat: 'bracket',
      booleanFormat: 'literal',
      omitEmptyArray: false,
      omitEmptyString: false,
      omitEmptyObject: false,
      omitUndefined: true,
      nullMode: 'omit'
    },
    options || {}
  );
};

/**
 * @internal
 */
const resolveBodySerializerOptions = (options: BodySerializerOptions = {}): ResolvedSerializerOptions => {
  return resolveSerializerOptions({
    ...options,
    nullMode: options.omitNull ? 'omit' : 'literal',
    objectFormat: 'bracket',
    booleanFormat: 'literal'
  });
};

/**
 * @internal
 */
const resolveBodyFormat = (contentType: string | undefined, options: BodySerializerOptions = {}): BodyFormat => {
  if (options.format) {
    return options.format;
  }

  if (!contentType) {
    return 'text';
  }

  if (contentType.includes('application/json') || contentType.endsWith('+json')) {
    return 'json';
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return 'urlencoded';
  }

  if (contentType.includes('multipart/form-data')) {
    return 'form';
  }

  return 'text';
};

/**
 * @internal
 */
const normalizeScalarValue = (
  value: SerializableLeaf,
  options: SerializerOptions
): NormalizedScalar => {
  if (typeof value === 'undefined') {
    return options.omitUndefined ? undefined : value;
  }

  if (value === null) {
    switch (options.nullMode) {
      case 'omit':
        return undefined;
      case 'empty':
        return '';
      case 'literal':
        return null;
      default:
        return undefined;
    }
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
};

/**
 * @internal
 */
const serializeScalar = (value: SerializableLeaf, options: SerializerOptions): undefined | string => {
  const normalized = normalizeScalarValue(value, options);

  if (typeof normalized === 'undefined') {
    return options.omitUndefined ? undefined : 'undefined';
  }

  if (normalized === null) {
    return 'null';
  }

  if (isBool(normalized)) {
    switch (options.booleanFormat) {
      case 'literal':
        return normalized ? 'true' : 'false';
      case 'numeric':
      default:
        return normalized ? '1' : '0';
    }
  }

  return String(normalized);
};

/**
 * @internal
 */
const isScalar = (value: unknown): value is SerializableLeaf => {
  return isString(value) || isNumber(value) || isBool(value) || value instanceof Date || isNil(value);
};

/**
 * @internal
 */
const scalarSerialize = (
  value: unknown,
  options: SerializerOptions
): undefined | string => {
  if (isScalar(value)) {
    return serializeScalar(value, options);
  }

  return undefined;
};

/**
 * @internal
 */
const appendFormLikeEntries = (
  target: FormData | URLSearchParams,
  entries: FormLikeShape
) => {
  Object.entries(entries).forEach(([ key, value ]) => {
    const values = Array.isArray(value) ? value : [value];

    values.forEach((entry) => {
      if (target instanceof FormData) {
        target.append(key, entry);
        return;
      }

      if (isString(entry)) {
        target.append(key, entry);
      }
    });
  });

  return target;
};

/**
 * @internal
 */
const normalizeJsonValue = (
  value: unknown,
  options: ResolvedSerializerOptions
): unknown => {
  if (isScalar(value)) {
    const normalized = normalizeScalarValue(value, options);

    if (!isDefined(normalized)) {
      return undefined;
    }

    if (options.omitEmptyString && normalized === '') {
      return undefined;
    }

    return normalized;
  }

  if (isFileLike(value)) {
    return value;
  }

  if (isArray(value)) {
    const normalized = value
      .map((item) => normalizeJsonValue(item, options))
      .filter(isDefined);

    if (options.omitEmptyArray && normalized.length === 0) {
      return undefined;
    }

    return normalized;
  }

  if (isObject(value)) {
    const normalized: Record<string, unknown> = {};

    Object.keys(value).forEach((subKey) => {
      const nextValue = normalizeJsonValue(value[subKey], options);

      if (isDefined(nextValue)) {
        normalized[subKey] = nextValue;
      }
    });

    if (options.omitEmptyObject && Object.keys(normalized).length === 0) {
      return undefined;
    }

    return normalized;
  }

  return value;
};

/**
 * @internal
 */
const appendFormLikeValue = (format: FormLikeShape, key: string, value: FormLikeValue) => {
  const currentValue = format[key];

  if (typeof currentValue === 'undefined') {
    format[key] = value;
    return;
  }

  if (Array.isArray(currentValue)) {
    currentValue.push(value);
    return;
  }

  format[key] = [ currentValue, value ];
};

/**
 * @internal
 */
const mergeFormLikeShapes = (target: FormLikeShape, source: FormLikeShape) => {
  Object.entries(source).forEach(([ key, value ]) => {
    const values = Array.isArray(value) ? value : [value];

    values.forEach((entry) => {
      appendFormLikeValue(target, key, entry);
    });
  });

  return target;
};

/**
 * @internal
 */
const formatKey = (key: number | string, format: SerializerOptions['arrayFormat'] | SerializerOptions['objectFormat']) => {
  switch (format) {
    case 'comma':
      return `,${key}`;
    case 'dot':
      return `.${key}`;
    case 'bracket':
      return '[]';
    case 'indices':
      return `[${key}]`;
    case 'repeat':
    case 'json':
    default:
      return '';
  }
};

/**
 * @internal
 */
const formatFormLike = (
  key: string,
  value: unknown,
  options: ResolvedSerializerOptions
) => {
  const format: FormLikeShape = {};
  const val = scalarSerialize(value, options);

  if (isDefined(val)) {
    appendFormLikeValue(format, key, val);
    return format;
  }

  if (isFileLike(value)) {
    appendFormLikeValue(format, key, value);
    return format;
  }

  if (isObject(value)) {
    const mergeObjectEntries = (resolveSubKey: (subKey: string) => string) => {
      Object.keys(value).forEach((subKey) => {
        const v = value[subKey];
        mergeFormLikeShapes(format, formatFormLike(resolveSubKey(subKey), v, options));
      });
    };

    if (options.objectFormat === 'json') {
      // Keep top-level keys when objectFormat=json to avoid emitting an empty query key.
      if (key) {
        const normalized = normalizeJsonValue(value, options);

        if (isDefined(normalized)) {
          appendFormLikeValue(format, key, JSON.stringify(normalized));
        }
      } else {
        mergeObjectEntries((subKey) => subKey);
      }
    } else {
      mergeObjectEntries((subKey) => (key ? `${key}${formatKey(subKey, options.objectFormat === 'bracket' ? 'indices' : options.objectFormat)}` : subKey));
    }

    return format;
  }

  if (isArray(value)) {
    value.forEach((v, index) => {
      const k = formatKey(index, options.arrayFormat);

      mergeFormLikeShapes(
        format,
        formatFormLike(
          key ? `${key}${k}` : k,
          v,
          options
        )
      );
    });
  }

  return format;
};

/**
 * Serializes a nested query object into a URL query string.
 *
 * Supports scalar values, arrays, and nested objects with configurable
 * formatting for arrays, objects, booleans, empty values, and nulls.
 *
 * @returns The serialized query string without a leading `?`.
 * @example
 * ```ts
 * serializeQuery({
 *   page: 1,
 *   search: 'fern',
 *   tags: ['indoor', 'green'],
 *   filter: { active: true }
 * });
 * ```
 */
export const serializeQuery = (
  query: QueryObject,
  options?: SerializerOptions
): string => {
  return appendFormLikeEntries(
    new URLSearchParams(),
    formatFormLike('', query, resolveSerializerOptions(options))
  ).toString();
};

/** @overload */
export function buildRequestBody(
  body: BodyInput,
  options?: BodySerializerOptions
): BodyInit | undefined;

/** @overload */
export function buildRequestBody(
  body: BodyInput,
  options: BodySerializerOptions & { format: 'form' }
): FormData | undefined;

/** @overload */
export function buildRequestBody(
  body: BodyInput,
  options: BodySerializerOptions & { format: 'urlencoded' }
): URLSearchParams | undefined;

/** @overload */
export function buildRequestBody(
  body: BodyInput,
  options: BodySerializerOptions & { format: 'json' | 'text' }
): string | undefined;

/**
 * Serializes a request body based on the provided options or returns native web API types as-is.
 * @param body - The request body input (plain objects, strings, Blobs, Streams, etc.).
 * @param options - Serialization settings that dictate the output format.
 * @returns A value compatible with the native `fetch` body option, or `undefined`.
 */
export function buildRequestBody(
  body: BodyInput,
  options: BodySerializerOptions = {}
): BodyInit | undefined {
  if (isNil(body)) {
    return undefined;
  }

  if (isString(body)) {
    return body;
  }

  if (body instanceof FormData || body instanceof URLSearchParams || body instanceof Blob) {
    return body;
  }

  if (body instanceof ArrayBuffer) {
    return body;
  }

  if (isReadableStreamLike(body)) {
    return body;
  }

  const cleaned = normalizeJsonValue(body, resolveBodySerializerOptions(options));
  const serializerOptions = resolveBodySerializerOptions(options);
  const format = options.format ?? 'text';

  switch (format) {
    case 'json':
      return JSON.stringify(cleaned);
    case 'urlencoded':
      return appendFormLikeEntries(new URLSearchParams(), formatFormLike('', cleaned as BodyObject, serializerOptions));
    case 'form':
      return appendFormLikeEntries(new FormData(), formatFormLike('', cleaned as BodyObject, serializerOptions));
    case 'text':
    default:
      return String(cleaned);
  }
}

/**
 * Constructs a full URL string from a base URL and pathname.
 *
 * Collapses duplicated slashes in the resulting path while preserving
 * the scheme separator (`http://` or `https://`).
 *
 * @param baseURL - The base URL (origin or origin + base path).
 * @param pathname - The pathname to append to the base URL.
 * @returns A normalized URL string.
 * @example
 * ```ts
 * constructURL('https://api.example.com/', '/v1//plants');
 * // "https://api.example.com/v1/plants"
 * ```
 */
export function constructURL(
  baseURL?: string,
  pathname?: string
): string {
  return safeJoin([ baseURL, pathname ], '/').replace(/([^:]\/)\/+/g, '$1');
}

/**
 * @internal
 */
function createCombinedAbortSignal(signals: Array<AbortSignal | null | undefined>) {
  const active = signals.filter((s) => !isNil(s));
  if (active.length <= 1) {
    return {
      cleanup: NOOP,
      signal: active[0]
    };
  }

  if (typeof AbortSignal.any === 'function') {
    return {
      cleanup: NOOP,
      signal: AbortSignal.any(active)
    };
  }

  const controller = new AbortController();
  const alreadyAborted = active.find((s) => s.aborted);
  if (alreadyAborted) {
    controller.abort(alreadyAborted.reason);
    return { cleanup: NOOP, signal: controller.signal };
  }

  const onAbort = (e: Event) => {
    if (!controller.signal.aborted) {
      controller.abort((e.target as AbortSignal).reason);
    }
  };

  active.forEach((s) => s.addEventListener('abort', onAbort));
  return {
    cleanup: () => active.forEach((s) => s.removeEventListener('abort', onAbort)),
    signal: controller.signal
  };
}

/**
 * @inline
 */
type FtcherRequestInit = RequestInit & { query?: Record<string, unknown> };

/**
 * @inline
 * Client configuration.
 */
export type FtcherOptions = {
  /** Base origin used to resolve request pathnames. */
  baseURL: string;
  /** Options passed to the built-in {@link serializeQuery} serializer. */
  querySerializerOptions?: SerializerOptions;
  /** Options passed to the built-in {@link buildRequestBody} serializer. */
  bodySerializerOptions?: BodySerializerOptions;
  /** Default headers applied to every request. Request-specific headers override these defaults. */
  headers?: RequestInit['headers'];
  hooks?: {
    /** Hook called before a request is sent. Can modify the request init object. */
    beforeRequest?: (requestInit: RequestInit) => RequestInit | Promise<RequestInit>;
    /** Hook called when a request results in an error. */
    onError?: (error: Error) => void | Promise<void>;
    /** Hook called when a request is successful. */
    onSuccess?: (response: Response) => void | Promise<void>;
    /** Hook called when a request is settled, regardless of success or error. */
    onSettled?: (response?: Response | null, error?: Error | null) => void | Promise<void>;
    /** Hook called when a request is aborted. */
    onAbort?: (event: Event) => void | Promise<void>;
  };
} & Omit<RequestInit, 'body' | 'method'>;

/**
 * Creates a small HTTP client bound to a fixed origin.
 *
 * Query strings and request bodies are serialized with the built-in
 * {@link serializeQuery} and {@link buildRequestBody} helpers configured through
 * serializer options.
 *
 * @remarks
 * Request-specific headers override default headers. The effective `Content-Type`
 * header is used to decide how the built-in body serializer serializes object and
 * array payloads.
 * @returns An object exposing HTTP verb helpers bound to the configured origin.
 *
 * @class
 * @sortStrategy source-order
 *
 */
export class Ftcher {
  private isDestroyed = false;
  private readonly internalAbortController = new AbortController();
  private readonly defaultRequestInit: RequestInit;
  private readonly options: FtcherOptions;

  constructor(options: FtcherOptions) {
    this.options = options;
    this.defaultRequestInit = {
      cache: options.cache,
      credentials: options.credentials,
      headers: options.headers,
      integrity: options.integrity,
      keepalive: options.keepalive,
      mode: options.mode,
      redirect: options.redirect,
      referrer: options.referrer,
      referrerPolicy: options.referrerPolicy,
      signal: options.signal,
      window: options.window
    };

    this.listenForAbort = this.listenForAbort.bind(this);
  }

  private listenForAbort(event: Event) {
    if (!this.isDestroyed) {
      this.options.hooks?.onAbort?.(event);
    }
  }

  /**
   * @template TData - The expected type of the response data. Defaults to `unknown`.
   * @param pathname The pathname to append to the base URL.
   * @param requestInit The request initialization options. Will override the default options.
   * @returns A promise that resolves to the response data.
   */
  private async handleMethod<TData = unknown>(
    method: string,
    pathname: string,
    { query, ...requestInit }: FtcherRequestInit = {}
  ) {
    if (this.isDestroyed) {
      throw new Error('This Ftcher instance has been destroyed.');
    }

    const url = new URL(constructURL(this.options.baseURL, pathname));

    if (query) {
      url.search = serializeQuery(query as QueryObject, this.options.querySerializerOptions);
    }

    const mergedHeaders = new Headers(this.defaultRequestInit.headers);

    if (requestInit.headers) {
      new Headers(requestInit.headers).forEach((value, key) => {
        mergedHeaders.set(key, value);
      });
    }

    if (requestInit.body) {
      const contentType = getHeader(mergedHeaders, 'content-type');
      requestInit.body = buildRequestBody(
        requestInit.body as BodyValue | BodyValue[],
        {
          ...this.options.bodySerializerOptions,
          format: resolveBodyFormat(contentType, this.options.bodySerializerOptions)
        }
      );
    }

    const finalRequestInit = {
      ...this.defaultRequestInit,
      ...requestInit,
      headers: mergedHeaders,
      method
    };

    const { signal: combinedSignal, cleanup: cleanupCombinedSignal } = createCombinedAbortSignal([
      this.internalAbortController.signal,
      this.options.signal,
      requestInit.signal
    ]);

    if (combinedSignal) {
      finalRequestInit.signal = combinedSignal;
    }

    const abortSignal = this.options.hooks?.onAbort ? finalRequestInit.signal : undefined;

    if (abortSignal) {
      if (abortSignal.aborted) {
        this.listenForAbort(new Event('abort'));
      } else {
        abortSignal.addEventListener('abort', this.listenForAbort, { once: true });
      }
    }

    try {
      const response = await ftch<TData>(
        url.toString(),
        this.options?.hooks?.beforeRequest
          ? await this.options.hooks.beforeRequest(finalRequestInit)
          : finalRequestInit
      );

      this.options.hooks?.onSuccess?.(response);
      this.options.hooks?.onSettled?.(response);

      return response;
    } catch (e) {
      this.options.hooks?.onError?.(e as Error);
      this.options.hooks?.onSettled?.(null, e as Error);
      throw e;
    } finally {
      cleanupCombinedSignal();

      if (abortSignal && !abortSignal.aborted) {
        abortSignal.removeEventListener('abort', this.listenForAbort);
      }
    }
  }

  /**
   * Wraps the `fetch` API to perform a GET request with the given pathname and request initialization options.
   *
   * @template TData - The expected type of the response data. Defaults to `unknown`.
   * @param pathname The pathname to append to the base URL.
   * @param requestInit The request initialization options. Will override the default options.
   * @returns A promise that resolves to the response data.
   * @throws {Error}
   */
  public get<TData = unknown>(pathname: string, requestInit: FtcherRequestInit = {}) {
    return this.handleMethod<TData>(GET, pathname, requestInit);
  }

  /**
   * Wraps the `fetch` API to perform a POST request with the given pathname and request initialization options.
   *
   * @template TData - The expected type of the response data. Defaults to `unknown`.
   * @param pathname The pathname to append to the base URL.
   * @param requestInit The request initialization options. Will override the default options.
   * @returns A promise that resolves to the response data.
   * @throws {Error}
   */
  public post<TData = unknown>(pathname: string, requestInit: FtcherRequestInit = {}) {
    return this.handleMethod<TData>(POST, pathname, requestInit);
  }

  /**
   * Wraps the `fetch` API to perform a PUT request with the given pathname and request initialization options.
   *
   * @template TData - The expected type of the response data. Defaults to `unknown`.
   * @param pathname The pathname to append to the base URL.
   * @param requestInit The request initialization options. Will override the default options.
   * @returns A promise that resolves to the response data.
   * @throws {Error}
   */
  public put<TData = unknown>(pathname: string, requestInit: FtcherRequestInit = {}) {
    return this.handleMethod<TData>(PUT, pathname, requestInit);
  }

  /**
   * Wraps the `fetch` API to perform a PATCH request with the given pathname and request initialization options.
   *
   * @template TData - The expected type of the response data. Defaults to `unknown`.
   * @param pathname The pathname to append to the base URL.
   * @param requestInit The request initialization options. Will override the default options.
   * @returns A promise that resolves to the response data.
   * @throws {Error}
   */
  public patch<TData = unknown>(pathname: string, requestInit: FtcherRequestInit = {}) {
    return this.handleMethod<TData>(PATCH, pathname, requestInit);
  }

  /**
   * Wraps the `fetch` API to perform a DELETE request with the given pathname and request initialization options.
   *
   * @template TData - The expected type of the response data. Defaults to `unknown`.
   * @param pathname The pathname to append to the base URL.
   * @param requestInit The request initialization options. Will override the default options.
   * @returns A promise that resolves to the response data.
   * @throws {Error}
   */
  public delete<TData = unknown>(pathname: string, requestInit: FtcherRequestInit = {}) {
    return this.handleMethod<TData>(DELETE, pathname, requestInit);
  }

  /**
   * Cleans up event listeners and other resources used by the Ftcher instance.
   */
  public destroy() {
    if (this.isDestroyed) {
      return;
    }

    this.isDestroyed = true;
    this.internalAbortController.abort(new Error('Ftcher instance destroyed.'));
  }
}
