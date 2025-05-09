/************* 
||
&&
!
*************/

// logical or (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// logical and (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// logical not (!)
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

console.log(!""); // true
console.log(!!""); // false
console.log(!"hello"); // false
console.log(!!"hello"); // true
console.log(!null); // true
console.log(!!null); // false

console.log(25 > 22); // true
console.log(!(25 > 22)); // false

// example 1
// const isRaining = true;
// if (isRaining === false)
if (!isRaining) {
    console.log("Nothing");
} else {
    console.log("Playing Football");
}

// example 2: letter grade
let marks = 70;

if (marks > 100 || marks < 0) console.log("Invalid Marks");
else if (marks >= 80) console.log("A+");
else if (marks >= 70) console.log("A");
else if (marks >= 60) console.log("A-");
else if (marks >= 50) console.log("B");
else if (marks >= 40) console.log("C");
else if (marks >= 33) console.log("D");
else console.log("F");

// example 3: large between 3 numbers
let num1 = 25;
let num2 = 50;
let num3 = 50;

if (num1 >= num2 && num1 >= num3) console.log("Large = " + num1);
else if (num2 >= num1 && num2 >= num3) console.log("Large = " + num2);
else if (num3 >= num1 && num3 >= num2) console.log("Large = " + num3);

// array solution
let arr = [20, 50, 150];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}
console.log(max);

// Check a letter vowel or consonant
let ch = "A";
ch = ch.toLowerCase();

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// Leap year program
let year = 2024;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("leap year");
} else {
    console.log("not leap year");
}

// example
// const isRaining = true;
// const time = 11;
if (isRaining && time < 12) {
    console.log("Playing Football"); // executed
} else {
    console.log("Nothing...");
}

// example
const isRaining = false;
const time = 11;
const day = "friday";

if ((isRaining && time < 12) || day === "friday") {
    console.log("Playing Football"); // executed
} else {
    console.log("Nothing...");
}
