/**
 * A secure wrapper around the native `fetch` API providing generic typing,
 * strict HTTP status handling, and error chaining preservation via `cause`.
 *
 * @template TData The expected type of the response data. Defaults to `unknown`.
 * @param args The exact same arguments accepted by the native `fetch` API (URL, options).
 * @returns A promise that resolves to the typed data. Returns `null` if the HTTP status is 204.
 * @throws {Error} Throws an error if:
 * - The HTTP status is not "ok" (4xx or 5xx).
 * @example
 * ```ts
 * interface Plant { id: string; name: string; }
 *
 * try {
 * const data = await ftch<Plant>('/api/plants/1');
 * console.log(data.name); // Fully typed
 * } catch (error) {
 * if (error instanceof Error) {
 * console.error(error.message);
 * }
 * }
 * ```
 */
export async function ftch<TData = unknown>(...args: Parameters<typeof fetch>): Promise<TData> {
  try {
    const response = await fetch(...args);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `HTTP Error : ${response.status} ${response.statusText}`,
        {
          cause: response
        }
      );
    }

    if (response.status === 204) {
      return null as TData;
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return (await response.text()) as unknown as TData;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new TypeError('An unknown network error occurred.', { cause: e });
  }
}
