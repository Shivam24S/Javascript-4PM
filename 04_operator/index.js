// 1 arithmetic operator

let a = 20;

let b = 10;

console.log("addition", a + b);
console.log("subtraction", a - b);
console.log("multiplication", a * b);
console.log("division", a / b);
console.log("modulo", a % b);
console.log("exponential", a ** b);

// 2. assignment operator

let c = 100;

c += 20;

console.log("add and assign", c);

c -= 20;

console.log("subtract and assign", c);

c *= 2;

console.log("multiplication and assign", c);

c /= 2;

console.log("division and assign", c);

// comparison operator

let value1 = 24;
let value2 = "24";

console.log("result", value1 == value2);

console.log("strictly equality operator", value1 === value2);

// only check value not data types
console.log(value1 != value2);

// datatype will also check
console.log(value1 !== value2);

console.log("less than", a < b);
console.log("greater than", a > b);

// logical operator

let logicA = true;

let logicB = false;

// and

if (logicA && logicB) {
  console.log("it will print only if the both condition true");
}

// or

if (logicA || logicB) {
  console.log("it will print when any of condition true");
}

// not

console.log(!logicA);

// unary operator

let num = 24;

console.log(num);

if (true) {
  num++;
}

console.log("num", num);

++num;

console.log("num", num);

// ternary

let age = 18;

age >= 18 ? console.log("you can vote") : console.log("you can't give vote ");

console.log("type of age", typeof age);
