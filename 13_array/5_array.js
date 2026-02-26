// JavaScript Array join() Method

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log("fruits array", fruits);

console.log("fruits array to string", fruits.join(" "));

// JavaScript Array flat() Method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

let number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("num array", number);

console.log("flatten the array", number.flat());

number = [
  [1, 2, 3],
  [4, 5, 6, [10, 11, 12]],
  [7, 8, 9],
];

console.log("flatten the array", number.flat(2));

number = [
  [1, 2, 3, [4, 5, [6, 8, [10, [12]]]]],
  [4, 5, 6, [10, 11, [10, 12], 12]],
  [7, 8, 9, [10, 20, [30, [40, 50, [60, 70, [80]]]]]],
];

console.log(number);

console.log(number.flat(Infinity));

console.log("fruits", fruits);

// JavaScript Array.slice() Method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

// end will be excluded

console.log(fruits.slice(2, 5));


console.log("fruits", fruits);
