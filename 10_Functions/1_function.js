// function declaration
function play() {
  console.log(" i am playing GTA-5");
}

// function invocation
play();

//  now we why are using function in our code
console.log(total(10, 20));

function total(a, b) {
  return a + b;
}

// reusing same function logic with different arguments

console.log(total(100, 200));
console.log(total(50, 70));

// function expression

let run = function () {
  console.log("i am running right now");
};


run()