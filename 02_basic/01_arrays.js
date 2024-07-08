// Arrays 

const myArr = [0, 1, 2, 3, 4]
const myArr1 = [0, 1, 2, 3, 4, 5, true, "Ayan"]
const Heros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[1]); // output => 1

// console.log(myArr2); // output => [ 1, 2, 3, 4, 5 ]


// Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr); // output => [0, 1, 2, 3, 4, 6, 7]

// myArr.pop() // It deletes 1 elements from the last
// console.log(myArr); // output => [0, 1, 2, 3, 4, 6]


// myArr.unshift(0) // It will add 0 to the beginning of the array & output => [ 0, 0, 1, 2, 3, 4 ]
// myArr.unshift(9) // It will add 9 to the beginning of the array & output => [ 9, 0, 0, 1, 2, 3, 4 ]

// console.log(myArr);


// myArr.shift() // It deletes 1 elements from the first of the array & output => [ 0, 0, 1, 2, 3, 4 ]
// console.log(myArr);

// console.log(myArr);
// console.log(myArr.includes(9)); // output => false (because 9 is not present in the array)
// console.log(myArr.includes(3)); // output => true (because 3 is present in the array)

// console.log(myArr);
// console.log(myArr.indexOf(9)); // output = -1 (because 9 is not present in the array)
// console.log(myArr.indexOf(3)); // output = 3 (because index of 3 is 3)

// const newArr = myArr.join() // join function converts array data type into string data types
// console.log(myArr); // output => [ 0, 1, 2, 3, 4 ]
// console.log(newArr); // output => 0,1,2,3,4

// console.log(typeof newArr); // output => string 


// slice, splice

// slice operations

console.log("A", myArr); // output => A [ 0, 1, 2, 3, 4 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // output => [1, 2]

console.log("B", myArr); // output => B [ 0, 1, 2, 3, 4 ]

// splice opearation

console.log("C", myArr); // output => C [ 0, 1, 2, 3, 4 ]

const myn2 = myArr.splice(1, 3)

console.log(myn2); // output => [ 1, 2, 3 ]

console.log("D", myArr); // output => D [ 0, 4 ]


