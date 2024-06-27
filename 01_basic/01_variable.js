const accountId = 144553 
let accountEmail = "ayanjyoti@google.com"  
var accountPassword = "12345678"
accountCity = "Durgapur"
let accountState;

/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/

// accountId = 2 // constant cannot be changed

accountEmail = "ayan@yahoo.com"
accountPassword = "5632145"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);