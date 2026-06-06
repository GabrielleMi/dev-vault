const chainPromises = async (promises: (() => Promise<unknown>)[]) => {
  const results: unknown[] = [];

  for (let i = 0; i < promises.length; i++) {
    const result = await promises[i]();
    results.push(result);
  }

  return results;
};

const chainSettlePromises = async (promises: (() => Promise<unknown>)[]) => {
  const results: PromiseSettledResult<unknown>[] = [];

  for (let i = 0; i < promises.length; i++) {
    await promises[i]()
      .then((response) => results.push({ status: 'fulfilled', value: response }))
      .catch((error) => results.push({ status: 'rejected', reason: error }));
  }

  return results;
};

/**
 * @category Async ops
 *
 * @categoryDescription Async ops
 * 
 * Provides utilities for chaining asynchronous operations.
 */
export const ChainPromise = {
  /**
   * Executes promise-returning functions in sequence, failing fast.
   * @remarks
   * This implementation mimics the behavior of the native {@link Promise.all}
   * but ensures that operations are executed sequentially rather than in parallel.
   * @throws Error if any function in the sequence rejects.
   * @example
   * const results = await ChainPromise.all([() => fetch('/a'), () => fetch('/b')]);
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all | Promise.all on MDN}
   */
  all: chainPromises,
  /**
   * Executes promise-returning functions in sequence, continuing on error.
   * @remarks
   * Inspired by {@link Promise.allSettled}. Unlike the native version which runs
   * operations concurrently, this method waits for each promise to resolve
   * before starting the next one.
   * @example
   * const results = await ChainPromise.allSettled([() => fetch('/a'), () => fetch('/b')]);
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled}
   */
  allSettled: chainSettlePromises
};
