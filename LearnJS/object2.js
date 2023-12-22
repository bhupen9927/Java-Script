//Destructuring of Object

const course={
    coursename:"javascript",
    price:"999",
    courseInstructor:"bhupen"
}

const{courseInstructor: instructor}=course  //courseInstructor called as Instructor
console.log("print courseInstructor name is",instructor);

