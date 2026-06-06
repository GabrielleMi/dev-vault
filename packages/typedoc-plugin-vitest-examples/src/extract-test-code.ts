import * as ts from 'typescript';

function hasMultipleLines(str: string): boolean {
  return str.includes('\n');
}

function skipLine(str: string): boolean {
  const noSpaceStr = str.replaceAll(' ', '');
  const forbidden = [ 'eslint-disable', '@ts-' ];
  return forbidden.some((marker) => noSpaceStr.includes(marker));
}

export function extractTestCode(sourceFile: ts.SourceFile, testFileContent: string, body: ts.ConciseBody) {
  const start = body.getStart(sourceFile);
  const end = body.getEnd();
  let rawCodeBlock = testFileContent.substring(start, end);

  if (rawCodeBlock.startsWith('{') && rawCodeBlock.endsWith('}')) {
    rawCodeBlock = rawCodeBlock.substring(1, rawCodeBlock.length - 1);
  }

  const rawLines = rawCodeBlock.split('\n');
  const minIndentationAmount = rawLines.reduce<number>((minIdentation, line, i) => {
    if (i === rawLines.length - 1 && minIdentation === Infinity) {
      return 0;
    }

    if (line.trim().length === 0) {
      return minIdentation;
    }

    const match = line.match(/^\s*/);
    if (match) {
      return Math.min(minIdentation, match[0].length);
    }

    return minIdentation;
  }, rawLines.length === 0 ? 0 : Infinity);

  const originalLineIndentations = new Map<string, string>();
  const deIndentedLines: string[] = [];

  for (const line of rawLines) {
    if (skipLine(line)) {
      continue;
    }

    if (line.length === 0) {
      deIndentedLines.push('');
      continue;
    }
    const originalIndentation = line.match(/^\s*/)?.[0] || '';
    const deIndentedLine = line.substring(minIndentationAmount);
    deIndentedLines.push(deIndentedLine);
    originalLineIndentations.set(deIndentedLine.trim(), originalIndentation);
  }

  const code = deIndentedLines.join('\n').trim();

  const transformerSourceFile = ts.createSourceFile(
    'tempTransform.ts',
    code,
    ts.ScriptTarget.Latest,
    true
  );

  let transformedCodeString = code;

  ts.forEachChild(transformerSourceFile, function visitAndTransform(innerNode: ts.Node) {
    if (ts.isExpressionStatement(innerNode) && ts.isCallExpression(innerNode.expression)) {
      const callExpression = innerNode.expression;

      if (ts.isPropertyAccessExpression(callExpression.expression)
        && ts.isCallExpression(callExpression.expression.expression)
        && ts.isIdentifier(callExpression.expression.expression.expression)
        && callExpression.expression.expression.expression.getText(transformerSourceFile) === 'expect') {
        const matcherName = callExpression.expression.name.getText(transformerSourceFile);
        const expectCall = callExpression.expression.expression;
        const variableNameNode = expectCall.arguments[0];
        let expectedValueText: string | undefined;

        switch (matcherName) {
          case 'toBe':
          case 'toEqual': {
            const expectedValueNode = callExpression.arguments[0];
            if (expectedValueNode) {
              expectedValueText = `Output: ${expectedValueNode.getText(transformerSourceFile)}`;
            }
            break;
          }
          case 'toBeNull':
            expectedValueText = 'Output: null';
            break;
          case 'toBeUndefined':
            expectedValueText = 'Output: undefined';
            break;
          default:
            break;
        }

        if (variableNameNode && expectedValueText !== undefined) {
          const variableText = variableNameNode.getText(transformerSourceFile);
          const originalStatementText = innerNode.getText(transformerSourceFile);
          const lines = originalStatementText.split('\n');
          const firstLine = lines[0] || '';
          const indentation = firstLine.match(/^\s*/)?.[0] || '';

          const expectedValueTextComment = hasMultipleLines(expectedValueText) ? `\n/* ${expectedValueText} */` : ` // ${expectedValueText}`;
          const replacementLine = `${indentation}${variableText};${expectedValueTextComment}`;

          transformedCodeString = transformedCodeString.replace(originalStatementText, replacementLine);
        }
      }
    }

    ts.forEachChild(innerNode, visitAndTransform);
  });

  return transformedCodeString;
}
