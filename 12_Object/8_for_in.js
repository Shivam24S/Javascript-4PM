const person = {
  name: "alice",
  age: 18,
  address: "bvn",
};

for (let key in person) {
  console.log(key + " " + person[key]);
}
