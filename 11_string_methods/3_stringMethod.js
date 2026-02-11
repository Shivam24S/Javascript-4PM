let text = "hello alice";

//  split() methods ==> Splits a string into an array of substrings

console.log(text.split(" "));

console.log(text.split(""));

console.log(text.split("l"));

// startsWith() methods ==> startswith method whether a string begins with specified characters

console.log(text.startsWith("h"));

console.log(text.startsWith("s"));

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0

console.log("text :-", text);

console.log(text.substring(2, 8));

console.log(text.substring(-1));

// tolowerCase() ==> toLowerCase()	Returns a string converted to lowercase letters

text = "HELLO";

console.log(text);

console.log(text.toLowerCase());

// toupperCase() ==> Returns a string converted to uppercase letters

text = "hello";

console.log(text.toUpperCase());

// trim()	Returns a string with removed whitespace

text = "      hello            ";

console.log("text length", text.length);

console.log("trim", text.trim().length);

// starting removing trim

console.log("starting trim", text.trimStart().length);

// ending removing trim

console.log("ending removing trim", text.trimEnd().length);
