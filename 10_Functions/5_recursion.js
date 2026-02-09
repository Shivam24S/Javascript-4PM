// recursion is process calling function calling it self

function factorial(num) {
  console.log("num", num);

  if (num < 0) {
    return console.log("factorial is not defined for negative numbers");
  } else if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let result = factorial(5);

console.log("result", result);
