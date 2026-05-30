/**
 * @throws
 */
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
 * Provides utilities for chaining asynchronous operations.
 * - `all`: Executes promise-returning functions in sequence, failing fast.
 * - `allSettled`: Executes promise-returning functions in sequence, continuing on error.
 */
export const ChainPromise = {
  all: chainPromises,
  allSettled: chainSettlePromises
};
