//  Iterating Through Array Elements

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

// manually

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("");

// using for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("");

// for of

for (let element of fruits) {
  console.log(element);
}

// forEach method never return anything

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach((num) => {
  console.log(num * 2);
});

// concat

const vegetables = ["potato", "tomato", "onion", "garlic", "ladiesFinger"];

const shopItems = fruits.concat(vegetables);

console.log("shop items", shopItems);

console.log(shopItems.toString());



