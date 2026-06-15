import { buildCSP } from '../src/index.js';

describe('buildCSP', () => {
  // @isTestExample Basic CSP
  it('should generate a basic CSP string', () => {
    const config = {
      'default-src': ['\'self\''],
      'script-src': [ '\'unsafe-inline\'', '\'unsafe-eval\'' ]
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

  it('should handle boolean true values by appending only the policy name', () => {
    const config = {
      'block-all-mixed-content': true,
      'upgrade-insecure-requests': true
    };

    expect(buildCSP(config)).toBe('block-all-mixed-content; upgrade-insecure-requests');
  });

  it('should handle single string values instead of arrays', () => {
    const config = {
      'default-src': '\'self\'',
      'frame-ancestors': 'https://example.com'
    };

    expect(buildCSP(config)).toBe('default-src \'self\'; frame-ancestors https://example.com');
  });
});
