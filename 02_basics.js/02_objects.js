//object literals
const mysym = Symbol("key1")
const jsuser = {
    name : 'Christian',
    "full name" : "Christian Harper",
    [mysym]: "key1",
    age : 32,
    email : 'harperchristian32@user.com',
    location : 'Las Vegas'
}
console.log(jsuser.name)//using dot operator, dont need to define the datatype
console.log(jsuser['email'])//need to define datatype
console.log(jsuser['full name'])
console.log(jsuser[mysym])
console.log(typeof mysym)
//object.freeze() does not allow any further changes