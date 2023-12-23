//for of loop
//array specific loop

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

//Maps
//doesn't contain duplicate entries and
// maintain order

const map= new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('In',"India")   //it doesn't print

console.log(map)

// for of loop on map
for(const [key, value] of map){
    console.log(key, ':-', value)
}

//for of loop on object
// for of loop not work on the object, it is not iterable
const myobj={
    'game1': 'NFS',
    'game2':'spiderman'
}


