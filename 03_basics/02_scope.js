function addone(val){
    return val+1
}
console.log(addone(1));//this can be wriiten either after or before the declaration of function

const addtwo = function addtwo(value){
    return value+2
}
console.log(addtwo(2));//as this function is an expression so it can be 
// accessed only after the declaration, this is hoisting

