/*
! Legacy React: Class-Based Components
* Function components are the current way to use React, introduced in 2019 with hooks.
* Class components have been around since 2015, when React launched!

! Creating:
Function-based: A JavaScript function
Class-based: ES6 Class, Extending the React.Component (OOP!)

! Reading Props
Function-based: Destructuring or props.X
Class-based: this.props.x

! Local state
Function-based: useState hook
Class-based: this.setState();

! Side Effects / Lifecycle:
Function-based: useEffect hook
Class-based: Lifecycle Methods

* Hooks are the BIG difference between these two types of React.

! Event Handlers
Function-based: Functions
Class-based: Class methods

! Returning JSX
Function-based: Return JSX from the function
Class-based: Return JSX from render method

! Advantages
Function-based: Easier to build, cleaner code--useEffect combines all lifecycle-related code in a single place, easier to share stateful logic, no 'this' keyword!
Class-based: Lifecycle might be easier to understand for beginners
*/