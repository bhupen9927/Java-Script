function name(){
    console.log("B")
    console.log("H")
    console.log("U")
    console.log("P")
    console.log("P")
    console.log("I")
}
name() //here name is reference

function add(n1,n2){  //here n1 and n2 is function parameters
    console.log("addition of two number is ",n1+n2);
}
add(null,4);  //here null and 4 is function arguments

function addTwo(n3,n4){
    let result=n3+n4;
    return result;
}
const result=addTwo(3,5)
console.log("result: ",result)


function loginuserMessage(username){
    if(!username){
        console.log("please enter a user name");
    }
    else{
        return `${username} just logged in`
    }
}
//console.log(loginuserMessage("Bhupendra SIngh"))
console.log(loginuserMessage());
//if doesen't provide any argument then print undefined