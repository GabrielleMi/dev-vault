interface User {
  id: number;
  name: string;
  age: number;
  metadata: {
    role: string;
    score: number;
  };
  profile: {
    email: string;
    details: {
      bio: string;
    };
  };
  tags: string[];
  code: string;
  meta: {
    category: string;
  };
}

export const generateData = (count: number): User[] => {
  const roles = [ 'admin', 'user', 'guest', 'maintainer' ];
  const names = [ 'Gabrielle', 'Alice', 'Bob', 'Charlie', 'Zoe', 'Xavier', 'Alex', 'Chantal' ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `${names[i % names.length]}_${i}`,
    age: 18 + (i * 7 % 80),
    metadata: {
      role: roles[i % roles.length],
      score: (i * 37 % 1000) + (i % 10) / 10
    },
    profile: {
      email: `user.${i}@company.local`,
      details: {
        bio: i % 10 === 0 ? 'Fermentation enthusiast and developer cosmos' : 'Regular user bio with random words'
      }
    },
    tags: [ 'developer', i % 2 === 0 ? 'active' : 'inactive' ],
    code: `CODE-${i}-XYZ`,
    meta: {
      category: i % 5 === 0 ? 'electronics' : 'books'
    }
  }));
};

const smallDataset = generateData(100);
const largeDataset = generateData(10000);

export const datasets = [ smallDataset, largeDataset ];
