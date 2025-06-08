// In JavaScript strings are the sequence of characters.
// single quotes, double quotes, and backticks can be used to represent strings in JavaScript.

let str1 = "Mostafizur"; // string literal
let str2 = "Mostafizur"; // string literal
let str3 = `Mostafizur`; // string literal
let str4 = String("Mostafizur"); // string constructor

// ************* Convert number to string *************
let n = 10;

var str = 10 + ""; // string concatenation
var str = String(n); // string constructor
var str = n.toString(); // string method (old way)

// ************* Escape Sequence *************
var fullName = "Mostafizur Rahman 'Fuad'"; // Mostafizur Rahman 'Fuad'
var fullName = 'Mostafizur Rahman "Fuad"'; // Mostafizur Rahman "Fuad"
var fullName = "Mostafizur Rahman \nFuad"; // Mostafizur Rahman NEWLINE Fuad
var fullName = "Mostafizur Rahman \tFuad"; // Mostafizur Rahman       Fuad
var fullName = "Mostafizur Rahman \\Fuad"; // Mostafizur Rahman \Fuad

// ************* String Comparison *************
// JS uses Lexicographic system to compare to string. length doesn't matter
// Lexical order: A, B, C, ..., X, Y, Z, a, b, c, ..., x, y, z [ small to large ]
// A = 65, B = 66, ... Z = 90 ... ... a = 97, b = 98, ... z = 122 (ascii value)

console.log("z" > "a"); // true
console.log("B" > "b"); // false

console.log("aaaaZ" > "aaaaz"); // false
console.log("aaZaz" > "aaXaz"); // true

console.log("z" > "yyy"); // true (length doesn't matter)

console.log("001" == 1); // true ( == check only value )
console.log("001" === 1); // false ( === check value and type )

// ************* String Immutable *************
// String is immutable. It means that once a string is created, its contents cannot be changed.
let hisName = "Mostafizur";
hisName = "Fuad";
console.log(hisName); // Fuad
// This means that, the original string "Mostafizur" still exists in memory, but the variable name now refers to the new string "Fuad".

// ************* String Methods *************
// ************* length *************
let str = "I love Javascript";
console.log(str.length); // 17

// ************* replace *************
let str = "I love Javascript";
console.log(str.replace("Javascript", "Python")); // I love Python

// ************* replaceAll() *************
let message = "I love Mango, but I cannot buy Mango";

let correctMessage1 = message.replace("Mango", "Apple");
let correctMessage2 = message.replaceAll("Mango", "Apple");

console.log(correctMessage1); // I love Apple, but I cannot buy Mango
console.log(correctMessage2); // I love Apple, but I cannot buy Apple

// ************* indexOf() *************
const str = "JavaScript is not Java";

console.log(str.indexOf("va")); // 2
console.log(str.indexOf("sa")); // -1
console.log(str.indexOf("Va")); // -1
console.log(str.indexOf("va", 10)); // 20

// ************* lastIndexOf() *************
const str = "Programming";

console.log(str.lastIndexOf("g")); // 10
console.log(str.lastIndexOf("ing")); // 8
console.log(str.lastIndexOf("h")); // -1

// ************* toUpperCase(), toLowerCase() *************
const str = "I love Javascript";

console.log(str.toUpperCase()); // I LOVE JAVASCRIPT
console.log(str.toLowerCase()); // i love javascript

// ************* startsWith(), endsWith() *************
const str = "JavaScript is fun";

console.log(str.startsWith("Java")); // true
console.log(str.startsWith("Javascript")); // false
console.log(str.startsWith("JavaScript")); // true

console.log(str.endsWith("fun")); // true
console.log(str.endsWith("is fun")); // true
console.log(str.endsWith("Fun")); // false

// ************* includes() *************
const str = "JavaScript is not Java";

console.log(str.includes("Java")); // true
console.log(str.includes("Java", 10)); // true
console.log(str.includes("Script")); // true
console.log(str.includes("Script", 10)); // false

// ************* concat() *************
let emptyString = "";
console.log(emptyString.concat("JavaScript", " is", " fun.")); // JavaScript is fun.

// let str1 = "Hello";
// let str2 = "World";
let newStr = str1.concat(", ", str2, "!");
let newStr2 = str1.concat(", ").concat(str2).concat("!");
console.log(newStr); // Hello, World!
console.log(newStr2); // Hello, World!

// ************* substring() *************
const str = "JavaScript is fun";

console.log(str.substring(4)); // Script is fun (index 4 to last)
console.log(str.substring(4, 12)); // Script i (index 4 to 11)
console.log(str.substring(0, 1)); // J (index 0)
console.log(str.substring(0, 4)); // Java (index 0 to 3)

// ************* slice() *************
const str = "JavaScript is fun";

console.log(str.slice(4)); // Script is fun (index 4 to last)
console.log(str.slice(4, 12)); // Script i (index 4 to 11)
console.log(str.slice(0, 1)); // J (index 0)
console.log(str.slice(0, 4)); // Java (index 0 to 3)
console.log(str.slice(0, str.indexOf(" "))); // JavaScript
console.log(str.slice(str.indexOf(" ") + 1)); // is fun

console.log(str.slice(0)); // JavaScript is fun
console.log(str.slice(0, -1)); // JavaScript is fu
console.log(str.slice(0, -2)); // JavaScript is f

// example
function checkWindowSeat(seatNumber) {
    let slicedSeatNum = seatNumber.slice(2, 3);

    if (slicedSeatNum === "W") {
        console.log(
            `Your seat number is ${seatNumber} and it's placed beside window`
        );
    } else {
        console.log(
            `Your seat number is ${seatNumber} and it's not placed beside window`
        );
    }
}

checkWindowSeat("22W20");
checkWindowSeat("22C20");
checkWindowSeat("75W50");
checkWindowSeat("20M22");

// ************* charAt() *************
const str = "JavaScript is fun";

console.log(str.charAt(0)); // J
console.log(str.charAt(4)); // S
console.log(str.charAt(str.length - 1)); // n

// ************* trim() *************
console.log("    Mostafizur   "); //     Mostafizur
console.log("    Mostafizur   ".trim()); // Mostafizur

// example
const drink = " water";
const liquid = "water ";

if (drink === liquid) console.log("Same");
else console.log("Not Same"); // execute

if (drink.trim() === liquid.trim()) console.log("Same"); // execute
else console.log("Not Same");

// example: email normalization
function normalizeEmail(email) {
    let normalEmail = email.toLowerCase().trim();
    return normalEmail;
}

console.log(normalizeEmail("    MosTaFIzuR@Gmail.cOm   \n  ")); // mostafizur@gmail.com
console.log(normalizeEmail("     siAM@GmAil.cOM      \n      ")); // siam@gmail.com
console.log(normalizeEmail("  riFAt@Gmail.CoM    \n    ")); // rifat@gmail.com

// ************* split() *************
// divides a string into a list of substrings and returns them as an array.
const str = "JavaScript is fun";
console.log(str.split()); // [ 'JavaScript is fun' ]
console.log(str.split(" ")); // ["JavaScript", "is", "fun"];
console.log(str.split(""));
/*
[
  'J', 'a', 'v', 'a', 'S',
  'c', 'r', 'i', 'p', 't',
  ' ', 'i', 's', ' ', 'f',
  'u', 'n'
]
*/

// example
const str = "Walid,Fahim,Rifat,Sifat,Sakib";
console.log(str.split(",")); // [ 'Walid', 'Fahim', 'Rifat', 'Sifat', 'Sakib' ]

// arr.join() is the reverse method of str.split() and it converts array to string
// converts array to string
const arr = ["Walid", "Fahim", "Rifat", "Sifat", "Sakib"];
console.log(arr.join("")); // WalidFahimRifatSifatSakib
console.log(arr.join(" ")); // Walid Fahim Rifat Sifat Sakib
console.log(arr.join(",")); // Walid,Fahim,Rifat,Sifat,Sakib
console.log(arr.join(", ")); // Walid, Fahim, Rifat, Sifat, Sakib
console.log(arr.join("|")); // Walid|Fahim|Rifat|Sifat|Sakib

// example: split() and arr.join()
let str = "Hello+My+name+is+Mostafizur";

let convertArr = str.split("+");
let finalStr = convertArr.join(" ");

console.log(convertArr); // [ 'Hello', 'My', 'name', 'is', 'Mostafizur' ]
console.log(finalStr); // Hello My name is Mostafizur

// another way
let str = "Hello+My+name+is+Mostafizur";
let finalStr2 = str.split("+").join(" ");

// another way
let str = "Hello+My+name+is+Mostafizur";
let finalStr3 = str.replaceAll("+", " ");
console.log(finalStr3); // Hello My name is Mostafizur

// ************* at() *************
const str = "JavaScript is fun";
console.log(str.length); // 17

// last index
console.log(str[str.length - 1]); // n
console.log(str.slice(-1)); // n
console.log(str.at(-1)); // n [ES2022]

// example: Fixed Capitalization
function fixedCapitalization(name) {
    let lowerName = name.toLowerCase();
    let capitalization = lowerName.at(0).toUpperCase() + lowerName.slice(1);

    return capitalization;
}

console.log(fixedCapitalization("MosTaFiZUr")); // Mostafizur
console.log(fixedCapitalization("SIam")); // Siam
console.log(fixedCapitalization("JUNnun")); // Junnun
console.log(fixedCapitalization("rifAT")); // Rifat

// ************* repeat() *************
const str = "Bad Weather !!";
console.log(str.repeat(5));
// Bad Weather !!Bad Weather !!Bad Weather !!Bad Weather !!Bad Weather !!

// example
function planeInLine(num) {
    console.log(`There are ${num} planes in line! ${"✈".repeat(num)}`);
}

planeInLine(2); // There are 2 planes in line! ✈✈
planeInLine(5); // There are 5 planes in line! ✈✈✈✈✈

// ************* Exercise ************* //
// Problem 1: Reverse a String
// const sentence = "Javascript is Fun !!";
// let reverse = "";
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(sentence);
console.log(reverse);

// using for loop
const sentence = "Javascript is Fun !!";
let reverse = "";
for (let i = 0; i < sentence.length; i++) {
    reverse = sentence[i] + reverse;
}
console.log(sentence);
console.log(reverse);

// another way
let str = "Hello World!";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // !dlroW olleH

// another way: using method
// let str = "Hello World!";
// let reversed = str.split("").reverse().join("");
// console.log(reversed); // !dlroW olleH

// ************** String vs Array ************* //
// String is immutable
// Array is mutable
