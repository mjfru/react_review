/*
! The Context API - A Solution to Prop Drilling
? Let's say we have the task of passing state into multiple deeply nested child components.
One solution, of course, is to prop drill them through multiple components to reach their desired location.
This creates a new problem, making the code cumbersome and inconvienient.
(Remember that a good solution to 'prop drilling' is simply better component composition.)

* Context API allows state to be read from everywhere!
* This is a system to pass data throughout the app without manually passing props down the tree.
* It allows us to 'broadcast' global state to the entire app.
? There are a couple parts of the context API:
  1. The Provider: Gives all child components access to a value, commonnly placed in the top App.jsx file.
  2. The Value: The data we want to make available (usually state and functions) and is passed into the provider.
  3. Consumers: These are all the components that read the provided context value; we can have as many as we want.

! Important & New: When a value in the context API is updated, all subscribed consumers will re-render.
*/