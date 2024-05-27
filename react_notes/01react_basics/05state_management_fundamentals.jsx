/*
! State Management Fundamentals
* You can think of state management as deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app.
? "Giving each piece of state a home."

! Global State
* State that many components might need.
* Shared state that is accessible to every component in the entire application.
(Shopping cart on many ecommerce)

! Local State
* Only needed by one or few components
* It is defined in a component and only that component and child components can access it (via props).
? You should always start with local state and use global if you find out you really need it.
(Search bars)


! When & Where?
* You need to store some data...will it change at some point in time?
  ? - No? Use a regular const variable.
  ? - Yes? Well, can it be computed from existing state/props?
      - Yes? Derive State (more on that later)
      - No? Should it re-render the component? 
        - No? useRef (more on this later)
        - Yes? Place a new piece of state in a component. (Always start with local state)
        
        ? The 'Where'
        ? Is it only used by this component?
          - Yes? Leave it in the component!
          - No? Is it also used by a child component?
            - Yes? - Pass to child via props.
            - No? - Is it used by one or a few siblings?
              - Yes? - Lift state up to first common parent.
              - No? - It's probably global state (more later!)
*/