/*
! Redux - The What, When, Why & How

? What is Redux?
* - A 3rd-party library to manage global state
* - Standalone library but easy to integrate with React apps using react-redux library.
* - All global state is stored in one globally accessible store, which is easy to update using 'actions' (like useReducer).

Global store is updated ---> All consuming components re-render.

* There are two "versions" of Redux: 1. Classic Redux and 2. Modern Redux Toolkit

? When should we use Redux?
Historically, Redux was used in most React apps for all global state.
Today, due to alternatives, many apps don't need Redux anymore unless they use a lot of global UI state.
* We should use it when there is lots of global state that updates frequentely.
* For remote global state, there are better, more specialized tools available, hence why many apps don't use Redux so much any more.

? Why learn it then?
-   1. It can be hard to learn
-   2. You will encounter Redux code in your job
-   3. Some apps do require Redux or a similar library.

! You need to have a good grasp of the useReducer hook in order to use and understand Redux.

? How does Redux work?
In Redux, we dispatch actions to a store, a centralized container where all global state and reducer functions live.
Each of these reducers is a pure function that calculates the next state based on the action and the current state.
Usually one reducer per app feature (shopping cart, data, theme, etc.)

* Redux Cycle: Event-handler in component -> Action creator function -> dispatch -> store (reducer functions) -> Next state -> Re-render.
Think about a bank example: 
You are the action creator, wanting to do withdraw money.
This goes to a teller, the dispatch, and is assigned an action and payload, which travels to the bank / store.
Your action hits the appropriate reducer action and provides you with what you requested and your balance changes.
! The goal is to make the state update logic seperate from the rest of the application.

! Redux Middleware and Thunks
? Where do we make asynchronous API calls (or any other async operations) in Redux?
We cannot do this in the store, they aren't allowed there; only pure functions in Reducers too.
Data fetching in components isn't ideal either...
* Middleware to the rescue! Middleware is a function that sits between dispatching the action and the store; it allows us to run code after dispatching but before reaching the reducer.
* Component --> dispatch ---> Middleware --> store
* It's perfect for asytnc code, API calls, timers, and a place for side effects.

! One of the most popular middleware to use with Redux is Thunk(s).

! Redux Toolkit
* The is the modern and preferred way of writing Redux code
? It's an opinionated approach, forcing us to use Redux best practices.
It's 100% compatible with 'classic' Redux, allowing us to use them together.

? What are the advantages?
  - Allows us to write a lot less code to achieve the same result
  - Gives us 3 big things:
    - We can write code that "mutates" state inside reducers (will be converted behind the scenes)
    - Action creators are automatically created
    - Automatically sets up Thunk Middleware and DevTools

! Context API vs. Redux
* It was and maybe still is thought that React's Context API + useReducer would replace Redux.

? Context API + useReducer
* - Built into React
* - Easy to set up a single context
! - Additional state "slide" requires new context set up from scratch ("provider hell")
! - No mechanism for async operations
! - Performance optimization is a pain
! - Only has React DevTools

? Redux
! - Requires an additional package
! - More work to set up initially
* - Once set up, it's easy to create additional state slices
* - Supports middleware for async operations
* - Performance is optimized out of the box
* - Excellent dev tools

? When to use which?
? Context API + useReducer
- Use for global state management in small apps.
- When you just need to share a value that doesn't change very often (color theme, preferred language, authenticated user, etc.)
- When you need to solve a simple prop drilling problem
- When you need to manage state in a local sub-tree of the app.

? Redux
- Use for global state management in large apps.
- When you have lots of global UI state that needs to be updated frequently (shopping cart, current tabs, complex filters, etc)
- When you have complex state with nested objects and arrays
*/
