/*In this the result is undefined because the function does not 
return anything, just print it
*/
function add(number1, number2){//parameters
    console.log(number1+number2)
}
//add(3,4)//arguments
let result = add(3,4)
console.log("Result: ", result)

/*Now the result has a value because the function returns something.
Also, any statement after return will not be executed in the function
*/
function add1(number1, number2){//parameters
    let result1 = number1+number2
    return result1
}
const result1 = add1(5,4)
console.log("Result: ", result1)

function noOfItems(...num1){//... is rest operator here where we can pass multiple arguments
    return num1
}
console.log(noOfItems(1,2,3,4))

function noOfItems1(val1, val2, ...num1){ 
    return num1
}
console.log(noOfItems1(1,2,3,4))

const user = {
    username:"Rhys",
    price:"1000"
}
function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObjects(user)
handleObjects({
    username:"Alex",
    price:100
})

const myarray = [1,2,3,4,5]
function returnvalue(getarray){
    return getarray[1]
}
console.log(returnvalue(myarray))
console.log(returnvalue([10,100,1000,10000]))