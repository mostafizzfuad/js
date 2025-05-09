// ==========  Falsy value  ========== //
/************************ 
0 
""
undefined
null
NaN
************************/

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// ==========  Truthy value  ========== //
// ৫ ধরণের falsy value ছাড়া বাকি সব truthy value

console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(" ")); // true
console.log(Boolean("hello")); // true
console.log(Boolean({})); // true

let money = 10;
if (money) {
    // 10 = true
    console.log("I have money"); // execute
} else {
    console.log("I have no money");
}
