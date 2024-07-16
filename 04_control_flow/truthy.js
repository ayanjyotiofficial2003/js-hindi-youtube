// const userEmail = "ayan@gmail.com" // output => Got user email
// const userEmail = "" // output => Don't have user email
// const userEmail = ["ayan"] // output => Got user email
const userEmail = [] // output => Got user email

// if (userEmail) {
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }


// NOTE :-

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// true, "0", "false", " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    // console.log("Object is empty");
}



// Nullish Coalescing Operator (??) :- null undefined

let val1;
// val1 = 5 ?? 10 // output => 5
// val1 = null ?? 10 // output => 10
// val1 = 15 ?? null // output => 15
// val1 = null ?? null // output => null
// val1 = undefined ?? 15 // output => 15
// val1 = null ?? 10 ?? 20 // output => 10

// console.log(val1);


// Terniary Operator 

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("Price is greater than 80") : console.log("Price is not greater than 80"); 
// // output => Price is greater than 80

const iceTeaPrice = 50
iceTeaPrice >= 80 ? console.log("Price is greater than 80") : console.log("Price is not greater than 80"); 
// output => Price is not greater than 80