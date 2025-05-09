// const isRaining = true;
isRaining ? console.log("Playing Football") : console.log("Nothing");

// Check a number even or odd
let number = 15;
number % 2 === 0 ? console.log("Even") : console.log("Odd");

// Find large between two numbers
const num1 = 40;
const num2 = 60;

const whoIsLarger = num1 > num2 ? `large = ${num1}` : `large = ${num2}`;
console.log(whoIsLarger); // 60

// example
let num = 500;
num === 100 ? console.log((num += 100)) : console.log((num -= 100)); // 400

// ==========  Nested if else ========== //
// const isRaining = true;
// const age = 17;

if (isRaining) {
    if (age > 18) {
        console.log("Playing Football");
    } else {
        console.log("Age Restricted"); // executed
    }
} else {
    console.log("Nothing");
}

// ==========  Multi level ternary  ========== //

const isRaining = true;
const age = 20;

isRaining
    ? age > 18
        ? console.log("Playing Football")
        : console.log("Age Restricted")
    : console.log("Nothing");
