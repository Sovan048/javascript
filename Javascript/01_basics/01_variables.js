const accountId = 144553
let accountEmail = "sovanpayar019@gmail.com"
var accountPassword = "12345"
accountCity = "Midnapore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sovan@payra.com"
accountPassword = "21212121"
accountCity = "Egra"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);