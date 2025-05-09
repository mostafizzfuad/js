// ==========  Statement and Expression  ========== //
// Expression: Expression can produce values.
// Statement: statement cannot produce values, only manipulates expression.

// let firstName; // statement
// const age = 21; // statement

let area = 3.14 * radius * radius; // statement
// Here, 3.14 * radius * radius is an expression that returns a value.

// if (age >= 18 && age < 58) // statement
// Here, (age >= 18 && age < 58) is an expression that returns a boolean value

// ==========  if  ========== //
// example 1
// const num1 = 50;
// const num2 = 10;
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
}

// example 2
// let purchase = 1700;
if (purchase >= 1500) {
    console.log("Discount !!");
}

// example 3
// let number = 4;
if (number < 5) {
    number += 5;
}
console.log(number); // 9

// ==========  if-else  ========== //
// example 1
const n = 5;
if (n % 2 === 0) console.log("Even");
else console.log("Odd"); // execute

// example 2
// const num1 = 50;
// const num2 = 100;
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num2 + " is greater than " + num1); // execute
}

// example 3
let score = 98;
if (score >= 100) {
    console.log("Level Completed !!");
} else {
    console.log("Try again !!"); // execute
}

// example 4
// let purchase = 5000;
if (purchase >= 3000) {
    console.log("Discount !!");
    const discountPrice = purchase * 0.1; // 10% discount = price * 10 / 100
    console.log(discountPrice);
    const payAmount = purchase - discountPrice;
    console.log(payAmount);
} else {
    console.log("No Discount !!");
}

// example 5: Difference between == and ===
// let number = "5";
if (number == 5) {
    console.log("This is Five"); // execute
} else {
    console.log("This is something else");
}

// let number = "5";
if (number === 5) {
    console.log("This is Five");
} else {
    console.log("This is something else"); // execute
}

// ==========  if …  else if …  else  ========== //
// check a number positive or negative
// const number = 5;
if (number > 0) console.log("Positive"); // execute
else if (number < 0) console.log("Negative");
else console.log("Zero");

// example
const num1 = 100;
const num2 = 100;
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log("Numbers are equal"); // execute
}

// example
let purchase = 5000;
if (purchase >= 7000) {
    console.log("50% Discount !!");
    const discountPrice = purchase * 0.5;
    console.log(discountPrice);
    const payAmount = purchase - discountPrice;
    console.log(payAmount);
} else if (purchase >= 4000) {
    console.log("10% Discount !!");
    const discountPrice = purchase * 0.1;
    console.log(discountPrice);
    const payAmount = purchase - discountPrice;
    console.log(payAmount);
} else {
    console.log("No Discount !!");
}
// But in this case, we see that, repeat the same code. When we use Function, we solve this problem.

// ==========  Nested if else  ========== //
// let gender = "Female";
// let age = 17;

if (gender === "Male") {
    if (age >= 21) {
        console.log("Male !! Eligible for the marriage !!");
    } else {
        console.log("Male !! Not eligible for the marriage !!");
    }
} else {
    if (age >= 18) {
        console.log("Female !! Eligible for the marriage !!");
    } else {
        console.log("Female !! Not eligible for the marriage !!");
    }
}

// @ Avoid nested if else, alternate solution using Logical Operator
let gender = "Male";
let age = 21;

if ((gender === "Male" && age >= 21) || (gender === "Female" && age >= 18)) {
    console.log("Eligible for the marriage !!");
} else {
    console.log("Not eligible for the marriage !!");
}
