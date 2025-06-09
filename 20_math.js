console.log(typeof Math); // object

console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

console.log(Math.abs(4)); // 4
console.log(Math.abs(-4)); // 4
console.log(Math.abs(10 - 12)); // 2

console.log(Math.ceil(4.589)); // 5
console.log(Math.floor(4.589)); // 4
console.log(Math.round(4.589)); // 5

console.log(Math.max(400, 500, 700, 300)); // 700
console.log(Math.min(400, 500, 200, 300)); // 200
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(49)); // 7

console.log(Math.random()); // 0 to 1
console.log(Math.random() * 6); // 0 to 6
console.log(Math.floor(Math.random() * 6)); // 0 to 5
console.log(Math.floor(Math.random() * 6) + 1); // 1 to 6
console.log(Math.floor(Math.random() * 5) + 1); // 1 to 5
console.log(Math.floor(Math.random() * 11) + 10); // 10 to 20

// ********************  General Formula for Random Integers in Range [min, max] *******************
// Math.floor(Math.random() * (max - min + 1)) + min

// ********************  Guessing Game (run in browser console) *******************
let numberOfWons = 0;
let numberOfLosts = 0;

for (let i = 0; i < 5; i++) {
    let guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    let randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber == randomNumber) {
        console.log("You have won");
        numberOfWons++;
    } else {
        console.log("You have lost. Random number was " + randomNumber);
        numberOfLosts++;
    }
}

console.log("number of wons: " + numberOfWons);
console.log("number of losts: " + numberOfLosts);
