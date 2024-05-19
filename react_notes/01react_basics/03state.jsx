/*
! State
* The most fundamental aspect of React!

During this course, I will be learning: 
  - What it is and why do we need it?
  - How to use it in practice with:
    - useState
    - useReducer
    - Context API

  - How to think about state:
    - When to use it
    - Where to place it
    - Types of state

* State is data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle.
! A component's 'memory'
? Active tabs, notification numbers, text content of an input field, the content of a shopping cart, etc.

* A piece of state / state variable is a single variable in a component.
The general term 'state' is all the terms together to refer to this idea.

* Changing / updating state will cause React to re-render the component to reflect those changes.

! In summary (so far):
* State allows developers to:
  1. Update the component's view (by re-rendering it)
  2. Persist local vartiables between renders


! The Mechanics of State
* We don't do direct DOM manipulations...so how is a component view updated/changed?
! React updates components and changes their views by re-rendering it entirely by calling the component function again.

Let's imagine there's an event handler on a button.
The user clicks the button and updates state, using setState, which re-renders the component.

? React -reacts!!- to state changes by re-rendering the UI.

! Some Rules:
* One component, one state; each component has and manages its own state, no matter how many times we render the same component.
With state, we view UI as a reflection of data changing over time.
We describe that reflection of data using state, event handlers, and JSX.

! Practical Guidelines
* Use a state variable for any data that the component should keep track of over time.
  ? This is data that will change at some point! In regular JS, that's a let variable, [], or {}.
* Whenever you want something in the component to be dynamic, create a piece of state related to that 'thing' and update the state when the 'thing' should change!
  Example: A modal window can be opened or closed.
  We create a state variable isOpen that tracks whether the modal is open or not.
  On isOpen = true, we display the window, on isOpen = false, we hide it.
* If you want to change the way a component looks or the data it displays, update the state! This usually happens in an event handler function.
* When building a component, imagine its view as a reflection of state changing over time.
! For data that should not trigger component re-renders, do NOT use state; use a regular variable instead!


! Potential Interview Question! 
! What's the difference between 'state' and props?
* State is internal data, owned by the component where it is declared.
* Props are external data, owned by parent components and are similar to function parameters.

* State is similar to component "memory".
* It can be updated by the component itself and updating it causes the component its in to re-render.
* It is used to make components interactive.

* Props are read-only.
* Receiving new props causes the component to re-render; usually when the parent's state has been updated.
* They are used by parent components to configure their child component ("settings").
*/