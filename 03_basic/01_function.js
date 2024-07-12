// console.log("A");
// console.log("Y");
// console.log("A");
// console.log("N");
// console.log("J");
// console.log("Y");
// console.log("O");
// console.log("T");
// console.log("I");

function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("Y");
    console.log("O");
    console.log("T");
    console.log("I");
}

// sayMyName() // This is function execution syntax
// sayMyName // This is function reference syntax


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // output => 7
// addTwoNumbers(3, "4") // output => 34 ( This can be problematic )
// addTwoNumbers(3, "a") // output => 3a ( This can be problematic )



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); // output => Result:  undefined


// function addTwoNumbers(number1, number2){
//     let ans = number1 + number2
//     return ans
// }

// const result = addTwoNumbers(3, 5)
// console.log(result); // output => 8

function addTwoNumbers(number1, number2){
    return (number1 + number2)
}

const result = addTwoNumbers(3, 5)
// console.log(result); // output => 8



// function logginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }

//     return (`${username} just logged in`)
// }

// console.log(logginUserMessage("Ayanjyoti")); // output => Ayanjyoti just logged in
// console.log(logginUserMessage("")); // output => just logged in
// console.log(logginUserMessage()); // output => undefined just logged in




function logginUserMessage(username = "sam"){
    return (`${username} just logged in`)
}

// console.log(logginUserMessage("Ayanjyoti")); // output => Ayanjyoti just logged in
// console.log(logginUserMessage("")); // output => just logged in
// console.log(logginUserMessage()); // output => sam just logged in


// This is rest operator
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 5000, 2000)); // output => [ 200, 400, 5000, 2000 ]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 5000, 2000)); // output => [ 5000, 2000 ]



// const user = {
//     username: "Ayanjyoti",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
// }

// handleObject(user) // output => username is Ayanjyoti and the price is 199



function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}

handleObject({
    username: "Sam",
    price: 399
})   // output => username is Sam and the price is 399



// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray)); // output => 400



function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 5000, 1000])); // output => 400