let text = "hello alice";

// match() method ==> searches a string for a value, or a regular expression, and returns the matches

// if not finding  matching string it will return null
// console.log(name.match("sh"));

console.log(text.match("alice"));

// repeat() method ==> returns new string with a number of copies of strings

console.log(text.repeat(5));

// replace()  method ==> searches a string for a pattern and return a new string where First match are replaced

console.log(text.replace("l", "L"));

// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log(text.replaceAll("l", "L"));

// search() method ==> searches a string for a value, or regular expression, and returns  the index(position) of the match

console.log("search", text.search("l"));

console.log("index", text.indexOf("l"));

// slice() method ==> extracts a part of a string and returns a new string

// here first is staring index and after that end index is start counting from 0

console.log("text:-", text);

console.log(text.slice(2));

console.log(text.slice(2,6));

console.log(text.slice(-1))
