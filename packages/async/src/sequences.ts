/**
 * Executes an array of promise-returning functions sequentially, yielding each result 
 * as soon as it resolves.
 * @template T - The type of the resolved value.
 * @param promises - An array of functions, each returning a promise.
 * @yields The resolved value of each promise in the order they were executed.
 * @example Basic usage
 * ```typescript
 * for await (const result of streamPromises([() => fetch('/a'), () => fetch('/b')])) {
 *  console.log(result);
 * }
 * ```
 * @example Processing with transformation
 * ```typescript
 * // Yields results and transforms them on the fly
 * const tasks = [() => Promise.resolve(10), () => Promise.resolve(20)];
 * for await (const num of streamPromises(tasks)) {
 *  console.log(`Doubled: ${num * 2}`);
 * }
 * ```
 * @example Early exit
 * ```typescript
 * // The generator stops execution immediately if we break the loop
 * const heavyTasks = [() => task1(), () => task2(), () => task3()];
 * for await (const result of streamPromises(heavyTasks)) {
 *  if (result.isValid) {
 *      console.log('Found it!', result);
 *      break; // task2() and task3() will never be called
 *  }
 * }
 * ```
 *
 */
export async function* streamPromises<T>(promises: (() => Promise<T>)[]) {
  for (const p of promises) {
    yield await p();
  }
}

/**
 * Executes an array of promise-returning functions sequentially, yielding the status 
 * of each promise (fulfilled or rejected) as soon as it completes.
 * This is the streaming equivalent of {@link Promise.allSettled}.
 * @template T - The type of the resolved value.
 * @param promises - An array of functions, each returning a promise.
 * @yields An object representing the outcome of the promise (fulfilled or rejected).
 * @example
 * ```typescript
 * for await (const result of streamSettledPromises([() => fetch('/a'), () => fetch('/b')])) {
 *  if (result.status === 'fulfilled') {
 *    console.log('Value:', result.value);
 *  } else {
 *    console.error('Reason:', result.reason);
 *  }
 * }
 * ```
 */
export async function* streamSettledPromises<T>(promises: (() => Promise<T>)[]) {
  for (const p of promises) {
    try {
      const value = await p();
      yield { status: 'fulfilled', value } as PromiseFulfilledResult<T>;
    } catch (reason) {
      yield { status: 'rejected', reason } as PromiseRejectedResult;
    }
  }
}

/**
 * @namespace
 */
export const Sequential = {
  /**
   * Executes promise-returning functions in sequence, failing fast.
   * @remarks
   * This implementation mimics the behavior of the native {@link Promise.all}
   * but ensures that operations are executed sequentially rather than in parallel.
   * For very large data volumes, prefer streamPromises to avoid excessive memory usage.  
   * @throws Error if any function in the sequence rejects.
   * @example
   * const results = await Sequential.all([() => fetch('/a'), () => fetch('/b')]);
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all | Promise.all on MDN}
   */
  all: async <T>(promises: (() => Promise<T>)[]): Promise<T[]> => {
    const results: T[] = [];
    for await (const res of streamPromises(promises)) {
      results.push(res);
    }
    return results;
  },
  /**
   * Executes promise-returning functions in sequence, continuing on error.
   * @remarks
   * Inspired by {@link Promise.allSettled}. Unlike the native version which runs
   * operations concurrently, this method waits for each promise to resolve
   * before starting the next one.  
   * For very large data volumes, prefer streamPromises to avoid excessive memory usage.
   * @example
   * const results = await Sequential.allSettled([() => fetch('/a'), () => fetch('/b')]);
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled}
   */
  allSettled: async <T>(promises: (() => Promise<T>)[]): Promise<PromiseSettledResult<T>[]> => {
    const results: PromiseSettledResult<T>[] = [];
    for await (const res of streamSettledPromises(promises)) {
      results.push(res);
    }
    return results;
  }
};
