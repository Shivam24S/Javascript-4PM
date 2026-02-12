const person = {
  name: "alice",
  lastName: "johnson",
  city: "BVN",
  age: 23,
  //   name: "bob",
};

console.log(person);

// accessing

// now accessing the values of personDetails object using . notation

console.log(person.name);

// now accessing the values of personDetails object using []

console.log(person["city"]);

// now destructing

const { name, lastName } = person;

console.log(name);
console.log(lastName);
