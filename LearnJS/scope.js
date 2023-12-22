let a=100;       //block scope
const b=20;     // block scope
//var c=300;       //global scope

//{}=> it is a scope

if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log("block scope",a)
}

console.log("ouside of block",a);
//console.log(b);
console.log(c);