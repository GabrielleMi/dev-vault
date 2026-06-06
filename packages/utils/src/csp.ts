import { isArray, isEmpty } from './is.js';
import { safeJoin } from './string.js';

export type CSPSelf = '\'self\'';
export type CSPNone = '\'none\'';
export type CSPAll = '*';

/**
 * Represents valid sources for CSP directives.
 * Can be a keyword, a nonce, a hash, or a URL.
 */
export type CSPSource = CSPSelf
  | '\'unsafe-inline\''
  | '\'unsafe-eval\''
  | CSPNone
  | CSPAll
  | `nonce-${string}`
  | `sha256-${string}`
  | `wasm-unsafe-eval`
  | string;

export type FrameAncestorSource = CSPSelf | CSPNone | CSPAll | string;

export type CSPDirectiveList = CSPSource[];

/**
 * Represents the Content Security Policy (CSP) directives configuration.
 */
export interface CSP {
  /**
   * Fallback for other CSP fetch directives.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src | MDN}
   */
  'default-src'?: CSPDirectiveList;

  /**
   * Restricts the URLs which can be used in a document's `<base>` element.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri | MDN}
   *
   * @default Allows any URI.
   */
  'base-uri'?: CSPDirectiveList;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content | MDN}
   *
   * @deprecated This feature is no longer recommended.
   */
  'block-all-mixed-content'?: true;

  /**
   * Defines valid sources for web workers and nested browsing contexts.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/child-src | MDN}
   */
  'child-src'?: CSPDirectiveList;

  /**
   * Restricts the URLs which can be loaded using script interfaces (fetch, XHR, WebSockets).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src | MDN}
   */
  'connect-src'?: CSPDirectiveList;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src | MDN}
   *
   * @experimental
   * Specifies valid sources for nested browsing contexts loaded into `<fencedframe>` elements.
   */
  'fenced-frame-src'?: CSPDirectiveList;

  /**
   * Specifies valid sources for fonts loaded using `@font-face`.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src | MDN}
   */
  'font-src'?: CSPDirectiveList;

  /**
   * Restricts the URLs which can be used as the target of form submissions.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action | MDN}
   */
  'form-action'?: CSPDirectiveList;

  /**
   * Specifies valid parents that may embed a page.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors | MDN}
   */
  'frame-ancestors'?: FrameAncestorSource[];

  /**
   * Specifies valid sources for nested browsing contexts (`<frame>`, `<iframe>`).
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src | MDN}
   */
  'frame-src'?: CSPDirectiveList;

  /**
   * Specifies valid sources of images and favicons.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src | MDN}
   */
  'img-src'?: CSPDirectiveList;

  /**
   * Specifies which manifest can be applied to the resource.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src | MDN}
   */
  'manifest-src'?: CSPDirectiveList;

  /**
   * Specifies valid sources for JavaScript.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src | MDN}
   */
  'script-src'?: CSPDirectiveList;

  /**
   * Specifies valid sources for stylesheets.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src | MDN}
   */
  'style-src'?: CSPDirectiveList;
}

/**
 * Generates a Content Security Policy (CSP) header string from a simple object.
 * @param config A {@link CSP} object defining the directives.
 * @returns A formatted CSP string for HTTP headers.
 *
 * @examplesFromTests ../test/csp.test.js
 */
export function buildCSP(config: CSP) {
  return Object.entries(config).reduce((csp, [ policy, value ]) => {
    if (value === true) {
      return safeJoin([ csp, policy ], '; ');
    }

    if (isEmpty(value)) {
      return csp;
    }

    const policyContent = isArray(value) ? safeJoin(value as CSPDirectiveList, ' ') : String(value);

    return safeJoin([
      csp,
      policyContent ? `${policy} ${policyContent}` : null
    ], '; ');
  }, '');
}
