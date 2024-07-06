/*
! The Bundle & Code Splitting

Remember, what happens when a client visits a website?
On initial load, the server sends the client a huge JS file.
* This file is the bundle: the JavaScript bundle is a file containing the entire application's code.
* Downloading the bundle will load the entire app at once, turning it into an SPA.

? The bundle size: The amount of JS users have to download to start using the app.
! One of the most important things to be optimized, so that the bundle takes less time to download.

* To optimize this, we can use code splitting: splitting the bundle into multiple parts that can be downloaded over time ("lazy loading").

! When to and When NOT to Optimize
! Don't:
  - Optimize prematurely
  - Optimize anything if there is nothing to optimize
  - Wrap all the component in memo(), useMemo, or functions in useCallback()
  - Optimize content if it's not slow and doesn't have many consumers.

* Do:
  - Find performance bottlenecks using the Profiler and visual inspection (laggy UI)
  - Fix those real performance issues
  - Memoize expensive re-renders
  - Memoize expensive calculations
  - Optimize context if it has many consumers and changes often
  - Memoize context value + child components
  - Implement code splitting & lazy loading for SPA routes.
*/