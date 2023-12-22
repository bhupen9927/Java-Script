//for loop

for(let i=0;i<=10;i++){
    console.log(i)
}

for(let i=0;i<10;i++){
    console.log(`Outer loop value: ${i}`)
    for(let j=0;j<10;j++){
        console.log(`Inner Loop value: ${j} and inner loop value: ${i}`)
    }
}

let arr=["flash","bat","superman"]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
