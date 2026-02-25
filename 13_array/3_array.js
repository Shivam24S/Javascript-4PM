let fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "guava",
  "strawberry",
  "pineapple",
];

console.log("fruits before", fruits);

// adding element to an array in last

fruits.push("grapes");

console.log("fruits after", fruits);

// adding element to an array from the starting

console.log("fruits before", fruits);

fruits.unshift("watermelon");

console.log("fruits after", fruits);

// removing the last element of an array

fruits.pop();

console.log("after removing last element", fruits);

// removing the first element of an array

fruits.shift();

console.log("after removing first element", fruits);

// The splice() method adds and/or removes and replace array elements.

// The splice() method
// overwrites the original array.

// splice("starting index", "delete count", "item", "item");

const vegetables = ["potato", "tomato", "onion", "garlic", "ladiesFinger"];

// remove

console.log("vegetables list", vegetables);

vegetables.splice(1, 2);

console.log("vegetables list after removing", vegetables);

// replace

vegetables.splice(1, 1, "ginger");

console.log("vegetables after replacing", vegetables);

// adding element

vegetables.splice(1, 0, "cabbage", "carrot");


console.log("vegetables after adding", vegetables);