const coding=["js","ruby","java","python","cpp"]

//for each loop doesn't return any value

const values=coding.forEach((i)=>{
    console.log(i)
})
console.log(values)

const mynums=[1,2,3,4,5,6,7,8,9,10]
//filter

// let newnums=mynums.filter((num)=> num>4)

//using for each loop
const newnums=[]
mynums.forEach((i)=>{
    if(i>4){
        newnums.push(i)
    }
})
console.log(newnums)


const no=[1,2,3,4,5,6,7,8,9,10]
// const newnum=no.map((num)=> num+10)

//chaining
const newnum=no.map((num)=> num+10)
             .map((num)=> num*10)
            .filter((num) => num>=140)

console.log(newnum)



