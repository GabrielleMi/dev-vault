import { isArray, isEmpty } from './is.js';
import { safeJoin } from './string.js';

export type CSPSelf = '\'self\'';
export type CSPNone = '\'none\'';
export type CSPAll = '*';

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

export type CSP = {
  /**
     * The HTTP Content-Security-Policy (CSP) default-src directive serves
     * as a fallback for the other CSP fetch directives.
     * For each of the following directives that are absent,
     * the user agent looks for the default-src directive and uses this value for it
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src}
     */
  'default-src'?: CSPDirectiveList;

  /**
     * The HTTP Content-Security-Policy base-uri restricts the URLs which can be used in a document's `<base>` element.
     * If this value is absent, then any URI is allowed.
     * If this directive is absent, the user agent will use the value in the `<base>` element.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri}
     */
  'base-uri'?: CSPDirectiveList;
  /**
     * @deprecated This feature is no longer recommended.
     * Though some browsers might still support it, it may have already been removed from the relevant web standards,
     * may be in the process of being dropped, or may only be kept for compatibility purposes.
     * Be aware that this feature may cease to work at any time.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content}
     */
  'block-all-mixed-content'?: true;
  /**
     * The HTTP Content-Security-Policy (CSP) child-src directive defines the valid sources for web workers and
     * nested browsing contexts loaded using elements such as `<frame>` and `<iframe>`.
     * For workers, non-compliant requests are treated as fatal network errors by the user agent.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/child-src}
     */
  'child-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy (CSP) connect-src restricts the URLs loaded using script interfaces.
     * The following APIs are controlled by this directive:
     * The ping attribute in `<a>` elements
     * - fetch()
     * - XMLHttpRequest
     * - WebSocket
     * - EventSource
     * - Navigator.sendBeacon()
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src}
     */
  'connect-src'?: CSPDirectiveList;
  /**
     * @experimental
     * The HTTP Content-Security-Policy (CSP) fenced-frame-src directive specifies valid sources for nested
     * browsing contexts loaded into `<fencedframe>` elements.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src}
     */
  'fenced-frame-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy (CSP) font-src specifies valid sources for fonts loaded using @font-face.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src}
     */
  'font-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy (CSP) form-action directive restricts the URLs which can be used
     * as the target of form submissions from a given context.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action}
     */
  'form-action'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy (CSP) frame-ancestors directive specifies valid parents that may embed
     * a page using `<frame>`, `<iframe>`, `<object>`, or `<embed>`.
     * Setting this directive to 'none' is similar to X-Frame-Options: deny (which is also supported in older browsers).
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors}
     */
  'frame-ancestors'?: FrameAncestorSource[];
  /**
     * The HTTP Content-Security-Policy (CSP) frame-src directive specifies valid sources for
     * nested browsing contexts loading using elements such as `<frame>` and `<iframe>`.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src}
     */
  'frame-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy img-src directive specifies valid sources of images and favicons.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src}
     */
  'img-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy manifest-src directive specifies which manifest can be applied to the resource.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/manifest-src}
     */
  'manifest-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy (CSP) script-src directive specifies valid sources for JavaScript.
     * This includes not only URLs loaded directly into `<script>` elements, but also things like
     * inline script event handlers (onclick) and XSLT stylesheets which can trigger script execution.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src}
     */
  'script-src'?: CSPDirectiveList;
  /**
     * The HTTP Content-Security-Policy (CSP) style-src directive specifies valid sources for stylesheets.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src}
     */
  'style-src'?: CSPDirectiveList;
};

/**
 * Generates a Content Security Policy (CSP) header string from a simple, type-safe object.
 * Skip the headaches of manual CSP string formatting.
 *
 * @param config A {@link CSP} object defining the Content Security Policy directives. Empty or `null`/`undefined` directives are omitted.
 * `true` values for directives (like `block-all-mixed-content`) will include the directive name without sources.
 * @returns A ready-to-use CSP string for HTTP headers.
 *
 * @examplesFromTests ../test/csp.test.js
 */
export function buildCSP(config: CSP) {
  return Object.entries(config).reduce((csp, [policy, value]) => {
    if (value === true) {
      return safeJoin([csp, policy], '; ');
    }

    if (isEmpty(value)) {
      return csp;
    }

    const policyContent = isArray(value) ? safeJoin(value, ' ') : String(value);

    return safeJoin([
      csp,
      policyContent ? `${policy} ${policyContent}` : null
    ], '; ');
  }, '');
}
