// COMPARISON BETWEEN SAME DATA TYPES

// console.log(2 > 1); // output => true
// console.log(2 < 1); // output => false
// console.log(2 >= 1); // output => true
// console.log(2 <= 1); // output => false
// console.log(2 == 1); // output => false
// console.log(2 != 1); // output => true


// COMPARISON BETWEEN DIFFERENT DATA TYPES 

// console.log("2" > 1); // output => true, because "2" {string 2} will converted to 2 {number 2}
// console.log("02" > 1); // output => true, because "02" {string 02} will converted to 02 {number 02}
// console.log("2" < 1); // output => false, because "2" {string 2} will converted to 2 {number 2}

// This type of code make confusion, so we should try to avoid this type of code.

// console.log(null > 0); // output => false
// console.log(null == 0); // output => false
// console.log(null >= 0); // output => true
/*
HERE COMPARISON CHECKER [>, <, >=, <=] AND EQAULITY CHECKER [==] WORKS DIFFERENTLY,
COMPARISON CHECKER [>, <, >=, <=] converts null to a number, treating to as 0,
that's why (1) null > 0 is false , but (3) null >= 0 is true
*/


// console.log(undefined == 0); // output => false
// console.log(undefined > 0); // output => false
// console.log(undefined < 0); // output => false
// console.log(undefined >= 0); // output => false
// console.log(undefined <= 0); // output => false


// === (STRICT CHECK) [IT CHECKS BETWEEN TWO VALUES AS WELL AS, DATATYPES BETWEEN TWO VALUES]

console.log("2" === 2); // output => false, because datatypes of two numbers are not same 