/*
! Derived State
* State that is computed from an existing piece of state or from props.

? Below, we have three seperate pieces of state, even though numItems and totalPrice depend on cart.
*/

const { useState } = require("react");

const [cart, setCart] = useState([
  { name: "JS Course", price: 15.99 },
  { name: "Node.js Course", price: 14.99 }
]);

// const [numItems, setNumItems] = useState(2);
// const [totalPrice, setTotalPrice] = useState(30.98);

/*
! This is NOT a good approach; we have to keep all of these intertwined pieces in sync, update them together, etc.
* 3 state updates will also cause 3 re-renders!

* Instead, we can Derive state like so and just use regular variables; no state!:
? Cart state is the single source of truth for this related data.
* This approach works because re-rendering a component will automatically re-calculate derived state.
*/

const numItems = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
