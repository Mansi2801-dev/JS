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
