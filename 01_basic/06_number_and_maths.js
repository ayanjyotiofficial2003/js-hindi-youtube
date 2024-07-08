const score = 400
// console.log(score); // output => 400

const balance = new Number(100);
// console.log(balance); // output => [Number: 100]

// console.log(balance.toString()); // output => 100 (converted to string)
// console.log(balance.toString().length); // output => 3

// console.log(balance.toFixed(2)); // output => 100.00
// console.log(balance.toFixed(1)); // output => 100.0
// console.log(balance.toFixed(3)); // output => 100.000

const otherNumber = 23.896

// console.log(otherNumber.toPrecision(3)); // output => 23.9
// console.log(otherNumber.toPrecision(4)); // output => 23.90
// console.log(otherNumber.toPrecision(2)); // output => 24

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // output => 1,000,000 (represented as US standards)
// console.log(hundreds.toLocaleString('en-IN')); // output => 10,00,000 (represented as Indian standards)


// +++++++++++++++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); // output => 4
// console.log(Math.abs(4)); // output => 4

// console.log(Math.round(4.3)); // output => 4
// console.log(Math.round(4.6)); // output => 5


// console.log(Math.ceil(4.2)); // output => 5

// console.log(Math.floor(4.9)); // output => 4

// console.log(Math.min(4, 3, 6, 8)); // output => 3
// console.log(Math.max(4, 3, 6, 8)); // output => 8


// console.log(Math.random()); // output => 0.9261018749373828
// console.log(Math.random()); // output => 0.17716932916982553
// console.log(Math.random()); // output => 0.19311839030150124
/* 
NOTE :- Math.random() IS A METHOD AND IT PROVIDE RANDOM VALUES IN BETWEEN 0 & 1, 
 AND EVERY TIME IT VALUE CHANGES.
*/

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) ; 

