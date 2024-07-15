/*
! Context - An Elegant Way to Pass / Share Data
* Context is useful in situations where we are prop drilling too much or have a piece of state that everything or many things needs.

! useReducer - An alternative to useState
* useReducer is preferrable to useState when you have complex state logic that involves multiple sub-values or when state depends on the previous one.

* Just like useState, it returns an array of two items
? The huge difference is the dispatch action.
const [state, dispatch] = useReducer();

Takes two arguments: a function we want to use and the initial value for your state.
const [state, dispatch] = useReducer(ourReducerFunction, initialState)

* Dispatch can then do all sorts of things.
You're saying what you want to do, but not HOW it gets done.
dispatch({ type: "login" })

* The reducer function itself indicates what our dispatch should do, depending on the type, typically using switch statements
* Everything is condensed in this part of the code and we can pass it down to all our children components.

function ourReducer(state, action) {
  switch (action.type) {
  * Remember not to mutate state! Mimic initial state but make changes
    case "login":
      return {loggedIn: true, flashMessages: state.flashMessages}
    case "logout":
      return {loggedIn: false, flashMessages: state.flashMessages}
    case "flashMessage":
      return {loggedIn: state.loggedIn, flashMessages: state.flashMessages.concat(action.value)}
  }
}

! Introducing Immer
* Immer gives us a 'draft/carbon copy' of state, which we can directly mutate.

*/
