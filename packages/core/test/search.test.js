import { getLevenshteinDistance } from '../src/search';

describe('getLevenshteinDistance', () => {
  it('should return a score for a long string', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const str2 = 'Lorem';
    expect(getLevenshteinDistance('lore', str)).toBeGreaterThan(-1);
    expect(getLevenshteinDistance('lore', str2)).toBeGreaterThan(-1);
  });

  it('should return a score for a short string', () => {
    const str = 'Lorem ipsum dolor sit';
    const str2 = 'Lorem';
    expect(getLevenshteinDistance('lore', str)).toBeGreaterThan(-1);
    expect(getLevenshteinDistance('Lorem', str2)).toBe(0);
  });
});
