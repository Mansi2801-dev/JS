//Global object in browser is windows
const user = {
    user:"Josh",
    id:1234,

    welcomeMsg : function(){
        console.log(`Hi ${this.user}. Your id is ${this.id}`);
        console.log(this);
        
        
    }

}
//user.welcomeMsg()
user.user = "Jules"
user.welcomeMsg()
console.log(this)
//this points to the current value, it works inside object not function

//() => {}[arrow], to return an object it should be wrapped around ()