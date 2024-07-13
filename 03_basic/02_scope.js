// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // output => 10
// console.log(b); // output => 20
// console.log(c); // output => 30


// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // output => a is not defined
// console.log(b); // output => b is not defined
// console.log(c); // output => 30 (this will create a problem)



// var c = 300;

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(c); // output => 30



let a = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("INNER a is: " , a); // output => INNER a is:  10
}


// console.log(a); // output => 300



function one(){
    const username = "ayanjyoti"

    function two(){
        const website = "youtube"

        // console.log(username);
        // console.log(website);
    }

    // console.log(website);
    two()
    
}

one()




if (true) {
    const username = "ayanjyoti"

    if (username === "ayanjyoti") {
        const website = " youtube"

        // console.log(username + website); // output => ayanjyoti youtube
    }

    // console.log(website); // output => error
}

// console.log(username); // output => error




// +++++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++

// function addOne(num){
//     return num + 1 
// }

// console.log(addOne(5)); // output => 6

// ----------------------------------------------------

// console.log(addOne(5)); // output => 6

// function addOne(num){
//     return num + 1 
// }

// ------------------------------------------------------------------------------------------------


// const addTwo = function (num){
//     return num + 2 
// }

// console.log(addTwo(5)); // output => 7

// --------------------------------------------------------


addTwo(5) // output => error

const addTwo = function (num){
    return num + 2 
}
