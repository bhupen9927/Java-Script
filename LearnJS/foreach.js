const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (i){
    console.log(i)
})

//using arrow function

coding.forEach( (i)=>{
    console.log("using arrow function",i)
})

function print(i){
    console.log(i);
}

coding.forEach(print)

coding.forEach( (i,index,arr)=>{
    console.log(i,index,arr);
})

const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"JS"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

mycoding.forEach((i)=>{
    console.log(i.languagename)
})