/*
! React Suspense
* This is a built-in React component that we can use to catch/isolate components (or entire subtrees) that are NOT ready to be rendered ("suspending").

? What causes a component to be suspending?
  - 1. Fetching data (with a supported library-- React Query, Next.js, etc.)
  - 2. Loading code (with React's lazy loading)

* Typically, a component that loads data and any other component that needs that data is wrapped in a suspense component.

When rendering, the suspending component is found, it goes to the closest suspense parent ('boundary') and discards already rendered children and displays a fallback component/JSX (like a loading spinner) instead.

After the async work is done and the suspending component is ready, React will render the subtree under the suspense boundary.

! Important: Components do not automatically suspend just because an async operation is happening inside them.
Integrating async operations with Suspense is hard, so we use libraries like React Query and Next.js.
*/