/*
! Components
* Components are the most fundamental aspect of React; applications are made entirely out of them!
There is nothing that's not a component inside of a React app!
* React takes components and 'draws' them onto a user interface, all these views it renders becomes what the user sees.
* Each has its own data, logic, and appearance.
! We build complex UIs by building multiple compnents and combining them together, like Lego pieces.
* Components can be reused, nested inside each other, and pass data between them.
Component trees are diagrams to visualize how they are linked to each other, parent/child relationships, etc.


! JSX
! JSX is a declarative syntax to describe what components look like and how they work.
- This describes what the UI should look like using JSX, -based on current data (props and state)-, no DOM manipulation!
- React is an abstraction away from the DOM, we never touch it!
- We instead think of the UI as a reflection of the current data.

! Components MUST return a block of JSX.
* It is an extension of JavaScript that allows us to embed JS, CSS, and React components into HTML.
Each JSX element is converted to a React.createElement function call.


! Props (Properties)
* Props are used to pass data from parent components to child components (DOWN the component tree).
They are an essential tool to configure and customize components (like function parameters).
* With props, parent components control how child components look and work.
? Anything can be passed as props: single vlaues, arrays, functions, objects, and even other components.

! Props are READ-ONLY, immutable!
* Inside of a component, we have 3 main aspects: Data, Logic, Appearence.
* The data can be compartmentalized into two different ideas: Props & State.
? Props are the data coming from the OUTSIDE and can only be updated by the parent component.
? State is INTERNAL data within the component and can be updated with the component's own logic.

? Why are props immutable? -- Mutating props would affect the parent, creating side effects, and React is all about pure functions.
This allows React to optimize apps, avoid bugs, and make apps predictable.

! One-way Data Flow
* Data can only be passed from parent to child, which happens using props.
This makes applications more predictable and to see how data is flowing, easier to debug because we have more control, and is more performant!
The Angular framework utilizes two-way framework, unlike React.


! The Rules of JSX
* Works essentially like HTML but we can enter 'JS Mode' by using {}.
* In this, we can place JS expressions, like reference variables, arrays, objects, etc.
? However, statements (if/else, for, switch) are NOT allowed.
! JSX produces a JavaScript expression
  const el = <h1>Hello World!</h1>
  is the same as:
  const el = React.createElement('h1', null, 'Hello World!');
  * This allows us to place other pieces of JSX inside the {}.
  * We can write JSX -anywhere- inside a component (in if/else, assign to variables, pass it into functions).
? As we know by now, a piece of JSX can only have on root element; to get around this, we can use a fragment <> or a div <div>.
*/