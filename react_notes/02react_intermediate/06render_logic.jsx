/*
! Render Logic & Its Rules
* There are two types of logic in React components:

! 1. Render Logic
? This is code that lives at the top level of the component function
  It participates in describing how the component view looks like.
  Executed every time the component renders.

! 2. Event Handler Functions
  These are pieces of code that are executed as a consequence of the event that the handler is listening for (change events, etc.).
  This is code that actually does thing: update state, HTTP requests, read an input, navigation, etc.

! Refresher: Functional Programming Principals
* A side effect is the dependency on or modification of any data outside the function scope.
"Interaction with the outside world."
? Examples: mutating, external variables, HTTP requests, writing to the DOM.

* A Pure Function is a function with NO side effects.
They do not change any variables outside its scope and given the same input, a pure function always returns the same output.

! Side effects are not necessarily bad!
? A program can only be useful if it has some interaction with the outside world.
*/

//* Pure Function Example:
function circleArea(r) {
  return 3.14 * r * r;
}

//* Impure Function Example:
function circleAreaImpure(r) {
  //? Date is constantly changing; unpredictable output
  const date = Date.now();
  const area = 3.14 * r * r;
  return `${date}: ${area}`
}

/*
! In React, components must be PURE when it comes to render logic.
* When given the same props (input), a component instance should always return the same JSX (output).
* Render logic must produce NO side effects.
No interaction with the outside world is allow...so in render logic:
  - Do not perform network requests (API calls)
  - Do NOT start timers
  - Do not directly use the DOM API
  - Do not mutate objects or variables outside the function scope
  - Do not update state or refs, this will create an infinite loop.

? However, side effects are allow (and encouraged) in event handler functions!
A special hook, useEffect, is used to register side effects.
*/