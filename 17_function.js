// A function is a block of code that performs a specific task when it is called.
// functionName convention  ⇒  always use camelCase notation for function name.

/* 
Javascript has three types of function based on their declarations:
    - Function Declaration
    - Function Expression
    - Arrow Function
*/

// *************** Function Declaration *************** //
// function declaration is the most common way to create a function in JavaScript.
// function declaration is hoisted.

function ageCalculator(birthYear) {
    // parameter = birthYear
    const age = 2025 - birthYear;
    return age;
}
console.log(ageCalculator(1998)); // call or invoke the function [argument = 1998]

// *************** Function Expression *************** //
// function expression is a function that is assigned to a variable.
// function expression is not hoisted.

const ageCalculator2 = function (birthYear) {
    const age = 2025 - birthYear;
    return age;
};
console.log(ageCalculator2(1998));

// *************** Arrow Function *************** //
// arrow function is a function that is assigned to a variable.
// arrow function is not hoisted.
const ageCalculator3 = (birthYear) => {
    const age = 2025 - birthYear;
    return age;
};
console.log(ageCalculator3(1998));

// arrow function (minimize)
const ageCalculator4 = (birthYear) => 2025 - birthYear;

// *************** Arrow Function + Ternary Operator *************** //
const ageCalculator5 = (birthYear) =>
    2025 - birthYear > 18 ? "Adult" : "Minor";
console.log(ageCalculator5(1998));

// *************** Function calling Function *************** //
function fruitCutter(fruit) {
    return fruit * 4;
}

function juiceMaker(apples, oranges) {
    const applePices = fruitCutter(apples); // 60
    const orangePices = fruitCutter(oranges); // 40

    const juice = (applePices + orangePices) / 2; // 50

    return `${juice} ltr. juice is ready using ${applePices} apple pieces and ${orangePices} orange pieces`;
}
console.log(juiceMaker(15, 10)); // invoke
// Expected output: 50 ltr. juice is ready using 60 apple pieces and 40 orange pieces

// *************** Brick calculation Exercise *************** //
// brick calculation:
/****
 * underground = 50000
 * 1st to 10th = 10000 per floor
 * 11th floor = 12000
 * 12th to 21st = 10000 per floor
 * 22th floor = 12000
 *
 * 73 floor porjonto total koto brick lagbe ?
 ****/

function brickCalculation(totalFloors) {
    const undergroundBricks = 50000;
    let brickForAllFloors = totalFloors * 10000;
    const extraFLoors = Math.trunc(totalFloors / 11);
    const extraBricks = extraFLoors * 2000;
    brickForAllFloors += extraBricks;
    return `total bricks needed: ${undergroundBricks + brickForAllFloors}`;
}
console.log(brickCalculation(73)); // total bricks needed: 792000

// *************** Currying Function *************** //
// Currying মানে হলো — অনেকগুলো আর্গুমেন্ট একসাথে নেওয়ার বদলে, প্রতিটা আর্গুমেন্ট এক এক করে নেওয়া।

// ************** function declaration *************** //
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// ************** currying function *************** //
function addCurrying(a) {
    return function (b) {
        return a + b;
    };
}
console.log(addCurrying(2)(3)); // 5

// ************** currying function with arrow function *************** //
const addCurryingArrow = (a) => (b) => a + b;
console.log(addCurryingArrow(2)(3)); // 5

// ************** currying function with arrow function and ternary operator *************** //
const addCurryingArrowTernary = (a) => (b) =>
    a + b > 10 ? "greater than 10" : "less than 10";
console.log(addCurryingArrowTernary(2)(3)); // less than 10

// ************** IIFE (Immediately Invoked Function Expression) *************** //
// IIFE is a function that is executed immediately after it is defined.

// standard IIFE
(function () {
    // statements…
})();

// arrow function variant
(() => {
    // statements…
})();

// async IIFE
(async () => {
    // statements…
})();

// ************** Standard IIFE *************** //
(function () {
    console.log("Hello World!");
})();

// ************** IIFE with parameter *************** //
(function (name) {
    console.log(`Hello ${name}!`);
})("Mostafizur");

// sum of two numbers
(function (a, b) {
    console.log(a + b);
})(2, 3);

// using arrow function
((a, b) => console.log(a + b))(10, 20); // 30

// ************** Function Declaration IIFE *************** //
(function () {
    console.log("Hello World!");
})();

// we can also use function name
(function display() {
    console.log("Hello World!");
})();

// ************** Function Expression IIFE *************** //
const display = (function () {
    return "Hello World!";
})();
console.log(display);

// ************** Arrow Function IIFE *************** //
(() => console.log("Hello World!"))();

// ************** Function Practice Problems *************** //
// Practice Problem 1
function square(n) {
    return n * n;
}

console.log(square(5));
console.log(square(7));

// Practice Problem 2
function findMax(num1, num2) {
    if (num1 > num2) return num1;
    else if (num1 < num2) return num2;
    return "Equal";
}

console.log(findMax(10, 20));

// Practice Problem 3: Handle unexpected function input parameter error
function findSum(arr) {
    if (!Array.isArray(arr)) {
        return "Please, provide an array";
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(findSum([10, 20, 6, 17, 8])); // 61
console.log(findSum({ age: 20, job: true })); // Please, provide an array

// Practice Problem 4
function isVoter(person) {
    if (typeof person !== "object") {
        return "Please, provide an object";
    }

    if (person.age >= 18) return true;
    return false;
}

console.log(isVoter({ age: 20, job: true })); // true
console.log(isVoter({ age: 15, job: true })); // false
console.log(isVoter(15)); // Please, provide an object

// Practice Problem 5: Simple calculator to call function inside a function
function sum(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, ch) {
    if (ch === "+") return sum(a, b);
    else if (ch === "-") return sub(a, b);
    else if (ch === "*") return multiply(a, b);
    else if (ch === "/") return div(a, b);
    return "invalid operator";
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "k")); // invalid operator

// Practice Problem 6: Check Even
function isEven(n) {
    if (n % 2 === 0) return true;
    // else return false;
    return false;
}

console.log(isEven(6));
console.log(isEven(7));

// Practice Problem 7: Check Even Size String
function isEvenSizeString(str) {
    const len = str.length;
    console.log(len); // 11

    if (len % 2 === 0) return true;
    // else return false;
    return false;
}

const str = "Hello World";
console.log(isEvenSizeString(str)); // false

// Practice Problem 8: Create a function that will return the sum of all numbers in an array
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// const arr = [5, 16, 8, 15, 16, 21];
// console.log(sumOfArray(arr)); // 81

// another way: using for of loop
function sumNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
// const arr = [5, 16, 8, 15, 16, 21];
// console.log(sumNumbers(arr)); // 81

// Practice Problem 9: Create a function that will return the sum of even numbers in an array
function sumEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum;
}

const arr = [5, 16, 8, 15, 16, 21];
console.log(sumEvenNumbers(arr)); // 40

// Practice Problem 10: Convert Inches To Feet
function inchToFeet(inches) {
    const feet = Math.trunc(inches / 12);
    const remInches = inches % 12;
    return `${feet} feet ${remInches} inch`;
}
console.log(inchToFeet(30)); // 2 feet 6 inch
