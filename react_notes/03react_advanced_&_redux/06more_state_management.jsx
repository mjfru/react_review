/*
! More State Management: Review & New Concepts
* Remember, state management is essentially giving each piece of state the right home.
? We always need to think about when to use it and what kind (local vs. global).

! Types of State:
There are two ways to classify state.
? 1. State Accessibility
  Local State vs. Global State
    * Local State is needed by only one or few components
    * Local state is only accessible in component and child components.
    * Global State might be needed by many components
    * Accessible to every component in the application
  ! Ask yourself, if this component was rendered twice, should the state update reflect in the other one?
    - If NO, it's local state. If YES, it's global.
? 2. State Domain
  Remote State vs. UI State
    * Remote State is all application data loaded from a remote server (API)
    * Remote State is usually asynchronous and needs re-fetching + updating.
    * UI State is everything else: theme, list filters, form data, etc.
    * UI State is usually synchronous and stored in the application itself.

! State Placement Options
Where to place            Tools                               When to Use?
* Local Component         useState, useReducer, useRef        Local State
* Parent Component        useState, useReducer, useRef        Lifting up State
* Context                 Context API + useState/useReducer   Global state (pref. UI state)
* 3rd-Party Library       Redux, React Query, Zustand, etc.   Global state (remote or UI)
* URL                     React Router                        Global state, between pages
* Browser                 Local storage, session storage      Storing Data in Browser

? How to manage different types of state in practice?

                Local State                             Global State

                - useState                              - Context API + useState/Reducer
UI State        - useReducer                            - Redux, Zustand
                - useRef                                - React Router

                                                        - Context API + useState/useReducer
Remote State    - fetch + useEffect + useState          -Redux, Zustand, Recoil, etc.
                                                        - React Query, SWR, RTK Query
*/