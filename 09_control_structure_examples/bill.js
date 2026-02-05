let unit = 201;

let bill;

if (unit <= 100) {
  bill = unit * 10;
} else if (unit <= 200) {
  bill = 100 * 10 + (unit - 100) * 20;
} else if (unit > 200) {
  bill = 100 * 10 + 100 * 20 + (unit - 200) * 30;
}

console.log("total bill", bill);
