const accountId = 14423
let accname = "Mansi"
var accpswd = "67890"
accity = "Noida"
let accstate

// prefernot to use var because of issue in block and functional scope

accname = "Moni"
accpswd = "123456"
accity = "Dehradun"

console.table([accountId, accname, accpswd, accity, accstate])