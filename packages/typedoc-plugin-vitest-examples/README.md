# typedoc-plugin-vitest-examples
A TypeDoc plugin that transforms your Vitest tests into live documentation examples.

Note: This project is in Alpha.

## Description
This plugin automates the documentation of your utility functions by extracting examples directly from your test files. No more manual copying and pasting of examples into your JSDoc comments; your documentation stays perfectly synchronized with your tests!

## Installation
```bash
pnpm add -D typedoc-plugin-vitest-examples
```

## Usage
### 1. In your source code
Add the `@examplesFromTests` tag followed by the relative path to the corresponding test file:

```typeScript
/**
 * Splits a given array into chunks of a specified size.
 * * @examplesFromTests ../test/array.test.js
 */
export const splitInChunks = <T,>(value: T[], chunkSize: number): T[][] => {
  // ...
};
```

### 2. In your test file
Use the `@isTestExample` tag in the comments preceding your `it` or `test` blocks to mark them for extraction. By default, the plugin associates the example with the function whose name matches the surrounding `describe` block. You can optionally add a title after the tag.

```typeScript
describe('splitInChunks', () => {
    // @isTestExample Splitting an array
    it('should split an array into even chunks', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const expected = [[1, 2], [3, 4], [5, 6]];
      expect(splitInChunks(arr, 2)).toEqual(expected);
    });
})
```

#### Advanced Binding
You can explicitly bind a test to a function by providing its name in square brackets:

```typescript
// @isTestExample [myFunctionName] Descriptive title
it('should perform a specific task', () => {
  expect(myFunctionName()).toBe(true);
});

## How it works
The plugin scans test files for blocks marked with `@isTestExample`.

It automatically cleans up the code indentation.

It parses assertions (e.g., `expect(...).toEqual(...)`) and transforms them into // Output: ... comments within the code block.

It injects the result into generated documentation under an `@example` tag.

## Features
Automatic Cleanup: Source tags (`@examplesFromTests`, `@isTestExample`) are stripped from the final documentation.

Assertion Support: Supports `toBe`, `toEqual`, `toBeNull`, and `toBeUndefined`.

Smart Merging: Tests sharing the same example title are grouped automatically.

Maintenance-Free: If tests change, your documentation updates automatically on the next build.

## Roadmap
- Nested describe blocks: Add support for deep test hierarchy.
- describe block extraction: Allow using `@isTestExample` on describe blocks to extract multiple tests at once.
- Extended Vitest API: Support for more matchers and the `.not` assertion statement.
- Consistent Ordering: Ensure that extracted examples appear in the documentation in the same order as they are defined in the test file.