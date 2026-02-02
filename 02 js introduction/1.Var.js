// functional scope explanation

// var msg = "good morning";

// function greet() {
//   //   var msg = "hello";

//   //   console.log(msg);

//   function anotherFunction() {
//     // var msg ="good after noon"
//     console.log(msg);
//   }

//   anotherFunction();
// }
// console.log("msg");

// greet();

// declaration

var a;

a = 10;

console.log(a);

// // reinitialization

var msg = "good morning";

console.log("msg", msg);

msg = "good after noon";

console.log("msg", msg);

// re declare in same scope is possible

var msg = "good night";

console.log("msg", msg);
