// ==========  Using the concat() method  ========== //
/* 
The concat() method joins two or more strings.
The concat() method does not change the existing strings.
The concat() method returns a new string.
*/

// string1.concat(value1, value2, ... value_n);
// let firstName = "Mostafizur ";
// let lastName = "Rahman";

firstName.concat(lastName); // Mostafizur Rahman
firstName.concat(lastName, " Fuad"); // Mostafizur Rahman Fuad

// ==========  Using the '+' operator  ========== //
console.log("Hello" + "JS"); // HelloJS
console.log("Hello" + " JS"); // Hello JS
console.log("Hello " + "JS"); // Hello JS
console.log("Hello" + " " + "JS"); // Hello JS

// let firstName = "Mostafizur ";
// let lastName = "Rahman";

console.log(firstName + lastName); // Mostafizur Rahman
console.log("Hello " + firstName + lastName); // Hello Mostafizur Rahman

// ==========  Using template literals / template strings / Backtick syntax  ========== //
// Variable Substitutions: Template literals allow variables in strings
let firstName = "Mostafizur";
let lastName = "Rahman";
let age = 25;

console.log(`I am ${firstName} ${lastName} and my age is ${age}.`);
// Expected output: I am Mostafizur Rahman and my age is 25.

// Expression Substitution: Template literals allow expressions in strings
let a = 10;
let b = 20;

console.log(`Sum of a and b = ${a + b}`); // Sum of a and b = 30

// Template literals allows multiline strings:
console.log("I am Mostafizur \nand \nI am a \ndeveloper");

// Template literals allows multiline strings
console.log(`I am Mostafizur
and
I am a
developer`);
/* Expected output:
I am Mostafizur
and
I am a
developer */

// Quotes Inside Strings: template literals allows both single and double quotes inside a string
let text = `He's often called "Johnny"`;
console.log(text); // He's often called "Johnny"

// ==========  Using the array join() method  ========== //
array.join(separator);
// Any separator can be specified. The default is comma (,)
// The join() method returns an array as a string
// The join() method does not change the original array

const colors = ["Fire", "Air", "Water"];

console.log(colors.join()); // Fire,Air,Water
console.log(typeof colors.join()); // string

console.log(colors.join("")); // FireAirWater
console.log(colors.join(" ")); // Fire Air Water
console.log(colors.join("-")); // Fire-Air-Water
console.log(colors.join("_")); // Fire_Air_Water
