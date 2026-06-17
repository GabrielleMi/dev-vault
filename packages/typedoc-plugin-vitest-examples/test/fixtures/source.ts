/**
 * @examplesFromTests ./typescript.test.ts
 * @examplesFromTests ./javascript.test.js
 * @examplesFromTests ./tsx.test.tsx
 */
export function addNumbers(a: number, b: number): number {
  return a + b;
}

/**
 * @examplesFromTests ./typescript.test.ts
 */
export function concatStrings(a: string, b: string): string {
  return `${a}${b}`;
}

/** @examplesFromTests */
export function emptyTag() {}

/** @examplesFromTests ./empty.test.ts */
export function emptyTest() {}

/** @examplesFromTests ./ghost-file.ts */
export function ghostFunc() {}

export function noTag() {}
