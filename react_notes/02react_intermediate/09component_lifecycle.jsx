/*
! Component (Instance) Lifecycle

* The lifecycle of a component encompasses all the changes a component goes through.

? The first one is the mount / initial render
  - The component is rendered for the first time
  - Fresh state and props are created

? After it is 'born' it can be (optionally) re-render an infinite amount of times.
  - This happen whens state changes
  - Props change
  - Parent re-renders
  - Context changes

? Unmounted - A component 'dies'
  - Component instance is destroyed and removed
  - State and props are destroyed
  - (App is closed or when a user navigates away).

! This is important because we can define code to run at these specific points in time.
*/