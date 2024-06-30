let score = "33"

let score2 = "33abc"

let score3 = null

let score4 = undefined

let score5 = true

let score6 = "Ayanjyoti"

// console.log(typeof score);
// console.log(typeof (score2));
// console.log(typeof (score3));
// console.log(typeof (score4));
// console.log(typeof (score5));
// console.log(typeof (score6));

// conversion of string data types into number data types.
let valueInNumber = Number(score)

// console.log(typeof (valueInNumber));
// console.log(valueInNumber); // output => 33

// conversion of string data types into number data types.
let valueInNumber2 = Number(score2)

// console.log(typeof (valueInNumber2));
// console.log(valueInNumber2); // output => NaN

// conversion of null data types into number data types.
let valueInNumber3 = Number(score3)

// console.log(typeof (valueInNumber3));
// console.log(valueInNumber3); // output => 0

// conversion of undefined data types into number data types.
let valueInNumber4 = Number(score4)

// console.log(typeof (valueInNumber4));
// console.log(valueInNumber4); // output => NaN

// conversion of boolean data types into number data types.
let valueInNumber5 = Number(score5)

// console.log(typeof (valueInNumber5));
// console.log(valueInNumber5); // output => 1

// conversion of string data types into number data types.
let valueInNumber6 = Number(score6)

// console.log(typeof (valueInNumber6));
// console.log(valueInNumber6); // output => NaN


// conversion of number data types into boolean data types
// let isLoggedIn = 1 // output => true

// let isLoggedIn = "" // output => false

let isLoggedIn = "Ayanjyoti" // output => true
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// conversion of number data types into string data types

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);