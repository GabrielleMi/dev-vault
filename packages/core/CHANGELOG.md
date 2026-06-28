# @GabrielleMi/core

## 0.4.1

### Patch Changes

- fd3b40b: Fix broken function exports

## 0.4.0

### Minor Changes

- b92df87: Rename getDeepEntry() to getEntry() and improve performance
  Add getEntryAt() utility function
  Improve sort() performance
  Improve search() performance
  Add isDefined() utility function
  Add IntlCache namespace with NumberFormat and Collator
  Add an empty object constant
  Add an empty array constant

## 0.3.0

### Minor Changes

- 6bca355: Add omit object utility function
- f2d49f7: Add pick object utility function
- e6c1f06: Add clamp utility function & add upgrade-insecure-requests in CSP types

### Patch Changes

- 0d58e40: Fix an issue where `safeStringify` did not correctly ignore keys filtered out by the `replacer` function or whitelist array.

## 0.2.0

### Minor Changes

- c1528bd: Add new HTTP and method code constants

## 0.1.0

### Minor Changes

- 358e80d: This release establishes the core primitives required for the monorepo's ecosystem, focusing on common constants and type-safe helpers.

  Key Features:

  - Constants: Centralized HTTP_CODES and HTTP_METHODS for consistent API interaction across packages.
  - Type Guards: Robust runtime checks for primitives, objects, and null values.
  - Core Utilities: Foundational helpers such as safeJoin and isEmpty to ensure consistent data handling.
  - Stability: Designed as a dependency-free package to serve as a reliable foundation for higher-level packages.

  This library is experimental and provided as-is. It serves as the primary utility layer for internal project architecture.
