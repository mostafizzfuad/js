// ==========  type conversion  ========== //
// type conversion - manually by Programmer
console.log(Number("500")); // 500
console.log(String(1000)); // 10000
console.log(String(true)); // true
console.log(Number(false)); // 0

console.log(typeof Number("500")); // number
console.log(typeof String(1000)); // string
console.log(typeof String(true)); // string
console.log(typeof Number(false)); // number

// ==========  type coercion  ========== //
// type coercion - automatically by JS
// normal arithmetic
console.log(10 + 10); // 20
console.log(20 - 10); // 10
console.log(20 * 5); // 100
console.log(20 / 3); // 6.666666666666667
console.log(20 % 3); // 2

// string concat or NaN
console.log("Baby" + 20); // Baby20
console.log("Baby" - 20); // NaN
console.log("Baby" * 20); // NaN
console.log("Baby" / 20); // NaN
console.log("Baby" + "Babu"); // BabyBabu
console.log("Baby" - "Babu"); // NaN

// coercion (automatically)
console.log(200 - "100"); // 100 - coercion (automatically)
console.log(200 * "100"); // 20000 - coercion (automatically)
console.log(200 / "100"); // 2 - coercion (automatically)
console.log(100 + "200"); // 100200
console.log("200" + 100); // 200100

console.log(100 + 200 + "300"); // 300300
console.log(100 + 200 - "300"); // 0
console.log(100 + 200 + "300" - 100); // 300300 - 100 = 300200

// note : jekhan theke ( + and string ) thakbe, sei point theke sob kichu string baniye felbe …

// ==========  guessing game  ========== //
// game 1
let a = "1" + 1;
a -= 1;
console.log(a); // 10

// game 2
let x = 2 + 3 + 4 + "5";
x += 5;
console.log(x); // 955

// game 3
let y = "10" - "5" - "3" - 2 + "5";
y -= 10;
console.log(y); // -5

// game 4
let z = 1 + 1 - 1 - "1" + "10" - 20;
z += "10";
z--;
console.log(z); // -1011
