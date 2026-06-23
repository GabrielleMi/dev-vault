import { bench, describe } from 'vitest';
import { datasets } from './utils';
import { search } from '../src';

datasets.forEach((dataset, index) => {
  describe(`search() - Dataset ${index + 1} (${dataset.length} items)`, () => {
    bench('Exact Match - Simple key', () => {
      search(dataset, { keys: ['name'] }).with('Alice_41');
    },
    {
      time: 2000,
      iterations: 200
    });

    bench('Exact Match - Deep path (3 levels)', () => {
      search(dataset, { keys: ['profile.details.bio'] }).with('cosmos');
    },
    {
      time: 2000,
      iterations: 200
    });

    bench('Fuzzy Match - Threshold 0.8', () => {
      search(dataset, { keys: ['name'], threshold: 0.8 }).with('Alic_41');
    },
    {
      time: 2000,
      iterations: 200
    });

    bench('Multi-term Search - Exact match', () => {
      search(dataset, { keys: [ 'name', 'profile.email' ] }).with('Gabrielle_8', 'user.50@company');
    },
    {
      time: 2000,
      iterations: 200
    });

    bench('Case Sensitive scan', () => {
      search(dataset, { keys: ['code'], isCaseSensitive: true }).with('CODE-50-XYZ');
    },
    {
      time: 2000,
      iterations: 200
    });

    bench('Normalized scan', () => {
      search(dataset, { keys: ['code'], isCaseSensitive: false }).with('code-50-xyz');
    },
    {
      time: 2000,
      iterations: 200
    });
  });
});
