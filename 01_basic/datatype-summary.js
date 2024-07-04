// Primitive datatypes => call by value

// 7 types :-
// String, Number, BigInt, Boolean, Null, undefined, Symbol

const score = 100 // Number data type

const scoreValue = 100.3 // Number data type

const isLoggedIn = false // Boolean data type

const outSideTemp = null // Null data type

let userEmail; // undefined data type

// symbol data type
const id = Symbol('123')
const anotherId = Symbol('123')
/*NOTE :- IN id and anotherId the given value is same but the return value is not same,
this is the work of SYMBOL data type */
// console.log(id === anotherId); // output => false

const bigNumber = 3465688954751225321255n  // BigInt data type



// Refrenced datatypes (Non-primitive data types) => call by refrences

// Array, Objects, Functions

// Array data type
const heros = ["shaktiman", "naagraj", "doga"];

// Object data type
let myObj = {
    name: "Ayanjyoti",
    age: 18,
}

// Function data type
const myFunction = function(){
    console.log("Hello world");
}

// typeof => it return the data type of a particular variable
// console.log(typeof bigNumber); // output => bigint
// console.log(typeof myFunction); // output => function
// console.log(typeof outSideTemp); // output => object
// console.log(typeof scoreValue); // output => number
// console.log(typeof heros); // output => object
// console.log(typeof myObj); // output => object
// console.log(typeof anotherId); // output => symbol
// console.log(typeof id); // output => symbol

// NOTE :- JavaScripts is a dynamically typed language


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory :- 1) Stack , 2) Heap

// 1) Stack (used by primitive data types) , 2) Heap (used by Non - primitive data types)


// STACK => used by primitive data types => call by value
let myYoutubeChannel = "ayanjyotimondaldotcom"

let anotherName = myYoutubeChannel
anotherName = "Ayanjyotidotcom"  

console.log(anotherName); // output => Ayanjyotidotcom
console.log(myYoutubeChannel); // output => ayanjyotimondaldotcom


// HEAP => used by Non - primitive data types => call by refrences

let userOne = {
    email: "user@google.com", 
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ayanjyoti@google.com"

console.log(userOne.email); // output => ayanjyoti@google.com
console.log(userTwo.email); // output => ayanjyoti@google.com