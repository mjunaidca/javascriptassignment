let time = 'true money';
let wealth = 'money';

// Continuing conditional test for Q23 variables

// Equality tests already done

console.log(time.toLowerCase() == time ? true: false); // checking if variable is lowercase
console.log(time.toUpperCase() != time ? false: true); // checking if variable is NOT lowercase
console.log(wealth.toLowerCase() == wealth ? true: false); // checking if variable is uppercase
console.log(wealth.toUpperCase() != wealth ? false: true); // checking if variable is NOT uppercase

// Time for numberical tests

let a = 10;
let b = 20;
console.log(a <= b); // checking if a is less than or equal to b
console.log(a >= b); // checking if a is greater than or equal to b
console.log(a < b); // checking if a is less than b
console.log(a > b); // checking if a is greater than b
console.log(a == b); // checking if a is equal to b
console.log(a != b); // checking if a is NOT equal to b
console.log(a === b); // checking if a is strictly equal to b
console.log(a !== b); // checking if a is NOT strictly equal to b
console.log( a + b == a && b + a == b ? true : false); // checking if a and b have zero values
console.log(Array.isArray(a));// checking if a is an array
console.log(Array.isArray(b));// checking if b is an array
console.log(Array.isArray(a) || Array.isArray(b) ? true : false); // checking if a or b are arrays
