import * as fs from 'node:fs';
import ts from 'typescript';

const sourceFileCache = new Map<string, [ts.SourceFile, string]>();

export function clearSourceFileCache(): void {
  sourceFileCache.clear();
}

export function getOrCreateSourceFile(filePath: string): [ts.SourceFile, string] {
  if (sourceFileCache.has(filePath)) {
    return sourceFileCache.get(filePath)!;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
  sourceFileCache.set(filePath, [ sourceFile, content ]);
  return [ sourceFile, content ];
}

export const EXAMPLE_FROM_TESTS_TAG = '@examplesFromTests';
export const EXAMPLE_ALLOWED_TAG = '@isTestExample';
export const PLUGIN_NAME = 'typedoc-plugin-vitest-examples';

export const log = (content: string) => `[${PLUGIN_NAME}] ${content}`;
