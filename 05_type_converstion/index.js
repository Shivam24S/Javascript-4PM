// In programming, type conversion is the process of converting data of one type to another. For example, converting string data to a number.

// There are two types of type conversion in JavaScript:

// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion.

// Examples:

// Implicit Conversion (Type Coercion)
// Implicit conversion happens when JavaScript automatically converts a data type to another type during operations.

// String to Number (Implicit Conversion)
let result1 = "5" - 3; // "5" is converted to 5
console.log(result1); // 2

// Number to String (Implicit Conversion)
let result2 = "5" + 3; // 3 is converted to "3"
console.log(result2); // "53"

// Boolean to Number (Implicit Conversion)
let result3 = true + 1; // true is converted to 1
console.log(result3); // 2

// Null to Number (Implicit Conversion)
let result4 = null + 5; // null is converted to 0
console.log(result4); // 5

// Undefined to Number (Implicit Conversion)
let result5 = undefined + 5; // undefined is converted to NaN
console.log(result5); // NaN

// Explicit Conversion (Manual Conversion)
// Explicit conversion is when you manually convert data types using JavaScript methods like Number(), String(), and Boolean().

// String to Number Conversion
let str = "42";
let num = Number(str); // Using Number() to convert string to number
console.log(num); // 42
console.log(typeof num); // "number"

// Using parseInt() or parseFloat()
let decimalStr = "42.5";
console.log(parseInt(decimalStr)); // 42
console.log(parseFloat(decimalStr)); // 42.5

// Number to String Conversion
let number = 123;
let strNum = String(number); // Using String() to convert number to string
console.log(strNum); // "123"
console.log(typeof strNum); // "string"

// Summary of Conversion

// Conversion            Method         Example                 Output
// String to Number      Number()       Number("42")            42
// String to Integer     parseInt()     parseInt("42.5")        42
// String to Float       parseFloat()   parseFloat("42.5")      42.5
// Number to String      String()       String(123)             "123"
// Boolean to Number     Number()       Number(true)            1
// Number to Boolean     Boolean()      Boolean(0)              false
// String to Boolean     Boolean()      Boolean("Hello")        true