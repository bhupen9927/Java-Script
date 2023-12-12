const myArr=[1,2,3,4,5]
const myHeros=["shaktiman","thor"]
const myArr2= new Array(1,2,3,4)

console.log(myArr[0])
/*Js Arrays are resizable,and can contain a mix or different data types
javascript array copy operations create shallow CompressionStream,

Shallow copy- Shallow copy of an object is a copy whose properties share
the same references (point to the same underlaying values)
means whatever you change in the array these changes are reflect int the
original array
*/

//Array Methods

myArr.push(6)
myArr.push(7)
//myArr.pop()

myArr.unshift(0)  //insert in the beggining of the array
//myArr.shift()   //remove the first element in the array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3))

const newArr= myArr.join() //converts array in a string
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//Slice or Splice method

console.log("A-Original Array", myArr);

const myn1=myArr.slice(1,3)
console.log("slice array",myn1);
console.log("B-after slice original array",myArr);

const myn2=myArr.splice(1,3);
console.log("splice array",myn2);
console.log("C-After Splice original array",myArr);
