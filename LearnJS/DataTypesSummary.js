// Primitive

// 7 Types: String, Number, Boolean, null, Undefined, Symbol,BigInt

let userEmail; ///it is undefined

const id=Symbol('123');
const aid=Symbol('123');
console.log(id === aid); //return false beacuse of symbol 

const bigNumber=21456155115121215n  //using n is it automacially make it bigINT


// Reference Type(Non-Primitive)

//Array, Objects, Functions

const heros=["sh","nag","doga"];
 let obj={
    name:"bhuppi",
    age: 24,
 }

 const myfun=function(){
    console.log("bhuppi function")
 }
 myfun()

 console.log(typeof bigNumber)
 console.log(typeof heros)
 console.log(typeof obj)
 console.log(typeof myfun)


/*
null=>object;
Boolean=>Boolean;
function=>object Function;
*/
