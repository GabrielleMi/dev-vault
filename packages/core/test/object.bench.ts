import { bench, describe } from 'vitest';
import { getEntry } from '../src';

const testObject = {
  simple: 'value',
  nested: {
    level1: {
      level2: {
        level3: 'deep target'
      }
    }
  },
  arrayAccess: [
    { name: 'first' },
    { name: 'second' }
  ],
  mixed: {
    items: [{ id: 1, tags: [ 'typescript', 'bench' ] }]
  }
};

describe('getEntry()', () => {
  bench('Simple access (1 level)', () => {
    getEntry(testObject, 'simple');
  });

  bench('Deep nested path (4 levels)', () => {
    getEntry(testObject, 'nested.level1.level2.level3');
  });

  bench('Array access', () => {
    getEntry(testObject, 'arrayAccess.1.name');
  });

  bench('Deep complex mixed path', () => {
    getEntry(testObject, 'mixed.items.0.tags.1');
  });

  bench('Early failure (Non-existent path in the middle)', () => {
    getEntry(testObject, 'nested.nonExistent.level2.level3');
  });

  bench('Edge case (Empty string key)', () => {
    getEntry(testObject, '');
  });
});
