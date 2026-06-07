An asynchronous utility library designed for precise execution flow control and memory-efficient data processing in modern TypeScript projects.

Note: This is an experimental library developed for personal projects and is provided "as-is."

## 🚀 Installation
```bash
pnpm add @GabrielleMi/async
```

## ✨ Key Features
### 1. Sequential Processing
Going beyond the native parallelism of Promise.all, the Sequential namespace provides tools to execute tasks in strict order, ensuring predictable flow and controlled resource utilization.

- Sequential.all: Sequential execution with a "fail-fast" strategy.
- Sequential.allSettled: Sequential execution that continues even if individual tasks reject.

### 2. Stream Generators
To prevent memory saturation when processing large volumes of data, this library utilizes AsyncGenerator patterns.

- streamPromises: Lazy processing of promise-returning functions.
- streamSettledPromises: A memory-efficient, sequential alternative to Promise.allSettled.

### 3. Flow Control
throttle & debounce: Timing utilities built on the Temporal API, offering superior time precision compared to traditional Date objects.

- CancellableFunction: A type-safe interface for wrapping asynchronous functions, allowing for immediate execution cancellation.