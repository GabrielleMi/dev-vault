import { EMPTY_OBJECT } from './constants.js';

/**
 * @template V - The type of values stored in the cache.
 * Fixed-capacity {@link https://www.geeksforgeeks.org/system-design/lru-cache-implementation/ Least Recently Used (LRU)} cache.
 *
 * @class
 */
export class LRUCache<V> {
  private readonly max: number;
  private readonly cache = new Map<string, V>();

  constructor(max: number = 100) {
    this.max = max;
  }

  get(key: string): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: string, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.max) {
      this.cache.delete(this.cache.keys().next().value as string);
    }
    this.cache.set(key, value);
  }
}

/**
 * @internal
 */
const buildLocKey = (locales?: Intl.LocalesArgument) => Array.isArray(locales) ? locales.join(',') : (locales as string) || 'def';

/**
 * @internal
 */
class CollatorCache extends LRUCache<Intl.Collator> {
  constructor(max?: number) {
    super(max);
  }

  override get(locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions) {
    const o = (options || EMPTY_OBJECT) as Intl.CollatorOptions;
    const k = `${buildLocKey(locales)}
    -${o.sensitivity}
    -${o.numeric}
    -${o.caseFirst}
    -${o.ignorePunctuation}
    -${o.usage}
    -${o.collation}`;

    let cached = super.get(k);

    if (!cached) {
      cached = new Intl.Collator(locales, options);
      super.set(k, cached);
    }

    return cached;
  }
}

/**
 * @internal
 */
class NumberFormatCache extends LRUCache<Intl.NumberFormat> {
  constructor(max?: number) {
    super(max);
  }

  override get(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions) {
    const o = (options || EMPTY_OBJECT) as Intl.NumberFormatOptions;
    const k = `${buildLocKey(locales)}
      -${o.compactDisplay}
      -${o.currency}
      -${o.currencyDisplay}
      -${o.currencySign}
      -${o.localeMatcher}
      -${o.maximumFractionDigits}
      -${o.maximumSignificantDigits}
      -${o.minimumFractionDigits}
      -${o.minimumIntegerDigits}
      -${o.minimumSignificantDigits}
      -${o.notation}
      -${o.numberingSystem}
      -${o.signDisplay}
      -${o.style}
      -${o.unit}
      -${o.unitDisplay}
      -${o.useGrouping}`;
    let cached = super.get(k);

    if (!cached) {
      cached = new Intl.NumberFormat(locales, options);
      super.set(k, cached);
    }

    return cached;
  }
}

/**
 * @internal
 */
class DateTimeFormatCache extends LRUCache<Intl.DateTimeFormat> {
  constructor(max?: number) {
    super(max);
  }

  override get(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions) {
    const o = (options || EMPTY_OBJECT) as Intl.DateTimeFormatOptions;
    const k = `${buildLocKey(locales)}
      -${o.calendar}
      -${o.dateStyle}
      -${o.day}
      -${o.dayPeriod}
      -${o.localeMatcher}
      -${o.era}
      -${o.formatMatcher}
      -${o.fractionalSecondDigits}
      -${o.hour12}
      -${o.hour}
      -${o.hourCycle}
      -${o.numberingSystem}
      -${o.minute}
      -${o.month}
      -${o.second}
      -${o.timeStyle}
      -${o.timeZone}`;
    let cached = super.get(k);

    if (!cached) {
      cached = new Intl.DateTimeFormat(locales, options);
      super.set(k, cached);
    }

    return cached;
  }
}

/**
 * @example
 * ```ts
 * const collator1 = IntlCache.Collator('fr-CA', { sensitivity: 'base' });
 * const collator2 = IntlCache.Collator('fr-CA', { sensitivity: 'base' });
 * console.log(collator1 === collator2); // true
 * ```
 */
export const CollatorsCache = new CollatorCache();

/**
 * @example
 * ```ts
 * const nf1 = IntlCache.NumberFormat('fr-CA', { style: 'currency', currency: 'USD' });
 * const nf2 = IntlCache.NumberFormat('fr-CA', { style: 'currency', currency: 'USD' });
 * console.log(nf1 === nf2); // true
 * ```
 */
export const NumberFormatsCache = new NumberFormatCache();

/**
 * @example
 * ```ts
 * const dtf1 = IntlCache.DateTimeFormat('fr-CA', { dateStyle: 'long' });
 * const dtf2 = IntlCache.DateTimeFormat('fr-CA', { dateStyle: 'long' });
 * console.log(dtf1 === dtf2); // true
 * ```
 */
export const DateTimeFormatsCache = new DateTimeFormatCache();

/**
 * @borrows NumberFormatsCache.get as NumberFormat
 * @borrows CollatorsCache.get as Collator
 * @borrows DateTimeFormat.get as DateTimeFormat
 * @namespace
 * Based on the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl Intl} API
 * This namespace object provides access to cached instances of `Intl.Collator`, `Intl.DateTimeFormat` and `Intl.NumberFormat`.
 */
export const IntlCache = Object.freeze({
  NumberFormat: NumberFormatsCache.get.bind(NumberFormatsCache),
  Collator: CollatorsCache.get.bind(CollatorsCache),
  DateTimeFormat: DateTimeFormatsCache.get.bind(DateTimeFormatsCache)
});
