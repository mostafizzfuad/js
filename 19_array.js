// ⇒  Array is a data structure where we can organize multiple data under a single variable.
// ⇒  An array is an object that can store multiple values at once.

// ******************* Array Literal Syntax *******************
// const arr = ["Mostafizur", "Junnun", "Siam", "Masud"]; // array literal
// console.log(arr); // [ 'Mostafizur', 'Junnun', 'Siam', 'Masud' ]

const ages = [25, 50, 31, 17, 6, 20];
const friends = ["Mostafizur", "Junnun", "Siam", "Masud"];
const passed = [true, false, false, true, false, true, true];
const mixed = [25, "Siam", true, 91.5];

// ******************* Array Function / Array Constructor *******************
const years = new Array(1990, 1993, 2001, 2002, 2003); // array function
console.log(years); // [ 1990, 1993, 2001, 2002, 2003 ]

// ******************* Basic Array Operation *******************
// declare an array using literal syntax
const arr = [11, 50, 80, 70, 30];
console.log(arr);

// finding elements in array by index
console.log(arr[0]); // 11
console.log(arr[3]); // 70
console.log(arr[6]); // undefined : because index 6 doesn't exist

// length of an array
console.log(arr.length); // 5

// last element of an array
console.log(arr[arr.length - 1]); // 30

// re-assign or mutate
arr[2] = 100;
console.log(arr); // [ 11, 50, 100, 70, 30 ]

// assign new element
arr[5] = 9;
console.log(arr); // [ 11, 50, 100, 70, 30, 9 ]

// type of array
console.log(typeof arr); // object

// ******************* Array Method (Basic) *******************
// ******************* push() *******************
// push() : add element in the end
const arr = [10, 50, 80, 70, 30];
arr.push(100); // single element push
arr.push(200, 300); // multiple elements push
console.log(arr);
// output : [ 10,  50,  80, 70, 30, 100, 200, 300 ]

// push() : add element in the end
const strArr = ["mostafizur", "fuad", "siam"];
strArr.push("junnun"); // single element push
strArr.push("rifat", "walid"); // multiple elements push
console.log(strArr);
// output : [ 'mostafizur', 'fuad', 'siam', 'junnun', 'rifat', 'walid' ]

// ******************* pop() *******************
// pop(): remove element from the end
const arr = [10, 50, 80, 70, 30];
arr.pop();
console.log(arr); // [ 10,  50,  80, 70 ]

const arr = [10, 50, 80];
arr.pop();
const result = arr.pop();
console.log(result); // 50

// If the array is empty, undefined is returned and the array is not modified.
const arr = [];
console.log(arr.pop()); // undefined

// ******************* unshift() *******************
// unshift(): add element at the beginning
const arr = [10, 50, 80, 70, 30];
arr.unshift(2024);
arr.unshift(2030, 2040);
console.log(arr); // [ 2030, 2040, 2024, 10, 50, 80, 70, 30 ]

// ******************* shift() *******************
// shift(): remove element from the beginning
const arr = [10, 50, 80, 70, 30];
arr.shift();
console.log(arr); // [ 50, 80, 70, 30 ]

// ******************* indexOf() *******************
// indexOf(): finding indexNo by element name
const arr = [100, 500, 800, 700, 300];

console.log(arr.indexOf(800)); // 2
console.log(arr.indexOf(300)); // 4
console.log(arr.indexOf(1000)); // -1 [ returns -1 if the value is not found ]

// ******************* includes() *******************
// includes(): returns true if the array element exists in the array otherwise false.
const arr = [100, 500, 800, 700, 300];

console.log(arr.includes(800)); // true
console.log(arr.includes(300)); // true
console.log(arr.includes(1000)); // false

// ******************* Exercise:  includes() and indexOf() *******************
const familyMember = ["fuad", "junnun", "siam"];

// exercise using includes()
if (familyMember.includes("siam")) {
    console.log("He is our Sheikh"); // executed
} else {
    console.log("Unknown");
}

// exercise using indexof() : alternative
if (familyMember.indexOf("siam") !== -1) {
    console.log("He is our Sheikh"); // executed
} else {
    console.log("Unknown");
}

// ******************* Array.isArray() *******************
// Array.isArray(): returns true if the value is an array otherwise false.
const arr = [10, 50, 80, 90];
const age = 25;

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(age)); // false
console.log(Array.isArray([])); // true
console.log(Array.isArray("[]")); // false

// ******************* Looping Array *******************
// for of  ⇒  looping for array
// for in  ⇒  looping for object

const persons = ["Mostafizur", "Junnun", "Siam", "Masud"];
for (const person of persons) {
    console.log(person);
}

// using for loop
const students = ["Mostafizur", "Junnun", "Siam", "Masud"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// ******************* Exercise: Array *******************
// ******************** average array elements with two decimal point numbers *******************
let arr = [60, 95, 75, 52, 71, 33];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

avg = avg.toFixed(2); // 64.33 (but it's a string)
// avg = Number.parseFloat(avg); // 64.33 (now it's a number)
avg = Number(avg); // 64.33 (now it's a number)
console.log(avg); // 64.33

// ******************** Reverse an array *******************
const arr = [10, 50, 80, 90];
arr.reverse(); // mutate the original array
console.log(arr); // [ 90, 80, 50, 10 ]

// another way
/* 
const numbers = [10, 50, 80, 90];
const reverseNumbers = [];
for (const number of numbers) {
    reverseNumbers.unshift(number);
}
console.log(reverseNumbers); // [ 90, 80, 50, 10 ] 
*/

// ******************** Find the max number in an array *******************
function maxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// const numbers = [10, 20, 15, 35, 25, 17];
const max = maxNumber(numbers);
console.log(max);

// ******************** Find the max even number in an array *******************
/* 
function maxEvenNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max && arr[i] % 2 === 0) {
            max = arr[i];
        }
    }

    if (max % 2 === 0) return max;
    return "No even number found";
}

const numbers = [10, 21, 15, 35, 25, 17];
const evenMax = maxEvenNumber(numbers);
console.log(evenMax);
*/

function maxEven(arr) {
    const evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }

    if (evenArr.length === 0) {
        return "No even number found";
    }

    let max = evenArr[0];
    for (let i = 1; i < evenArr.length; i++) {
        if (evenArr[i] > max) {
            max = evenArr[i];
        }
    }
    return max;
}

// const numbers = [10, 20, 15, 35, 26, 17, 8];
const evenMax = maxEven(numbers);
console.log(evenMax);

// ******************** Swapping two numbers *******************
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a, b); // 20 10

// another way
let x = 10;
let y = 20;

[x, y] = [y, x]; // destructuring assignment
console.log(x, y); // 20 10

// another way
let p = 10;
let q = 20;

p = p - q; // -10
q = p + q; // 10
p = q - p; // 20

// ******************** Create a function that will return only even numbers in an array *******************
function evenNumbers(numbers) {
    const evenArr = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenArr.push(number);
        }
    }
    return evenArr;
}

// const numbers = [5, 6, 8, 15, 16, 21];
const arr = evenNumbers(numbers);
console.log(arr); // [ 6, 8, 16 ]

// ******************** Calculate the average of the odd numbers in an array *******************
/* 
function oddAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }
    return count === 0 ? "No odd number found" : sum / count;
}
const numbers = [10, 20, 7, 21, 26, 19, 8]; // 7 + 21 + 19 = 47 / 3
const average = oddAverage(numbers);
console.log(average); 
*/

// another way
function oddAverage(arr) {
    const oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            oddArr.push(arr[i]);
        }
    }

    if (oddArr.length === 0) {
        return "No odd number found";
    }

    let sum = 0;
    for (let i = 0; i < oddArr.length; i++) {
        sum += oddArr[i];
    }
    const avg = sum / oddArr.length;
    return avg;
}

// const numbers = [10, 20, 7, 21, 26, 19, 8]; // 7 + 21 + 19 = 47 / 3
const average = oddAverage(numbers);
console.log(average);

// ******************** Remove duplicate items from an array *******************
/* 
function removeDuplicate(arr) {
    const uniqueArr = [];
    for (const element of arr) {
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    }
    return uniqueArr;
}
*/

// another way: using indexOf()
function removeDuplicate(arr) {
    const uniqueArr = [];
    for (const element of arr) {
        if (uniqueArr.indexOf(element) === -1) {
            uniqueArr.push(element);
        }
    }
    return uniqueArr;
}

const numbers = [1, 5, 7, 1, 5, 8, 5, 7];
console.log(removeDuplicate(numbers)); // [ 1, 5, 7, 8 ]
