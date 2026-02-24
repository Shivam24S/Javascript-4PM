const person = {
  name: "alice",
  age: 18,
  address: "bvn",
};

delete person.age;

console.log("person", person);

// hasOwnProperty

console.log(person.hasOwnProperty("name"));

// ObjectKeys

console.log(Object.keys(person));
