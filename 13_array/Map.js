// JavaScript map() method
// This method iterates over an array, transforms the array according to user-specified conditions and returns a new array. Using this shorter syntax, one could easily make code more readable and understandable.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = num.map((num) => num * 5);

console.log("old array", num);

console.log("new array", newArray);

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log(fruits.map((fruits) => fruits));

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

console.log(personDetails.map((person) => person.name));

const userNames = personDetails.map((person) => person.name);

console.log("username", userNames);