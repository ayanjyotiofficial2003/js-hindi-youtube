const marvelHeros = ["thor", "Ironman", "Spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// This is a push operation & this is not a good practice
// marvelHeros.push(dcHeros) // output => [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvelHeros); 

// console.log(marvelHeros[3]); // output => [ 'superman', 'flash', 'batman' ]

// console.log(marvelHeros[3][1]); // output => flash


// This is concat operation

// const allHeros = marvelHeros.concat(dcHeros) // output => [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// console.log(allHeros);


// This is spread operation 

const allNewHeros = [...marvelHeros, ...dcHeros] // output => [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// console.log(allNewHeros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) // output => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(realAnotherArray);


console.log(Array.isArray("Ayan")); // output => false (because "Ayan" is a string)

console.log(Array.from("Ayan")); // output => [ 'A', 'y', 'a', 'n' ] (converted to array)

// This is an interesting case
console.log(Array.from({name: "Ayan"})); // output => [] (because array can't be formed)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // output => [ 100, 200, 300 ]






