// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB Connected`);
// }
// chai() // output => DB Connected


// This is IIFE
// This is also called named IIFE
(function chai(){
    console.log(`DB Connected`);
})(); // output => DB Connected 


// This is also called named IIFE
(function chaiBreak(){
    console.log(`Have a Tea Break`);
})(); // output => Have a Tea Break

// This is also called unnamed IIFE
( () => {
    console.log(`Lets code it`);
} )(); // output => Lets code it

// This is also called unnamed IIFE
( (name) => {
    console.log(`Hello my name is : ${name}`);
} )("AYANJYOTI") // output => Hello my name is : AYANJYOTI

