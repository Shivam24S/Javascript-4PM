// syntax error

// cotsn num=10;

const num = 10;

console.log("num", num);

// runtime error

function play() {
  console.log("play");
}

// console.log(number);

// plays();

try {
  plays();
} catch (error) {
  console.log(error.message);
}

const age = 15;

function checkAge() {
  try {
    if (age < 18) {
      throw new Error("age must be greater than 18");
    }

    console.log("you are eligible");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("age checked");
  }
}

checkAge();
