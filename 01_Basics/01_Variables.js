const accountId = 3434
let accountEmail = "vaibhav@gmail.com"
var accountPassword = "563342"
accountCity = "Nagpur"

//accountId = 2 // not allowed 

accountEmail = "vm@vm.com"
accountPassword = "1234"
accountCity = "Katol"
let accountState ;


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])