//TODO Function / Parameters Challenge:
/*

Your task is to write a new function that should be named combine and have the following characteristics:

- Accept three input values
- Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)
- Return the calculated result

*/

function combine(a, b, c) {
	return (a * b) / c;
}

console.log(combine(2, 10, 2));

//TODO
/*

Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

In the newly returned array, every object must have a val key and the input array's number as a value.
*/

function transformToObjects(numberArray) {
  const numberObject = numberArray.map((number) => ({ val: number }));
  return numberObject;
}

let testArray = [100, 200, 300];
console.log(transformToObjects(testArray));

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function generateRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

const randomDescription = generateRandomInt(reactDescriptions.length);
console.log(randomDescription);