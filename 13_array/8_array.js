// JavaScript find() & findIndex() Method
// This method finds out the first value which passes the user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.

// Example: In this example, we will see the use of the find() and findIndex() methods.

const num = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(num.find((x) => x > 5));

// findIndex method will return index position of the first match

const index = num.findIndex((x) => x > 5);

console.log(index);

console.log(num[index]);

// some

console.log(num.some((a) => a > 8));

// every

console.log(num.every((s) => s > 0));
console.log(num.every((s) => s > 1));