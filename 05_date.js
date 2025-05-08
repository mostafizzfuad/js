let date = new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log(date); // 2025-05-08T20:01:24.197Z

console.log(typeof date); // object

console.log(date.toDateString()); // Fri May 09 2025
console.log(date.toTimeString()); // 02:01:24 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()); // 5/9/2025, 2:01:24 AM

console.log(date.getFullYear()); // 2025 (YYYY)
console.log(date.getMonth()); // 4 (month range : 0 - 11 where, 0 = January)
console.log(date.getDate()); // 9 (date range : 1 - 31)
console.log(date.getDay()); // 5 (day range : 0 - 6 where, 0 = Sunday … )

console.log(date.getHours()); // 2 (hours range : 0 - 23 where, 0 = 12am)
console.log(date.getMinutes()); // 1 (minutes range : 0 - 59)
console.log(date.getSeconds()); // 24 (seconds range : 0 - 59)
console.log(date.getMilliseconds()); // 197 (millisecond range : 0 - 999)

// ==========  Formatting a Date  ========== //
// Unlike other programming languages, JS does not provide a built-in function for formatting a date.
// However, you can extract individual bits and use it like this.

const currentDate = new Date();
const date1 = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// show in specific format
let monthDateYear = month + 1 + "/" + date1 + "/" + year;

console.log(monthDateYear); // 5/9/2025

// [ We’re using ⇒  moment.js  (for date formatting) ]
