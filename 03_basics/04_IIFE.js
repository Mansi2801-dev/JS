//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log("This is chai");
    })();
//for two consecutive function use ;
((name)=> {
    console.log(`Hi, ${name}`);
    
})("Ava")

/* Falsy values:
0,-0, bigint 0n, False, null, undefined, NaN, ""

Truthy values:
"0", "False", " ", [], {}, function(){}
*/

val1 = (1+2) ?? undefined
console.log(val1);
