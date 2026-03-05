// JavaScript reduce() Method
// This method uses a reducer function that reduces the results into a single output.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}

console.log("sum", sum);

let total = num.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("total", total);

const shopping = [
  {
    name: "vegetables",
    price: 1000,
  },
  {
    name: "grocery",
    price: 1500,
  },
  {
    name: "soft-drink",
    price: 100,
  },

  {
    name: "fruits",
    price: 500,
  },
];

const totalBill = shopping.reduce((acc, curr) => {
  return (acc = acc + curr.price);
}, 0);

console.log("totalBIll", totalBill);