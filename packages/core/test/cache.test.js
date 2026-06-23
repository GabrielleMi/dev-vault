import { IntlCache, LRUCache } from '../src';

describe('LRUCache', () => {
  it('evicts the oldest item when exceeding max capacity', () => {
    const lru = new LRUCache(2);
    lru.set('a', '1');
    lru.set('b', '2');
    lru.set('c', '3');
    lru.set('c', '3');

    expect(lru.get('a')).toBeUndefined();
    expect(lru.get('b')).toBe('2');
    expect(lru.get('c')).toBe('3');
  });

  it('refreshes usage order on get', () => {
    const lru = new LRUCache(2);
    lru.set('a', '1');
    lru.set('b', '2');

    lru.get('a');
    lru.set('c', '3');

    expect(lru.get('b')).toBeUndefined();
    expect(lru.get('a')).toBe('1');
    expect(lru.get('c')).toBe('3');
  });
});

describe('IntlCache', () => {
  it('caches collators', () => {
    const collator1 = IntlCache.Collator('en-US', { sensitivity: 'base' });
    const collator2 = IntlCache.Collator('en-US', { sensitivity: 'base' });
    expect(collator1).toBe(collator2);
  });

  it('caches number formats', () => {
    const nf1 = IntlCache.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const nf2 = IntlCache.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    expect(nf1).toBe(nf2);
  });
});
