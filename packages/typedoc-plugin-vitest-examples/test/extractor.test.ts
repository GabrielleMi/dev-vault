import * as ts from 'typescript';
import { extractTestCode } from '../src/extract-test-code';

describe('extractTestCode', () => {
  const createBody = (code: string) => {
    const sourceFile = ts.createSourceFile('temp.ts', code, ts.ScriptTarget.Latest, true);
    let body: ts.ConciseBody | undefined;

    ts.forEachChild(sourceFile, function visit(node) {
      if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
        body = node.body;
      }
      ts.forEachChild(node, visit);
    });

    return { sourceFile, body: body! };
  };

  it('should remove indentation correctly', () => {
    const code = `() => {
      const a = 1;
      const b = 2;
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toBe('const a = 1;\nconst b = 2;');
  });

  it('should transform toBe assertion', () => {
    const code = `() => {
      const val = 10;
      expect(val).toBe(10);
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toContain('// Output: 10');
    expect(result).toContain('const val = 10;');
  });

  it('should transform toEqual assertion', () => {
    const code = `() => {
      expect([1, 2]).toEqual([1, 2]);
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toContain('// Output: [1, 2]');
  });

  it('should handle toBeNull and toBeUndefined', () => {
    const code = `() => {
      expect(null).toBeNull();
      expect(undefined).toBeUndefined();
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toContain('// Output: null');
    expect(result).toContain('// Output: undefined');
  });

  it('should ignore eslint-disable or @ts- comments', () => {
    const code = `() => {
      // eslint-disable-next-line
      const a = 1;
      expect(a).toBe(1);
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).not.toContain('eslint-disable');
    expect(result).toContain('const a = 1;');
  });

  it('should handle multiline output comments', () => {
    const code = `() => {
      const obj = { a: 1, b: 2 };
      expect(obj).toEqual({
        a: 1,
        b: 2
      });
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toContain('/* Output: {');
    expect(result).toContain('*/');
  });

  it('should handle empty blocks and return zero indentation', () => {
    const code = `() => {}`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toBe('');
  });

  it('should fallback to default case for unsupported matchers', () => {
    const code = `() => {
      const isValid = true;
      expect(isValid).toBeTruthy();
    }`;
    const { sourceFile, body } = createBody(code);
    const result = extractTestCode(sourceFile, code, body);

    expect(result).toContain('expect(isValid).toBeTruthy();');
  });
});
