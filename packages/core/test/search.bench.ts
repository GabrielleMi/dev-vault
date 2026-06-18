import { bench, describe } from 'vitest';
import { search } from '../src';

const smallDataset = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `User Name ${i}`,
  profile: {
    email: `user.${i}@company.local`,
    details: {
      bio: i % 10 === 0 ? 'Fermentation enthusiast and developer cosmos' : 'Regular user bio with random words'
    }
  },
  tags: [ 'developer', i % 2 === 0 ? 'active' : 'inactive' ]
}));

const largeDataset = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item Name ${i}`,
  code: `CODE-${i}-XYZ`,
  meta: {
    category: i % 5 === 0 ? 'electronics' : 'books'
  }
}));

describe('Search - Small Dataset (100 items)', () => {
  bench('Exact Match - Simple key', () => {
    search(smallDataset, { keys: ['name'] }).with('User Name 42');
  });

  bench('Exact Match - Deep path (3 levels)', () => {
    search(smallDataset, { keys: ['profile.details.bio'] }).with('cosmos');
  });

  bench('Fuzzy Match (Levenshtein) - Threshold 0.8', () => {
    search(smallDataset, { keys: ['name'], threshold: 0.8 }).with('Usr Nme 42');
  });

  bench('Multi-term Search - Exact match', () => {
    search(smallDataset, { keys: [ 'name', 'profile.email' ] }).with('User Name 10', 'user.50@company');
  });
});

describe('Search - Large Dataset (10,000 items)', () => {
  bench('Exact Match - Linear scan flat key', () => {
    search(largeDataset, { keys: ['code'] }).with('CODE-8888-XYZ');
  });

  bench('Exact Match - Linear scan deep path', () => {
    search(largeDataset, { keys: ['meta.category'] }).with('electronics');
  });

  bench('Case Sensitive vs Normalized scan', () => {
    // Évalue l'impact du bypass de normalizeStr() si configuré strict
    search(largeDataset, { keys: ['code'], isCaseSensitive: true }).with('CODE-5000-XYZ');
  });

  bench('Fuzzy Match - High execution cost scale', () => {
    // Calcul de Levenshtein répété sur 10 000 objets
    search(largeDataset, { keys: ['name'], threshold: 0.75 }).with('Item Nme 9999');
  });
});
