class Student {
  constructor(name, grId, course, address) {
    this.name = name;
    this.grId = grId;
    this.course = course;
    this.address = address;
  }
}

const student1 = new Student("alice", 123, "FD", "BVN");

const student2 = new Student("bob", 456, "Graphic", "ABD");

const student3 = new Student("charlie", 789, "Video edition", "rajkot");

console.log("student 1", student1);
console.log("student 2", student2);
console.log("student 3", student3);
