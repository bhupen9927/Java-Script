console.log("2">1);  //true
console.log("02">1)   //true

console.log(null>0);  //false
console.log(null==0);  //false
console.log(null>=0);  //true

//The reason is that an equality check == and comparison ><>= <= work differently.
//Comparisons Convert null to a number , treating it is 0.
//Thats why (3) null>=0 is true and (1) null>0 is false

//=== strict check
// check content and data types also

console.log("3"===3)