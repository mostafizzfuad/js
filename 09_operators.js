// ==========  Arithmetic Operators  ========== //
/******************************************* 
+
-
*
/
%   ⇒  [  Remainder :  5 % 3  =  2  ]
**  ⇒  [  Exponentiation :  2**3  =  8  ]
++
--
*******************************************/

// ==========  increment / decrement  ========== //
let x = 10;

console.log(x); // 10
console.log(x++); // 10
console.log(x); // 11
console.log(++x); // 12
console.log(x); // 12
console.log(x--); // 12
console.log(--x); // 10

// ==========  Assignment Operators  ========== //
/******************************************* 
=
+=
-=
*=
/=
%=
**=   ⇒ [  a **= 2;   or   a  =  a**2  ]
*******************************************/

// ==========  Comparison Operators  ========== //
/******************************************* 
==   	⇒  [ check only value ]
===    	⇒  [ check value and type ]
!=    	⇒  [ check only value ]
!==    	⇒  [ check value and type ]
>
>=
<
<=
*******************************************/
// equal operator
console.log(2 == 2); // true
console.log(2 == "2"); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === "2"); // false

// not equal operator
console.log(3 != 2); // true
console.log("hello" != "Hello"); // true
console.log("Hello" != "Hello"); // false

// strict not equal operator
console.log(2 !== "2"); // true
console.log(2 !== 2); // false

console.log(10 > 20); // false
console.log(10 >= 10); // true
console.log(10 < 20); // true
console.log(15 <= 10); // false

// ==========  Operator Precedence  ========== //
// ()   ====>     /   *     %     ====>      +  -     ====>       =   >  >=  <  <=
console.log(30 + (10 - 5) * 2); // 40
console.log(2024 > 2030 - 30); // true
