/*
! Optimization & Avoiding Wasted Renders
! Performance Optimization Tools:

* 1. Prevent Wasted Renders
  - Leveraging memo, useMemo, and useCallback
  - Passing elements as children or regular props

* 2. Improve App Speed / Responsiveness
  - Leveraging useMemo, useCallback, useTransition

* 3. Reduce Bundle Size
  - Using fewer 3rd-party packages
  - Code splitting & lazy loading


? When does a component's instance re-render?
- A component instance only gets re-rendered in 3 different situations:
  1. State changes
  2. Context changes
  3. Parent component re-renders
    * This creates the false impression that changing props re-renders a component but this is NOT true.

! Remember: A render does not mean that the DOM actually gets updates, it just means the component function gets called, resulting in an expensive operation.

* A wasted render is a render that didn't produce any change in the DOM.
* Only a problem when they happen too frequentely or when the component is very slow.

! The Profiler Developer Tool
* This tool allows us to analyze renders; why they rendered, how long it took, etc.
*/
