import { buildCSP } from '../src/index.js';

describe('buildCSP', () => {
  // @isTestExample Basic CSP
  it('should generate a basic CSP string', () => {
    const config = {
      'default-src': ['\'self\''],
      'script-src': ['\'unsafe-inline\'', '\'unsafe-eval\'']
    };

    expect(buildCSP(config)).toBe('default-src \'self\'; script-src \'unsafe-inline\' \'unsafe-eval\'');
  });

  // @isTestExample CSP with empty values
  it('should omit policies with empty values', () => {
    const config = {
      'default-src': [],
      'script-src': ['\'self\''],
      'style-src': ['']
    };

    expect(buildCSP(config)).toBe('script-src \'self\'');
  });
});
