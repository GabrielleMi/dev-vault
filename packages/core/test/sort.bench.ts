import { bench, describe } from 'vitest';
import { sort } from '../src';

interface User {
  id: number;
  name: string;
  age: number;
  metadata: {
    role: string;
    score: number;
  };
}

const generateData = (count: number): User[] => {
  const roles = [ 'admin', 'user', 'guest', 'maintainer' ];
  const names = [ 'Gabrielle', 'Alice', 'Bob', 'Charlie', 'Zoe', 'Xavier', 'Alex', 'Chantal' ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `${names[i % names.length]}_${i}`,
    age: Math.floor(Math.random() * 80) + 18,
    metadata: {
      role: roles[i % roles.length],
      score: Math.random() * 1000
    }
  }));
};

const smallDataset = generateData(100);
const largeDataset = generateData(10000);

describe('Sort - Small Dataset (100 items)', () => {
  bench('Simple property sort (String path)', () => {
    sort(smallDataset).by('name');
  });

  bench('Multi-criteria sort (Multi-keys)', () => {
    sort(smallDataset).by('metadata.role', 'age');
  });

  bench('Deep nested path sort (Deep path)', () => {
    sort(smallDataset).by('metadata.score');
  });

  bench('Specific key configuration sort (SortKeyConfig)', () => {
    sort(smallDataset).by({ key: 'name', isDesc: true });
  });

  bench('Custom callback function sort (SortKeyFn)', () => {
    sort(smallDataset).by((a, b) => a.age - b.age);
  });
});

describe('Sort - Large Dataset (10,000 items)', () => {
  bench('Simple property sort (String path)', () => {
    sort(largeDataset).by('name');
  });

  bench('Multi-criteria sort (Multi-keys)', () => {
    sort(largeDataset).by('metadata.role', 'age');
  });

  bench('Specific key configuration sort (SortKeyConfig)', () => {
    sort(largeDataset).by({ key: 'name', isDesc: true });
  });
});

describe('Sort - Cache & Collator Performance', () => {
  bench('Without global options (Uses default cache)', () => {
    sort(smallDataset).by('name');
  });

  bench('With custom sensitivity options (Cache key generation)', () => {
    sort(smallDataset, {
      locale: 'fr',
      options: { sensitivity: 'base', numeric: true }
    }).by('name');
  });
});
