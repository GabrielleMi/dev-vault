import { bench, describe } from 'vitest';
import { datasets } from './utils';
import { sort } from '../src';

const frBaseNumericCollator = new Intl.Collator('fr', { sensitivity: 'base', numeric: true });

datasets.forEach((dataset, index) => {
  describe(`sort() - Dataset ${index + 1} (${dataset.length} items)`, () => {
    bench('Simple property sort (String path)', () => {
      sort(dataset).by('name');
    });

    bench('Multi-criteria sort (Multi-keys)', () => {
      sort(dataset).by('metadata.role', 'age');
    });

    bench('Deep nested path sort (Deep path)', () => {
      sort(dataset).by('metadata.score');
    }, {
      time: 2000,
      iterations: 200
    });

    bench('Specific key configuration sort (SortKeyConfig)', () => {
      sort(dataset).by({ key: 'name', isDesc: true });
    });

    bench('Custom callback function sort (SortKeyFn)', () => {
      sort(dataset).by((a, b) => a.age - b.age);
    });

    bench('With explicit collator instance', () => {
      sort(dataset, { collator: frBaseNumericCollator }).by('name');
    }, {
      time: 2000,
      iterations: 200
    });

    bench('With custom sensitivity options (Cache key generation)', () => {
      sort(dataset, {
        locale: 'fr',
        options: { sensitivity: 'base', numeric: true }
      }).by('name');
    }, {
      time: 2000,
      iterations: 200
    });
  });
});
