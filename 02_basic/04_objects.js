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

// console.log(regularUser.fullname.userfullname.firstname); // output => Ayanjyoti


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2} // output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2) // output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2, obj4) // output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2, ...obj4} // output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj3);

