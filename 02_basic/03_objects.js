// Objects in JS 

// Singleton :- when object is created using constructor method then sigleton object is created

// OTHERWISE, IF OBJECT IS CREATED USING OBJECT LITERALS THEN SINGLETON OBJECT IS NOT CREATED

/*
OBJECT CREATED USING CONSTRUCTOR METHOD & HERE SINGLETON IS CREATED
Object.create
*/

/*
OBJECT CREATED USING OBJECT LITERALS METHOD
const JsUsers = {}
*/


// Object Literals 

const mySym = Symbol("key1")

const JsUsers = {
    name: "Ayanjyoti",
    "Full Name": "Ayanjyoti Mondal",
    [mySym]: "mykey1",
    age: 18,
    location: "Durgapur",
    email: "ayanjyoti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUsers.email);  // output => ayanjyoti@google.com
// console.log(JsUsers["email"]); // output => ayanjyoti@google.com
// console.log(JsUsers["Full Name"]); // output => Ayanjyoti Mondal

// console.log(JsUsers[mySym]); // output => mykey1

JsUsers.email = "ayanjyoti@chatgpt.com" // email value changed 
// console.log(JsUsers);

// Object.freeze(JsUsers); // freeze will not allow to change any values 

JsUsers.age = 22 // age value will not be changed
JsUsers.email = "ayanjyoti@microsoft.com" // email value will not be changed 
// console.log(JsUsers);

JsUsers.dob = "20.03.2014"; // key [dob] was added to JsUsers
// console.log(JsUsers.dob); // output => 20.03.2014
// console.log(JsUsers); 

JsUsers.greeting = function(){
    console.log("Hello JS users");
}
JsUsers.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`);
}

console.log(JsUsers.greeting); // output => [Function (anonymous)]
console.log(JsUsers.greeting()); // output => Hello JS users 
// console.log(JsUsers);

console.log(JsUsers.greetingTwo()); // output => Hello JS users, Ayanjyoti 
console.log(JsUsers.greetingTwo); // output => [Function (anonymous)] 

