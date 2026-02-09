// function declaration

// parameter
function multiplication(x, y) {
  console.log(x * y);
}

// passing arguments
multiplication(10, 20);
multiplication(50, 20);

//

function subtraction(a = 10, b = 5) {
  console.log(a - b);
}

// using default parameter
// subtraction(10);

// without arguments
subtraction();

// with arguments and default parameter

subtraction(20, 10);
