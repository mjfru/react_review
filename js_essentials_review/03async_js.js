/*
! Asynchronous JS - A React Essential
*/

//! Fetch
// fetch(url) - Doing this will take some time but JS keeps running
// fetch('https://jsonplaceholder.typicode.com/todos')
// To wait and do something else until the fetch is done, use the .then to give it instructions after the promise is fulfilled.
// Convert the response (res) to something we can use (.json())
//   .then((response) => response.json())
// And take that information and console.log it.
//   .then((data) => console.log(data));

// console.log('When do I run? - First!')

//! A cleaner option, async/await
async function getTodos() {
  // With the 'await' keyword, JS will not automatically move on to the next line until this is done (and can be stored in a variable).
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos); // Promise { <pending> }
console.log('When do I run? - First!')