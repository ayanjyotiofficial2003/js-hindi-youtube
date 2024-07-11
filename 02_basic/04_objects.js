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
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "ayan@gmail.com"
    },
    {
        id: 1,
        email: "ayan2@gmail.com"
    },
    {
        id: 1,
        email: "ayan21@gmail.com"
    },
]

// console.log(user[2].email); // output => ayan21@gmail.com

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output => [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // output => [ '123abc', 'sammy', false ]

// console.log(Object.entries(tinderUser)); // output => [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // output => true (because "isLoggedIn" key is present in tinderUser object )

// console.log(tinderUser.hasOwnProperty("isLogged")); // output => false (because "isLogged" key is not present in tinderUser object )



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
    courseStudent: "Ayanjyoti"
}

// console.log(course.courseName); // output => js in hindi

// const {courseStudent} = course
// console.log(courseStudent); // output => Ayanjyoti

// This is called object destructure.
// const {courseStudent: student} = course
// console.log(student); // output => Ayanjyoti


// This is Json format (Means in this format we will get API)
// {
//     "name": "Ayanjyoti Mondal",
//     "courseName": "js in hindi",
//     "price": "999"
// }

// other format of getting API
// [
//     {},
//     {},
//     {}
// ]