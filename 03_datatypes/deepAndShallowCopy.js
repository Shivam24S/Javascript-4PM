//  deep copy  in permeative data types

// passed by value

// let a = 10;

// let b = a;

// console.log("b", b);

// b = 20;

// console.log("b", b);

// console.log("a", a);

// shallow copy in non permeative data types

// passed by reference

let student = { name: "alice", age: 22, course: "fsd" };

let student2 = student;

console.log("student1", student);
console.log("student2", student2);

console.log("after changes");

student2.name = "john";

console.log("student2", student2);
console.log("student", student);



