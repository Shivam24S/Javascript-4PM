const person = {
  firstName: "alice",
  lastName: "jordan",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
