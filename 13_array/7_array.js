// JavaScript indexOf() Method
// This method is used to find the index of a particular element in an array.

// Example: In this example, we will find out the index of the elements using the indexOf() method.

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log("index of", fruits.indexOf("mango"));

// counting from zero

// JavaScript includes() Method
// This method is used to check whether the array contains the specified element or not.

// Example: In this example, we will check whether the array contains the element or not using the includes() method.

console.log("includes method", fruits.includes("orange"));

console.log("includes method", fruits.includes("mango"));

//  JavaScript sort() Method
// This method sorts the elements of an array in alphabetical order in ascending order.

// Example: In this example, we will sort the array alphabetically using the sort() method.

let alphabet = ["a", "d", "b", "e", "c"];

console.log("alphabet", alphabet);

console.log("sorted alphabet", alphabet.sort());

let number = [5, 8, 9, 7, 1, 6, 2, 4, 3];

console.log(number);

console.log("sorted number", number.sort());

// descending order

console.log(
  "descending order",
  number.sort((a, b) => {
   return  b - a;
  }),
);
