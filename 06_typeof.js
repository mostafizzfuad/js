console.log(typeof 32); // number
console.log(typeof 32.5); // number
console.log(typeof NaN); // number
console.log(typeof Infinity); // number

console.log(typeof "hello js"); // string

console.log(typeof true); // boolean

let number;
console.log(typeof number); // undefined

console.log(typeof null); // object

let arr = ["Fuad", "Junnun", "Siam"];
console.log(typeof arr); // object

const person = {
    firstName: "Mostafizur",
    lastName: "Rahman",
    age: 25,
};
console.log(typeof person); // object

console.log(typeof new Date()); // object
