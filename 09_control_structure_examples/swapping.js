let temp;

let num1 = 10;

let num2 = 20;

console.log("variable before swapping", num1, num2);

temp = num1;

num1 = num2;

num2 = temp;

console.log("variable after swapping", num1, num2);

// without  taking variable

let a = 30;

let b = 40;

console.log("variable before swapping", a, b);

a = a + b;

// 70

b = a - b;

// 70-40

// 30



a = a - b;

// 70-30
// 40

console.log("variable after swapping", a, b);
