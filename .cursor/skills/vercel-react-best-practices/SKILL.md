---
name: vercel-react-best-practices
description: React and Next.js performance optimization guidelines from Vercel Engineering. Use when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance.
---

# Vercel React Best Practices

A comprehensive guide for optimizing React and Next.js performance, based on Vercel engineering standards.

## Core Priority Areas

### 1. Eliminating Waterfalls (CRITICAL)
*   **Parallel Fetching:** Use `Promise.all()` for independent data fetches.
*   **Deferred Await:** Move `await` into specific logic branches where the data is actually needed.
*   **Suspense Boundaries:** Use `<Suspense>` to stream content and avoid blocking the entire page.

### 2. Bundle Size Optimization (CRITICAL)
*   **Direct Imports:** Avoid barrel files (`index.ts`). Import directly from the source file.
*   **Dynamic Imports:** Use `next/dynamic` for heavy client-side components.
*   **Conditional Loading:** Only load modules when the feature is actively being used.

### 3. Server-Side Performance (HIGH)
*   **Request Deduplication:** Use `React.cache()` to share data across components in a single request.
*   **Minimize Serialization:** Reduce the amount of data passed from Server Components to Client Components.
*   **Non-Blocking Operations:** Use the `after()` API for tasks that don't need to block the response.

### 4. Re-render Optimization (MEDIUM)
*   **Memoization:** Extract expensive computations into `useMemo` or `React.memo` components.
*   **Stable Callbacks:** Use functional `setState` (e.g., `setCount(c => c + 1)`) to avoid dependency on stale state in callbacks.
*   **Derived State:** Subscribe to derived booleans (e.g., `const isValid = count > 0`) instead of raw values where possible.

### 5. Rendering Performance (MEDIUM)
*   **SVG Optimization:** Reduce SVG coordinate precision and avoid animating complex SVG paths directly (animate a wrapper instead).
*   **Layout Shift Prevention:** Use `content-visibility: auto` for long lists to reduce initial layout costs.
*   **Conditional Rendering:** Prefer ternaries over `&&` to avoid accidental `0` rendering in JSX.

## Quick Checklist
- [ ] Are independent API calls wrapped in `Promise.all`?
- [ ] Are we using `next/dynamic` for heavy client components?
- [ ] Is `React.cache()` being used for request-level data sharing?
- [ ] Have all unnecessary barrel imports been removed?
- [ ] Are SVGs simplified and optimized?
