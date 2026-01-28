let msg = "global scope";

function blockScope() {
  //   let msg = "hello";

  if (true) {
    let msg = "hi";

    console.log(msg);
  }

  console.log(msg);
}

blockScope();

// variable declaration

let a;

// variable initialization

a = 50;

console.log(a);

// redeclaration

a = 100;

a=500

console.log(a);
console.log(a);
console.log(a);

// same scope  you can't declare

// let a
