// for in loop

const myObject = {
    js: 'javascripts',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(key); // output => js,  cpp,  rb,  swift 
// }


// for (const key in myObject) {
//    console.log(myObject[key]); // output => javascripts,  c++,  ruby,   swift by apple
// }


// for (const key in myObject) {
//    console.log(`${key} :- ${myObject[key]}`);
// }


const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key); // output => 0,   1,   2,   3,   4
// }


// for (const key in programming) {
//     console.log(programming[key]); // output => js,   rb,   py,   java,   cpp
// }


const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key); // output => no result (Because Not iterable)
}