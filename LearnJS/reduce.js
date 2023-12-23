const nums=[1,2,3]

const total=nums.reduce(function (acc,curr){
    console.log(`acc:${acc} and current:${curr}`)
    return acc+curr
},0)

console.log("total is ",total)

//using arrow function

const mytotal=nums.reduce((acc,curr) => acc+curr,0)
console.log(mytotal)