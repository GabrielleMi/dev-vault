/**
 * @categoryDescription Constants
 * @showCategories
 */

/** @category Constants */
export const STRING = 'string' as const;
/** @category Constants */
export const NUMBER = 'number' as const;
/** @category Constants */
export const OBJECT = 'object' as const;
/** @category Constants */
export const BOOLEAN = 'boolean' as const;
/** @category Constants */
export const BIGINT = 'bigint' as const;
/** @category Constants */
export const FUNCTION = 'function' as const;
/** @category Constants */
export const SYMBOL = 'symbol' as const;
/** @category Constants */
export const UNDEFINED = 'undefined' as const;
/** @category Constants */
export const NULL = 'null' as const;

export const MS_PER_SEC = 1000;
export const SEC_PER_MIN = 60;
export const MIN_PER_HOUR = 60;
export const HOURS_PER_DAY = 24;
export const DAYS_PER_WEEK = 7;
export const MONTHS_PER_YEAR = 12;

export const MILLISECOND = 'MS';
export const SECOND = 'SEC';
export const MINUTE = 'MIN';
export const HOUR = 'HOUR';
export const DAY = 'DAY';
export const WEEK = 'WEEK';
export const MONTH = 'MONTH';
export const YEAR = 'YEAR';

/**
 * @private
 */
export const TIME_UNIT_CONVERSION = {
  [MILLISECOND]: 1,
  [SECOND]: MS_PER_SEC,
  [MINUTE]: MS_PER_SEC * SEC_PER_MIN,
  [HOUR]: MS_PER_SEC * SEC_PER_MIN * MIN_PER_HOUR,
  [DAY]: MS_PER_SEC * SEC_PER_MIN * MIN_PER_HOUR * HOURS_PER_DAY,
  [WEEK]: MS_PER_SEC * SEC_PER_MIN * MIN_PER_HOUR * HOURS_PER_DAY * DAYS_PER_WEEK
};

export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';
export const PUT = 'PUT';

export const HTTP_OK = 200;
export const HTTP_CREATED = 201;
export const HTTP_NO_CONTENT = 204;
export const HTTP_NOT_MODIFIED = 304;
export const HTTP_BAD_REQUEST = 400;
export const HTTP_UNAUTHORIZED = 401;
export const HTTP_FORBIDDEN = 403;
export const HTTP_NOT_FOUND = 404;
export const HTTP_METHOD_NOT_ALLOWED = 405;
export const HTTP_CONFLICT = 409;
export const HTTP_UNPROCESSABLE_ENTITY = 422;
export const HTTP_INTERNAL_SERVER_ERROR = 500;

/**
 * @category Constants
 * @remarks
 * - 1xx (Informational): The request was received, continuing process
 * - 2xx (Successful): The request was successfully received, understood, and accepted
 * - 3xx (Redirection): Further action needs to be taken in order to complete the request
 * - 4xx (Client Error): The request contains bad syntax or cannot be fulfilled
 * - 5xx (Server Error): The server failed to fulfill an apparently valid request
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 * @see {@link https://httpwg.org/specs/rfc9110.html#overview.of.status.codes}
 */
export const HTTP_CODES = Object.freeze({
  /**
     * The request succeeded.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
     */
  OK: HTTP_OK,
  /**
    * The HTTP 201 Created successful response status code indicates that the HTTP request has led to
    * the creation of a resource. This status code is commonly sent as the result of a POST request.
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
    */
  CREATED: HTTP_CREATED,
  /**
    * The HTTP 204 No Content successful response status code indicates that a request has succeeded,
    * but the client doesn't need to navigate away from its current page.
    * A 204 response is cacheable by default, and an ETag header is included in such cases.
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
    */
  NO_CONTENT: HTTP_NO_CONTENT,
  /**
   * The HTTP 304 Not Modified client redirection response status code indicates that there is no need 
   * to retransmit the requested resources. It is an implicit redirection to a cached resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
   */
  NOT_MODIFIED: HTTP_NOT_MODIFIED,
  /**
     * The server cannot or will not process the request due to something that is perceived to be a client error
     * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
     */
  BAD_REQUEST: HTTP_BAD_REQUEST,
  /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
     * That is, the client must authenticate itself to get the requested response.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
     */
  UNAUTHORIZED: HTTP_UNAUTHORIZED,
  /**
     * The client does not have access rights to the content; that is, it is unauthorized,
     * so the server is refusing to give the requested resource.
     * Unlike 401 Unauthorized, the client's identity is known to the server.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
     */
  FORBIDDEN: HTTP_FORBIDDEN,
  /**
     * The server cannot find the requested resource.
     * In the browser, this means the URL is not recognized.
     * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
     * Servers may also send this response instead of 403 Forbidden to hide the existence of a resource
     * from an unauthorized client. This response code is probably the most well known due to its frequent
     * occurrence on the web.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
     */
  NOT_FOUND: HTTP_NOT_FOUND,
  /**
   * The HTTP 405 Method Not Allowed client error response status code indicates that the server knows the request method,
   * but the target resource doesn't support this method. The server must generate an Allow header in a 405 response with a
   * list of methods that the target resource currently supports.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   */
  METHOD_NOT_ALLOWED: HTTP_METHOD_NOT_ALLOWED,
  /**
   * The HTTP 409 Conflict response status code indicates a request conflict with current state of the server.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
   */
  CONFLICT: HTTP_CONFLICT,
  /**
   * The server understands the content type of the request entity, and the syntax of the request entity is correct, 
   * but it was unable to process the contained instructions. (e.g., Zod validation failed).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422}
   */
  UNPROCESSABLE_ENTITY: HTTP_UNPROCESSABLE_ENTITY,
  /**
     * The server has encountered a situation it does not know how to handle.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
     */
  INTERNAL_SERVER_ERROR: HTTP_INTERNAL_SERVER_ERROR
});

export const EMPTY_OBJECT = Object.freeze({});
export const EMPTY_ARRAY = Object.freeze([]);
