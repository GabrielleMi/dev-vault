import { Temporal } from '@js-temporal/polyfill';

/**
 * @internal
 * @private
 */
const now = (): number => Temporal.Now.instant().epochMilliseconds;

/**
 * Generic interface for asynchronous utility functions 
 * that support a cancellation method.
 */
export interface CancellableFunction<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): void;
  /** Cancel pending executions. */
  cancel: () => void;
}

/**
 * Pauses execution for a specified duration.
 * @param ms - Milliseconds (positive number) to wait.
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Creates a debounced function that delays invoking `fn` until after `delay` milliseconds 
 * have elapsed since the last time the debounced function was invoked.
 * 
 * @template T - The type of the function to debounce.
 * @param fn - The function to debounce.
 * @param delay - The number (positive) of milliseconds to delay.
 * @returns A new debounced function that includes a `.cancel()` method to abort pending executions.
 * @example
 * ```typescript
 * const save = debounce((text: string) => console.log('Saving:', text), 500);
 * save('Hello');
 * save('World'); // Only 'World' will be logged after 500ms
 * // To cancel pending execution:
 * save.cancel();
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): CancellableFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };

  debounced.cancel = () => clearTimeout(timeoutId);
  return debounced;
}

/**
 * Creates a throttled function that enforces a minimum interval between invocations
 * based on real elapsed time. Ensures that the function is executed immediately on 
 * the first call and guarantees execution after the limit if subsequent calls occur.
 * @template T - The type of the function to throttle.
 * @param fn - The function to throttle.
 * @param limit - The minimum (positive) interval in milliseconds between invocations.
 * @returns A new throttled function that includes a `.cancel()` method to reset the cooldown.
 * @example
 * ```typescript
 * const log = throttle((msg: string) => console.log(msg), 1000);
 * log('Immediate'); // Executes immediately
 * log('Ignored');   // Scheduled for later execution
 * // To cancel pending execution:
 * log.cancel();
 * ```
 */
export function throttle<T extends (...args: unknown[]) => unknown>(fn: T, limit: number): CancellableFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let lastRan = 0;

  const throttled = (...args: Parameters<T>) => {
    const n = now();
    const elapsed = n - lastRan;

    if (elapsed >= limit) {
      fn(...args);
      lastRan = n;
    } else {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        fn(...args);
        lastRan = now();
      }, limit - elapsed);
    }
  };

  throttled.cancel = () => {
    clearTimeout(timeoutId);
    lastRan = 0;
  };

  return throttled;
}
