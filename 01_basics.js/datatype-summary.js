// primitive
// 7 types: String, number, boolean, null, undefined, symbol, bigint


// Reference(non primitive): arrays, objects, functions
// stack(primitive)    heap(non primitive)

// in stack there is copy of the input for eg:
let name1 = "mansi"
let name2 = name1
name2 = "anil"
console.log(name2)
console.log(name1)

//in heap there is no copy original input is modified
let user1 = {
    email: "user1@gmail.com",
    upi: 12345
}
let user2 = user1
user2.email = "user2@gmail.com"
console.log(user1.email)
console.log(user2.email)