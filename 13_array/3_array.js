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
