const name = "ayanjyoti"
const repoCount = 50 

// This syntax is outdated, so we should try to avoid this syntax
// console.log(name + " " + repoCount + " Value");

// This is the modern syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way of defining a string
const gameName = new String('ayanjyoti-mondal-coder')
// console.log(gameName); // output => [String: 'ayanjyoti']
// console.log(gameName[0]); // output => a
// console.log(gameName[3]); // output => n
// console.log(gameName.__proto__); // output => {}

// console.log(gameName.length); // output => 9
// console.log(gameName.toUpperCase()); // output => AYANJYOTI
// console.log(gameName.charAt(4)); // output => j
// console.log(gameName.indexOf('o')); // output => 6

const newString = gameName.substring(0, 4)
// console.log(newString); // output => ayan

// const anotherString = gameName.slice(-14,5) // output => anj
const anotherString = gameName.slice(-12,8) // output => jyot
// console.log(anotherString); 

const anotherStringOne = "       ayanjyoti    "
// console.log(anotherStringOne); // output =>        ayanjyoti              (with Extra Blank Space)   
// console.log(anotherStringOne.trim()); // output => ayanjyoti (No Blank Space)


const url = "https://ayanjyoti.com/ayanjyoti%20mondal"
// console.log(url.replace("%20", "-"));  // output => https://ayanjyoti.com/ayanjyoti-mondal

// console.log(url.includes('ayanjyoti')) // output => true (because ayanjyoti is present in the url)
// console.log(url.includes('sundar')) // output => false (because sundar is not present in the url)

// console.log(gameName.split("-")); // output => [ 'ayanjyoti', 'mondal', 'coder' ]

// returns unicode value of given index
// console.log(gameName.charCodeAt(15)); // output => 108
// console.log(gameName.charCodeAt(18)); // output => 111


const string3 = gameName.concat(name); 
console.log(string3); // output => ayanjyoti-mondal-coderayanjyoti
