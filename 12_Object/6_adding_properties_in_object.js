const person = {
  name: "alice",
  lastName: "johnson",
  city: "BVN",
  age: 23,
};

// using .notion

person.designation = "software developer";

console.log(person);

// using []

person["bloodGroup"] = "o+";

console.log(person);

function hotel(rating, room, staff) {
  ((this.rating = rating), (this.room = room), (this.staff = staff));
}

hotel.prototype.swimmingPool = true;

const hotel1 = new hotel(5, 50, 10, true);

console.log("hotel 1 detail", hotel1.swimmingPool);
