/*
! React Hooks
* What are hooks? -- They are special built-in functions that allow us to 'hook' into React internals, like APIs!
  - Creating and accessing state from the Fiber tree
  - Registering side effects in the Fiber tree
  - Manual DOM selections.

? Hooks always start with the word 'use' (useState, useRef, useEffect...)
* Enable easy reusing of non-visual logic: we can compose multiple hooks into our own custom hooks.

* Give function components the ability to own state and run side effects at different lifecycle points (before v 16.8, only available in class components).

So far, we've used two hooks, useState & useEffect, but React has over twenty!

! The Rules of Hooks
* 1. Only call hooks at the top level
  - Do not call hooks inside conditionals, loops, nested functions, or after an early return
    - This is necessary to ensure that hooks are always called in the same order.
* 2. Only call hooks from React functions
  - Only call hooks inside a function component or a custom hook.

? These rules are automatically enforced by React's ESLint rules.

! useState Summary
* We use useState to both:
1. Create state
  - Simply: const [count, setCount] = useState(3);
  - Lazy (based on function): const [count, setCount] = useState(() => localStorage.getItem('count'));
  ? Functions here must be pure and accept NO arguments, called on only the initial render.

and

2. Update state
  - Simply: setCount(1000);
  - Based on current state: setCount((c) => c + 1);
  ? Again, functions must be pure and return next state; preferred way to update state.
  ! Make sure to never mutate objects or arrays but to replace them.

! Introducing useRef
* Ref stands for reference and is like a box (object) with a mutable(!!)current property that is persisted across renders!
? Two big use cases:
  1. Creating a variable that stays the same between renders (previous state, setTimeout, id, etc.)
  2. The big one, selecting and storing DOM elements
* Refs are for data that is NOT rendered: usually only appearing in event handlers or effects, not in JSX (we'd be using state instead)
! Do not read, write, or read .current in render logic (like state).

! State vs. Refs
* State & Refs both persist between renders
* Updating state causes re-renders, updating refs do not.
* State is immutable, refs are not.
* State has async updates, refs do not.


const myRef = useRef(23);
? We can write to and read from the ref using .current
myRef.current = 1000


! Reusing Logic with Custom Hooks
* Custom hooks are all about reusability and in React, we have two things we can reuse:
  1. A piece of UI (component)
  2. A piece of logic
    - If your logic does not contain hooks, you can make a regular function
*   - If it does, you need a custom hook, allowing us to reuse non-visual logic in multiple components.

? One custom hook should only have one purpse, to make it reusable and portable (even across multiple projects)
*/

const { useState, useEffect } = require("react");

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return [data, isLoading];
}

/*
* Unlike components, custom hooks can receive and return -any relevant data- (usually [] or {}).
* Need to use one or more hooks.
* Function name must start with 'use'.
*/