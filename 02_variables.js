// let variableName = value;
let age = 25;
let studentName = "Mostafizur";

// const variableName = value;
const number = 20;

// ==========  old system ⇒ don't use  ========== //
// var variableName = value;
var money = 200;

// ==========  Rules for naming a variable  ========== //
/* 
don't use var keyword for declaration a variable
variable names cannot be keywords
should be meaningful  (use age not a, use name not n)
cannot start with number
cannot contain a space or hyphen
variable names are case sensitive. So be careful about it.
use camelCase notation for variable names (others are snake_case, PascalCase)
let and const ⇒  block scope
var  ⇒  function scope ( var diye variable declare er purbe console.log korle, undefined ashbe )
when declaring a const variable, must assign a value and re-assign is not possible.
*/

// ==========  No keyword using variable: don't use  ========== //
likes = 150;
console.log(likes); // it's working but this type of variable cannot create scope
// Expected output: 150

// ==========  re-assign  ========== //
let ageRifat = 25;
let ageWalid = 30;
console.log(ageWalid); // 30
console.log(ageRifat); // 25

// re-assign
ageWalid = ageRifat;
console.log(ageWalid); // 25
console.log(ageRifat); // 25

// ==========  What does it mean that Javascript is a dynamic and weakly typed programming language ?   ========== //
// Javascript can hold values with different data types in the same variable during runtime.
let ageSiam = 25;
console.log(typeof ageSiam); // number

// re-assign
ageSiam = "Hello, World!";
console.log(typeof ageSiam); // string
