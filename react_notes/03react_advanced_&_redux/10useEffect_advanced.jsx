/*
! More on useEffect & its Rules

! Dependency Array Rules:
  - Every state variable, prop, and context value used inside the effect MUST be included in the dependency array.
  - All 'reactive values' must be included: that means any function or variable that references any other reactive value.
    ? State, prop, or context value...or any other value that references a reactive value.
  - Dependencies choose themselves: NEVER ignore the exhaustive-deps ESLint rule.
  - Do NOT use objects or array as dependencies (objects are recreated on each render, and React sees new objects as different.
  
! Removing Unncessary Dependencies
  ? Removing function dependencies
    - Move the function into the effect
    - If you need the function in multiple places, memoize it (useCallback)
    - If the function doesn't reference any reactive values, move it out of the component.

  ? Removing object dependencies
    - Instead of including the entire object, include only the properties you need.
    - If that doesn't work, use the same strategies as for functions (moving or memoizing objects)

  ? Other strategies
    - If you have multiple related reactive values as dependencies, try using a reducer (useReducer)
    - You don't need to include setstate (from useState) and dispatch (from useReducer) in the dependencies, as React guarantees them to be stable across renders.

! When NOT to use an effect
* Effects should be used as a last resort, when no other solution makes sense.
  ? React calls them an 'escape hatch' to step outside of React.

* 3 Cases where Effects are Overused:
  1. Responding to a user event: An event handler function should be used instead.
  2. Fetching data on component mount.
    - This is fine in small apps, but in real-world apps, a library like React Query should be used.
  3. Synchronizing state changes with one another (setting state based on other state variables).
    - Try to use derived state and event handlers.
*/