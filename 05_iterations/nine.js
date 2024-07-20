const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return (accumulator + currentValue)
// } , 0)

// console.log(myTotal);

// const initialValue = 5

// const myTotal = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return (accumulator + currentValue)
// } , initialValue)

// console.log(myTotal);


// const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data scientist course",
        price: 12999
    },
]

const totalValue = shoppingCart.reduce( (accumulator, item) => accumulator + item.price , 0 )

console.log(totalValue);