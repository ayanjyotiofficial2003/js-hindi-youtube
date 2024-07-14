const user = {
    username: "ayanjyoti",
    price: 399,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage() // output => ayanjyoti, welcome to our website
// user.username = "sam"
// user.welcomeMessage() // output => sam, welcome to our website


// console.log(this); // output => {}


// function chai(){
//     let username = "ayanjyoti"
//     // console.log(this);
//     console.log(this.username); // output => undefined (because "this" can only be used inside object )
// }

// chai()



// const chai = function (){
//     let username = "ayanjyoti"
//     // console.log(this);
//     console.log(this.username); // output => undefined (because "this" can only be used inside object )
// }

// chai() 


// This is Arrow function
// const chai = () => {
//     let username = "ayanjyoti"
//     // console.log(this); // output => {}
//     console.log(this.username); // output => undefined
// }

// chai()




// This is Arrow function or this is also called explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4)); // output => 7



// This is implicit return of Arrow function
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4)); // output => 7


// const addTwo = (num1, num2) => {username: "ayanjyoti"} // output => undefined
const addTwo = (num1, num2) => ({username: "ayanjyoti"}) // output => { username: 'ayanjyoti' }

console.log(addTwo(3, 4));













