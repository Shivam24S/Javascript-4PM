let name = "hello alice";

// charAt()

console.log("Char At", name.charAt(4));

// concat()

console.log("concat method", name.concat("how are you"));

// endsWith

console.log("Ends With", name.endsWith("c"));

console.log("Ends With", name.endsWith("e"));

// includes

console.log("includes", name.includes("alice"));

console.log("includes", name.includes("bob"));

// indexOf() method ==> returns the index(position) of the first occurrence of a value in string

console.log("index Of", name.indexOf("l"));

// if not found

console.log("index Of", name.indexOf("bob"));

// lastIndexOf() method ==> returns the last occurrence of a value in string

console.log("last Index", name.lastIndexOf("l"));

// now i want specific index position

console.log("specific Index find", name.indexOf("l", 2));

// length returns the length of the string

console.log("length", name.length);
