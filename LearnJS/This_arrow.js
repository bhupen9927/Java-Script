const user={
    username: "Bhupendra",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},Welcome to my spaceship`)
        console.log("in a functionObject this refer=>",this)
    }
}

user.welcomeMessage();
user.username="Bhuppi";
user.welcomeMessage();

console.log("In Node Environment outside of function this refer a empty object ",this)

//In browser global object is window
//in browser this referes to the window object


function one(){
    console.log(this);
}
one();

function two(){
    let user="bhupen"
    console.log(this.user);   //undefined   , not work this in the function
}
two()

//  Arrow Function

const add= (num1,num2) => {
    return num1+num2;
}
console.log(add(3,4))

//arrow function is a implicit return , dont write to written in the function

const add1=(n1,n2) => (n1+n2)

console.log("arrow function",add1(1,10))

//when you return an object in arrow function

const a=()=> ({user:"bhupen"})

console.log(a());