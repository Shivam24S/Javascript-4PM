
// only one file can be shared as default exports

// default exports

// export default function calculate(a, b) {
//   console.log("plus", a + b);
//   console.log("minus", a - b);
//   console.log("multiplication", a * b);
//   console.log("division", a / b);
// }



// multiple exports 

export function calculate(a, b) {
  console.log("plus", a + b);
  console.log("minus", a - b);
  console.log("multiplication", a * b);
  console.log("division", a / b);
}



export function play() {
  console.log("play");
}


// commonjs exports

// module.exports = play
