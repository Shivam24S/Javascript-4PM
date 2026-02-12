// An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

// creating object using object literal syntax

const person = {
  name: "alice",
  lastName: "johnson",
  city: "BVN",
  age: 23,
};

console.log(person);

// type

console.log(typeof person);

// creating object using object constructor

const student = new Object();

console.log(typeof student);

((student.name = "bob"), (student.exam = "UPSC"), (student.block = "A"));

console.log(student);
