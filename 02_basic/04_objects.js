//object declared
// const tinderUser = {} // this is done by object literals method
// console.log(tinderUser); // output => {} (empty object created)
    
//Another way of object declared
// const tinderUser = new Object() // this is done by constructor method, so this is singleton object
// console.log(tinderUser); // output => {} (empty object created)

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayanjyoti",
            lastname: "Mondal"
        }
    }
}

// console.log(regularUser.email); // output => someone@gmail.com

// console.log(regularUser.fullname); // output => { userfullname: { firstname: 'Ayanjyoti', lastname: 'Mondal' } }

// console.log(regularUser.fullname.userfullname); // output => { firstname: 'Ayanjyoti', lastname: 'Mondal' }

console.log(regularUser.fullname.userfullname.firstname); // output => Ayanjyoti

