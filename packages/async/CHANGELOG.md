# @GabrielleMi/async

## 0.3.1

### Patch Changes

- Updated dependencies [65e5f24]
  - @GabrielleMi/core@0.6.0

## 0.3.0

### Minor Changes

- c741bce: Add Ftcher class to create a small HTTP client bound to a fixed origin.
  Add serializeQuery utiliy function.
  Add buildRequestBody utility function.
  Update ftch wrapper to return the full response and the parsed data.

### Patch Changes

- Updated dependencies [c741bce]
  - @GabrielleMi/core@0.5.0

## 0.2.1

### Patch Changes

- fd3b40b: Fix broken function exports

## 0.2.0

### Minor Changes

- c1528bd: Add ftch utility
- 8d0c6bc: ### Added
  - **`delay`**: Introduced a precise delay utility using the `Temporal` API for duration handling.
  - **`debounce`**: Added a time-based debouncing utility to limit high-frequency function execution.
  - **`throttle`**: Implemented a throttling utility for rate-limiting execution over time, utilizing `Temporal` for accurate timing.
  - **`streamPromises`**: Introduced asynchronous generator utilities for memory-efficient, lazy processing of promise-returning functions.

## 0.1.0

### Minor Changes

- 358e80d: This initial release introduces a new asynchronous control flow utility.
