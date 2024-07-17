// for of loop

// const arr = [1, 2, 3, 4, 5, 200, 505]

// for (const num of arr) {
//     console.log(num);   // output => 1  2  3  4  5  200  505    
// }


// const greetings  = "Hello world!"

// for (const greet of greetings) {
//     console.log(`The value is : ${greet}`);    
// }

// const greetings  = "Hello world!"

// for (const greet of greetings) {
//     if (greet == " ") {
//         continue        
//     }
//     console.log(`The value is : ${greet}`);    
// }



// Map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") // this, map will not hold because map contain only unique elements
 
// console.log(map);

// for (const key of map) {
//     console.log(key);    // output => keys and values of map, both are printed in array format
// }


// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }



const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value); // output => error (myObject is not iterable)
    
}