// conditional statement 

// if statements

const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("executed");
// }

// if(3 != 2){
//     console.log("executed");
// }

// if(2 == "2"){
//     console.log("executed");
// }

// if(2 === 2){
//     console.log("executed");
// }

// if(2 !== "2"){
//     console.log("executed");
// }


// checking opearators 
// <, >, <=, >=, !=, ==, ===(strict equal operator) , !==(strict not equal operator) 



// const temperature = 41
// if(temperature < 50){
//     console.log("Temperature is below 50");
// }
// else{
//     console.log("Temperature is not below 50");
// }

// console.log("Executed");



// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // output => error (power is not defined)



// const balance = 1000
// This is short hand notation of if statements
// if (balance > 500) console.log("Yes, balance is >500");

// This code will run, but this code is not readable, and writting this code is not good practise
// if (balance > 500) console.log("Yes, balance is >500"), console.log("test2");

// const balance = 1500;

// if (balance < 500) {
//     console.log("Balance is less than 500");
// }
// else if (balance < 750) {
//     console.log("Balance is less than 750");
// }
// else if (balance < 900) {
//     console.log("Balance is less than 900");
// }
// else{
//     console.log("Balance is less than 1500");
// }


const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2 && 5 != 6) {
    console.log("You are allowed for shopping");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail || 2 == 2) {
    console.log("User Logged In");
}