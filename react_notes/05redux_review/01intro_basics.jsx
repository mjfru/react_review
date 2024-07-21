/*
! Redux
* Redux is a state management library system that follows a pattern known as Flux achitecture.
* In Flux and Redux, shared information is consolidated within a single object instead of being scattered across individual components.
? Components receive data to render and can request changes using actions, which are events triggered by user interactions or other events.
? Furthermore, the state is available throughout the application, and updates are handled in a predictable manner, with components being notified whenever a change occurs.

From Redux itself:
"The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected."

! One-Way Data Flow
* In most applications, there are three parts:
  1. State - the current data used in the app
  2. View - the user interface displayed to users
  3. Actions - events that a user can take to change the state

* The flow of information would go like this:
  The state holds the current data by using the app's components
    -> The view components display that state data
      -> When a user interactions with the view, such as clicking a button, the state will be updated in some way.
        -> The view is updated to display the new state.

? With plain React, these three parts overlap a bit; components not only render the user interface but they also manage their own state.
? When actions that may change the state occur, components need to directly communicate with each other.

* Redux helps seperate the state, the view, and actions by requiring that the state be managed by a single source.
! Requests to change the state are sent to this single source by view components in the form of an action.
! Any components of the view that would be affected by these changes are informed by this single source.
* By imposing this structure, Redux makes our code more readable, reliable, and maintainable.

! State
* State in a web application represents the current information that drives the application's behavior and appearance.
* It acts as a centalized source of data, storing the essential details of the application at any given moment.

Complex apps have a multitude of states to keep track of and passing down states through the component tree can become tedious and inefficient.
Redux offers a consistent and predictable solution for state management.

? With Redux, the state can be any JS type, including numbers, strings, booleans, and objects.
const state = ['Print this out', 'Write emails']

*/

//? Define the state of a playlist application in a state array:
const state = ["Take Five", "Claire de Lune", "Respect"];