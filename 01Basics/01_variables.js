const accountId = 144553
let accountEmail = "shakeel@gmail.com"
var accountPassword = "12345"
accountCity = "Ahamedabad"
let accountState;

// accountId = 2 //Not allowed
accountEmail = "msty@gmail.com"
accountPassword = "9446"
accountCity = "Bengaluru"

console.log("accountEmail:",accountEmail);
console.log("accountPassword:",accountPassword);
console.log("accountCity:",accountCity);
console.log("accountId:",accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);