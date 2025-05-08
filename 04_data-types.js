// Data types represent the different kinds of values we can use in JavaScript.

/*********************** 
JavaScript data types are divided into primitive and non-primitive types.

Primitive Data Types : They can hold a single simple value. ( Defined By Javascript )
    String
    Number 
    BigInt
    Boolean
    undefined
    null
    Symbol

Non-Primitive Data Types : They can hold multiple values. ( Defined By The user )
Object
    Object
    Array
    Date
***********************/

// ==========  Number  ========== //
let id = 247; // number literal (int)
let age = 25.5; // number literal (float)
let num = Number(56); // number constructor

console.log(id); // 247
console.log(age); // 25.5
console.log(num); // 56

// ==========  convert string to number  ========== //
console.log(Number("32")); // 32
console.log(typeof Number("32")); // number

console.log(Number.parseInt("3.41")); // 3
console.log(Number.parseFloat("3.41")); // 3.41

console.log(Number.parseInt(75.88)); // 75 (convert float to integer)

// ==========  convert boolean to number  ========== //
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// ==========  convert number to string  ========== //
console.log(typeof String(247)); // string
console.log(typeof toString(247)); // string ⇒ old system

// ==========  max and min value  ========== //
console.log(Number.MAX_VALUE); // max integer value
console.log(Number.MIN_SAFE_INTEGER); // min integer value

// ==========  Infinity  ========== //
console.log(1 / 0); // Infinity
console.log(50 / 0); // Infinity
console.log(-52 / 0); // -Infinity
console.log(typeof Infinity); // number

// ==========  NaN  ========== //
const result = 4 - "hello";
console.log(result); // NaN
console.log(typeof NaN); // number

const countryName = "Bangladesh";
const converted = Number(countryName);
console.log(converted); // NaN

console.log("abc" * 10); // NaN -> Not a number
console.log(typeof NaN); // number

// ==========  isNaN  ========== //
console.log(6 - 10); // -4
console.log(isNaN(6 - 10)); // false
console.log(isNaN("6 - 10")); // true
console.log();
console.log("6" - "10"); // -4
console.log(isNaN("6" - "10")); // false
console.log(isNaN("hello")); // true
console.log(isNaN(Infinity)); // false
console.log(isNaN(-Infinity)); // false
console.log(isNaN(true)); // false

// =========  convert hexadecimal to decimal  ========== //
let hex = 0xff;
console.log(hex); // 255

// =========  convert octal to decimal  ========== //
let oct = 0o756;
console.log(oct); // 494

// =========  convert binary to decimal  ========== //
let bin = 0b11010;
console.log(bin); // 26

// =========  toFixed() and toPrecision()  ========== //
let number = 32.36578;

// toFixed()
console.log(number.toFixed(2)); // 32.37
console.log(typeof number.toFixed(2)); // string

// toPrecision()
console.log(number.toPrecision(5)); // 32.366
console.log(typeof number.toPrecision(5)); // string

// ==========  String  ========== //
// string literal
let str = "Mostafizur"; // single quotes
let str2 = "Mostafizur"; // double quotes
let str3 = `Mostafizur`; // backticks

// string constructor
let str4 = String("Mostafizur");
let str5 = String(123); // convert number to string
let str6 = String(3.1416); // convert number to string

console.log(str3, str5, str6);
// expected output : Mostafizur 123 3.1416

// ==========  Boolean  ========== //
// boolean literal
let b1 = true;
let b2 = false;

// boolean constructor
let b3 = Boolean(true);
let b4 = Boolean(false);

console.log(b1, b4); // true false

// convert boolean to number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// ==========  undefined  ========== //
// undefined : A variable without value always stores undefined.

let idNumber;
console.log(idNumber); // undefined
console.log(typeof idNumber); // undefined

console.log(undefined + 25); // NaN
console.log(undefined + true); // NaN
console.log(undefined + "hello"); // undefinedhello

// ==========  null  ========== //
// In JavaScript, null represents "no value" or "nothing."
// null: A variable with unknown value can store null. (Null is a special type used as a absence of an object)
// suppose amra variable er akta value expect korchi, but sekhane variable er value kichu akta define korai lagbe, faka rakha jabe na, sei khetre variable er value null diye define korte pari

let number2 = null;
console.log(number2); // null
console.log(typeof number2); // object

// Here, let number = null; indicates that the number variable is set to have no value.

// ==========  BigInt  ========== //
// BigInt was introduced in a newer version of JavaScript (ES11) and is not supported by many browsers, including Safari.
let value = 900719925124740998n;
console.log(value); // 900719925124740998n
console.log(typeof value); // bigint

// this number is too big for a number data type
let hh = 900719925124740998;
console.log(hh); // 900719925124741000

// ==========  Symbol  ========== //
// A Symbol is a unique and primitive value. This data type was introduced in ES6.
// When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions. For example,

// two symbols with the same description
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");

console.log(value1 === value2); // false
