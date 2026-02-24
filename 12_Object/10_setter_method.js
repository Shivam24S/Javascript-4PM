const person = {
  name: "alice",
  age: "",
  set personAge(age) {
    if (age < 18) {
      return console.log("you are not eligible");
    }

    this.age = age;
  },
};

person.personAge = 19;

console.log(person);

console.log("person age", person.age);
