import { debounce, delay, throttle } from './src';

describe('Timer Utilities', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  describe('delay', () => {
    it('should resolve after the specified delay', async () => {
      const promise = delay(1000);

      vi.advanceTimersByTime(1000);

      await expect(promise).resolves.toBeUndefined();
    });
  });

  describe('debounce', () => {
    it('should only execute after the delay', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 500);

      debounced();
      debounced();
      debounced();

      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(500);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should not execute after the delay when cancel() is called', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 500);

      debounced();
      debounced();
      debounced();

      expect(fn).not.toHaveBeenCalled();
      debounced.cancel();

      vi.advanceTimersByTime(500);
      expect(fn).toHaveBeenCalledTimes(0);
    });
  });

  describe('throttle', () => {
    it('should execute immediately on the first call', () => {
      const fn = vi.fn();
      const throttled = throttle(fn, 1000);

      throttled();
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should not execute after being cancelled', () => {
      const fn = vi.fn();
      const throttled = throttle(fn, 10);
      throttled();
      throttled();
      throttled.cancel();
      vi.advanceTimersByTime(2000);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should schedule the last call after the remaining limit time', () => {
      const fn = vi.fn();
      const limit = 1000;
      const throttled = throttle(fn, limit);

      throttled('first');
      expect(fn).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(500);
      throttled('second');

      expect(fn).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(500);

      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenLastCalledWith('second');
    });
  });
});
