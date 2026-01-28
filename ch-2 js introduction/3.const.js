// block scope

function blockScope() {
  const msg = "hello";

  if (true) {
    // const msg = "hi";

    console.log(msg);
  }
  console.log(msg);
}

blockScope();

// variable declaration

// const a; // i can't able to this i must initialized const variable value at the time of declaration

const a = 100;

// a=50 // Assignment to constant variable.

console.log(a);

// const a=500  can't declare block scope variable in same scope

// variable priority

// const -> let -> var

const person = { name: "alice", age: 50 };

person.name = "bob";

console.log(person);
