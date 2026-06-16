/**
 * @examplesFromTests ./test-file.test.ts
 * @examplesFromTests ./test-file.test.js
 */
export function addNumbers(a: number, b: number): number {
  return a + b;
}

/**
 * @examplesFromTests ./test-file.test.ts
 */
export function concatStrings(a: string, b: string): string {
  return `${a}${b}`;
}

/** @examplesFromTests */
export function emptyTag() {}

/** @examplesFromTests ./ghost-file.ts */
export function ghostFunc() {}
