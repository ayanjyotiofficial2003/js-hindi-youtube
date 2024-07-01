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

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************************************Operations********************************************

let value = 3 
let negValue = -value

// console.log(negValue); // output => -3

// console.log(2+2); // output => 4
// console.log(2-2); // output => 0
// console.log(2*2); // output => 4
// console.log(2**2); // output => 4 (power operation 2**2 => 2^2)
// console.log(2**3); // output => 8 (power operation 2**3 => 2^3)
// console.log(2/3); // output => 0.666
// console.log(2%3); // output => 2 (Remainder operation, it gives remainder)


let str1 = "hello"

let str2 = "ayanjyoti"

let str3 = str1 + " " + str2

// console.log(str3); // output => hello ayanjyoti


// console.log(1 + 2); // output => 3
// console.log("1" + 2); // output => 12
// console.log(1 + "2"); // output => 12
// console.log(1 + 2 + 2); // output => 5
// console.log("1" + 2 + 2); // output => 122
// console.log("1" + (2 + 2)); // output => 14
// console.log(1 + 2 + "2"); // output => 32
// console.log(1 + "2" + "2"); // output => 122
// console.log(2 + 1 + "2" + "2"); // output => 322
// console.log("2" + "1" + 2 + 2); // output => 2122
// console.log("2" + "1" + (2 + 2)); // output => 214

// console.log((5 + 3) - 8 / 9 % 25);

// console.log(true); //output => true

// we should try to avoid this type of code, because it is very confusing
// console.log(+true); //output => 1
// console.log(+""); //output => 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++ // output => 101
// ++gameCounter // output => 101
// console.log(gameCounter);
// let count = ++gameCounter // output => 101
let count = gameCounter++ // output => 100
console.log(count);



