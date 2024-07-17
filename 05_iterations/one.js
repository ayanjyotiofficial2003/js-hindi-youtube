// for loops 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// console.log(element); // output => error


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is the best number");    
//     }
//     console.log(element);
// }

// console.log(i); // output => error (i is not defined)


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value : ${i} `);

//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value : ${j} and outer loop : ${i}`);

//         console.log(` ${i} * ${j} = ${i*j}`);

//     }
        
// }



// let myArray = ["flash", "superman", "batsman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Number 5 is detected");
//         break;
//     }
//     console.log(`The value is : ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Number 5 is detected");
        continue
    }
    console.log(`The value is : ${index}`);
    
}