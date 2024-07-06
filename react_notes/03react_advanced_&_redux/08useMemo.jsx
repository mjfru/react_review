/*
! Memo, Memoization, and useMemo

! What is memoization?
* This is an optimization technique that executes a pure function once and saves the result in memory.
* If we try to execute the function again with the -same arguments as before-, the previously saved result will be returned, without executing the function again.

? By leveraging memo, we can memoize components with memo, objects with useMemo, and functions with useCallback, helping use prevent wasted renders and improving our app speed.

! The Memo Function
* memo is used to create a component that will NOT re-render when its parent re-renders, as long as the props stay the same between renders.

! Only affects props!
* A memoized component will still re-render when its own state changes or when a context that it's subscribed to changes.

? This only makes sense when the component is heavy (slow), re-renders often, and does so with the same props. You should not memoize every component in your application.

Remember, the regular behavior in React is if the component re-renders, its children will as well.
* With memo, even if the component re-renders, as long as the props do not change, the memoized child component does NOT re-render.

* memo syntax looks like:
const FuntionName = memo(function() {})

! An Issue with memo
* In React, everything is re-created on every render (including objects and functions)
* In JS, two objects or functions that look the same are actually different! ({} != {})
* Therefore, if objects or functions are passed as props, the child component will always see them as new props on each re-render.
! If props are different between re-renders, memo will NOT work.

? Solution: We need to memoize objects and functions to make them stable (preserve) between re-renders (memoized {} === memoized {})

! Enter Two New Hooks: useMemo and useCallback
* These are used to memoize values (useMemo) and functions (useCallback) between renders.
Values passed into useMemo and useCallback will be stored in memory (cached) and returned in subsequent re-renders, as long as dependencies (inputs) stay the same.
* useMemo and useCallback have a dependency array (like useEffect): whevener one dependency changes, the value will be re-created.

? Regular Behavior (no useMemo)
Component re-renders ---> New Value

* Memoizing a value w/ useMemo
Component re-renders ---> same dependencies? ---> cache value is returned, no new value.

Component re-renders ---> dependencies changed? ---> New value

! Three Big Use Cases:
  1. Memoizing props to prevent wasted renders (together with memo).
  2. Memoizing values to avoid expensive re-calculations on every render.
  3. Memoizing values that are used in dependency array of another hook (for example, avoid infinite useEffect loops)

* useMemo syntax:
const thing = useMemo(() => {
  return {
    object key: object value
    }
  }, [dependencies])

* useCallback syntax:
const variable = useCallback(function() {
    do something
  }, 
  [dependencies])
*/
