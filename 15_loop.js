/**************************************** 
Javascript has three types of loops:
    - for loop
    - while loop
    - do...while loop
****************************************/

// ==========  for loop  ========== //

// Write your name 10 times using for loop ?
for (let i = 0; i < 10; i++) {
    console.log("Mostafizur Rahman");
}

// Write a program that displays the first 20 integer numbers ?
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Write a program that displays  1-10 odd numbers  ?
for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

// another way
for (let i = 1; i < 10; i++) {
    // if (i % 2 !== 0)
    if (i % 2 === 1) {
        console.log(i);
    }
}

// another way
for (let i = 0; i < 10; i++) {
    // if (i % 2 !== 1)
    if (i % 2 === 0) {
        console.log(i + 1);
    }
}

// another way
for (let i = 0; i < 10; i++) {
    // if (i % 2 !== 1) continue;
    if (i % 2 === 0) continue;
    console.log(i);
}

// Write a program that displays  1-10 even numbers  ?
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// another way
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}

// Write a program to display Multiples of 5 between 1 and 20 ?
for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) console.log(i); // 5 10 15 20
}

// another way
for (let i = 5; i <= 20; i += 5) {
    console.log(i);
}

// Write a program to display numbers that are multiples of both 5 and 3, between 1 and 50 ?
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i); // 15 30 45
    }
}

// Write a program to compute the sum of the first 10 integer numbers ?
// let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum); // 55

// another way (using formula)
n = 10;
console.log((n * (n + 1)) / 2); // 55

// Write a program to compute the sum of 1 to 20 which are multiplied/divisible by 5 ?
// let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 5 == 0) sum += i; // 5 10 15 20 = 50
}
console.log(sum); // 50

// another way
// let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 5 !== 0) continue;
    sum += i; // 5 10 15 20 = 50
}
console.log(sum); // 50

// Write a program to compute the sum from M to N  integer numbers ?
// let m = 11;
// let n = 15;

let sum = 0;
for (let i = m; i <= n; i++) {
    sum += i;
}
console.log(sum); // 65

// Even Odd
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}

// =========  Infinite for loop  ========== //
for (let i = 1; i > 0; i++) {
    // console.log(i);
}

for (;;) {
    // body of for loop
}

// =========  while loop  ========== //
// Write a program that displays the first 10 integer numbers ?
// let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// =========  Infinite while loop  ========== //
while (true) {
    // loop body
}

while (1) {
    // loop body
}

// =========  do...while loop  ========== //
// In while loop, the condition is checked before the body is executed. It is the exact opposite in do...while loop, i.e. condition is checked after the body is executed.

// This is why, the body of do...while loop will execute at least once irrespective to the test-expression.

// Write a program that displays the first 10 integer numbers ?
// let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// =========  Infinite do...while loop  ========== //
do {
    // body of do while loop
} while (true);

do {
    // body of do while loop
} while (1);

// =========  nested loop  ========== //
// Square Pattern Design

/*
 *****
 *****
 *****
 *****
 *****
 */

// let n = 5;
// let star = "";
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);

/*************
 *
 **
 ***
 ****
 *****
 *************/
let n = 5;
let star = "";
for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);

// ==========  reverse loop  ========== //
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// ==========  break and continue statement  ========== //
// example 1
for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) continue; // skip the below statements
    console.log(i);
    if (i === 10) break; // loop terminate
}

// example 2
let arr = [6, 10, 15, 5, 7, 19, 2, 13, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        continue;
    }
    console.log(arr[i]);
}
