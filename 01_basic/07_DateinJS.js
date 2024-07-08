// Dates 

let myDate = new Date()
// console.log(myDate); // output => 2024-07-08T10:43:26.956Z (Not so readable)
// console.log(myDate.toString()); // output => Mon Jul 08 2024 10:46:16 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // output => Mon Jul 08 2024
// console.log(myDate.toLocaleString()); // ouput => 7/8/2024, 10:55:22 AM
// console.log(typeof myDate); // output => object


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate); // output => 2023-01-23T00:00:00.000Z (Not so readable)
// console.log(myCreatedDate.toDateString()); // output => Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 30)
// console.log(myCreatedDate.toLocaleString()); // output => 1/23/2023, 5:30:00 AM

// let myCreatedDate = new Date("2023-01-14") // format => "YYYY-MM-DD"
// console.log(myCreatedDate.toLocaleString()); // output => 1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023") // format => "MM-DD-YYYY"
// console.log(myCreatedDate.toLocaleString()); // output => 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // output => 1720438402639 (values in mili second)

// console.log(myCreatedDate.getTime()); // output => 1673654400000 (values in mili second)

// console.log(Math.floor(Date.now()/1000)); // output => 1720438915 (values in second)

let newDate = new Date()
console.log(newDate); // output => 2024-07-08T11:47:08.693Z
console.log(newDate.getDay()); // output => 1 (monday = 1, tues = 2, wed = 3 ...., and today is monday.)
console.log(newDate.getMonth() + 1); // output => 7


newDate.toLocaleString('default', {
    weekday: "long",
})