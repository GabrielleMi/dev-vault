/**
 * @groupDescription Constants
 * A list of often used constants.
 */

/**
 * @categoryDescription Typing
 * Constants for typeof.
 * @showCategories
 */

/**
 * @group Constants
 * @category Typing
 */
export const STRING = 'string' as const;
/**
 * @group Constants
 * @category Typing
 */
export const NUMBER = 'number' as const;
/**
 * @group Constants
 * @category Typing
 */
export const OBJECT = 'object' as const;
/**
 * @group Constants
 * @category Typing
 */
export const BOOLEAN = 'boolean' as const;
/**
 * @group Constants
 * @category Typing
 */
export const BIGINT = 'bigint' as const;
/**
 * @group Constants
 * @category Typing
 */
export const FUNCTION = 'function' as const;

/**
 * @group Constants
 * @category Time
 */
export const MS_PER_SEC = 1000;

/**
 * @group Constants
 * @category Time
 */
export const SEC_PER_MIN = 60;

/**
 * @group Constants
 * @category Time
 */
export const MIN_PER_HOUR = 60;

/**
 * @group Constants
 * @category Time
 */
export const HOURS_PER_DAY = 24;

/**
 * @group Constants
 * @category Time
 */
export const DAYS_PER_WEEK = 7;

/**
 * @group Constants
 * @category Time
 */
export const MONTHS_PER_YEAR = 12;

/**
 * @group Constants
 * @category Time
 */
export const MILLISECOND = 'MS';
/**
 * @group Constants
 * @category Time
 */
export const SECOND = 'SEC';
/**
 * @group Constants
 * @category Time
 */
export const MINUTE = 'MIN';
/**
 * @group Constants
 * @category Time
 */
export const HOUR = 'HOUR';
/**
 * @group Constants
 * @category Time
 */
export const DAY = 'DAY';
/**
 * @group Constants
 * @category Time
 */
export const WEEK = 'WEEK';
/**
 * @group Constants
 * @category Time
 */
export const MONTH = 'MONTH';
/**
 * @group Constants
 * @category Time
 */
export const YEAR = 'YEAR';

/**
 * @group Constants
 * @category Time
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

/**
 * @group Constants
 * @category HTTP
 */
export const GET = 'GET';
/**
 * @group Constants
 * @category HTTP
 */
export const POST = 'POST';
/**
 * @group Constants
 * @category HTTP
 */
export const PATCH = 'PATCH';
/**
 * @group Constants
 * @category HTTP
 */
export const DELETE = 'DELETE';

/**
 * @remarks
 * The status code of a response is a three-digit integer code that describes the result of the request and
 * the semantics of the response, including whether the request was successful and what content is enclosed (if any).
 * All valid status codes are within the range of 100 to 599, inclusive.
 *
 * - 1xx (Informational): The request was received, continuing process
 * - 2xx (Successful): The request was successfully received, understood, and accepted
 * - 3xx (Redirection): Further action needs to be taken in order to complete the request
 * - 4xx (Client Error): The request contains bad syntax or cannot be fulfilled
 * - 5xx (Server Error): The server failed to fulfill an apparently valid request
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 * @see {@link https://httpwg.org/specs/rfc9110.html#overview.of.status.codes}
 * @group Constants
 * @category HTTP
 */
export const HTTP_CODES = Object.freeze({
  /**
     * The request succeeded.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
     */
  OK: 200,
  /**
     * The HTTP 201 Created successful response status code indicates that the HTTP request has led to
     * the creation of a resource. This status code is commonly sent as the result of a POST request.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
     */
  CREATED: 201,
  /**
    * The HTTP 204 No Content successful response status code indicates that a request has succeeded,
    * but the client doesn't need to navigate away from its current page.
    * A 204 response is cacheable by default, and an ETag header is included in such cases.
    * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
    */
  NO_CONTENT: 204,
  /**
     * The server cannot or will not process the request due to something that is perceived to be a client error
     * (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
     */
  BAD_REQUEST: 400,
  /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
     * That is, the client must authenticate itself to get the requested response.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
     */
  UNAUTHORIZED: 401,
  /**
     * The client does not have access rights to the content; that is, it is unauthorized,
     * so the server is refusing to give the requested resource.
     * Unlike 401 Unauthorized, the client's identity is known to the server.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
     */
  FORBIDDEN: 403,
  /**
     * The server cannot find the requested resource.
     * In the browser, this means the URL is not recognized.
     * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
     * Servers may also send this response instead of 403 Forbidden to hide the existence of a resource
     * from an unauthorized client. This response code is probably the most well known due to its frequent
     * occurrence on the web.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
     */
  NOT_FOUND: 404,
  /**
   * The HTTP 405 Method Not Allowed client error response status code indicates that the server knows the request method,
   * but the target resource doesn't support this method. The server must generate an Allow header in a 405 response with a
   * list of methods that the target resource currently supports.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   */
  METHOD_NOT_ALLOWED: 405,
  /**
     * The server has encountered a situation it does not know how to handle.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
     */
  INTERNAL_SERVER_ERROR: 500
});
