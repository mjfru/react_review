/*
! useReducer
* Until this point, we've been using useState to manage state, which, can be fine, but is troublesome with more complex data / structures.
  1. When components have a lot of state variables and state updates, spread across many event handlers all over the component.
  2. When multiple state updates need to happen at the same time (as a reaction to the same event, like 'starting a game')
  3. When updating one piece of state depends on one or multiple other pieces of state.

* useReducer is an alternative way of setting state, ideal for complex state and related pieces of state.
*/

import { useReducer } from "react";

// Above: state & dispatch
//? Stores related pieces of state in a -state- object (usually).
//* Dispatch is a function used to trigger state updates by 'sending' actions from event handlers to the reducer (instead of setState()).

const [state, dispatch] = useReducer(reducer, initialState)

// Below: useReducer & arguments
//? useReducer needs reducer: a function containing all logic to update state; it decouples state logic from component...like setState() with 'superpowers'!
//! This is what will ultimately update the state object
//? reducer is a pure function (no side effects) that takes the current state and action and returns the NEXT state

function reducer(state, action) {
  switch (action.type) {
    case 'example1':
      return 1;
    case 'example2':
      return 2;
    default:
      throw new Error('Error!')
  }
}

//* Action in the reducer function is an object that describes how state should be updated

//! A mental model for reducers
/*
Real-world task: Withdrawing $5,000 from your bank account
Since this is a lot of money, you can just simply go to an ATM, you go inside the bank to talk to a teller.
But, you don't walk straight to the vault and take the money home.
You already know how much money, your account number, etc. and tell the employee.
They check your information and, if it checks out, you get your money.

* The state here is the banks value, it's what needs to be updated.
* You, the customer, is the dispatcher, you are requesting the state (money in the safe) to change.
* The reducer is the one that actually makes the update, the bank teller.
* They know how much money to check for and take via your request, the action.

! useState vs. useReducer
* useState
- Is ideal for single, independent pieces of state (numbers, strings, etc.).
- Logic to update state is placed directly in event handlers or effects, spread all over one or multiple components.
? setScore(0)
? setPlaying(true)
? setTimerSec(0)
- Has imperative state updates & is easier to understand and use

* useReducer
- Is ideal for multiple pieces of state and complex state (objects with many values, nested objects / arrays).
- Logic to update state lives in one central place, decoupled from components: the reducer
- State is updated by dispatching an action to a reducer.
- Declarative state updates: complex state transitions are mapped to actions
? dispatch({ type: 'startGame' });
- Can be more difficult to understand and implement

! When to use useReducer?
- Do we need just one piece of state?
  - Yes -- use useState instead!
  - No -- Do states live together?
    - Yes - Are you willing to implement more complex code?
      - Yes -- Use useReducer
      - No -- Use useState
    - No - Do you have over 3 or 4 pieces of related state, including objects?
      - Yes -- Use useReducer
      - No
        - Too many event handlers making components large and confusing?
          -- Yes - Use useReducer
          -- No - Use useState
* useState should remain your default choice for managing state!
*/

