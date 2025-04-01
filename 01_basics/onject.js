const mySym=Symbol("key1")

const JsUser={
    name:"Sakshi",
    "full name":"SAKSHI JAGDHANE",
    [mySym]:"mykey1",
    location:"pune",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="abc123@gmail.com";
// Object.freeze(JsUser)
JsUser.email="abc456@gmail.com";
// console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo= function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());

const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

const user=[
    {
        id1:1,
        name:"Sakshi"
    }
]

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courserInstructor:ins}=course
console.log(ins);

// const navbar=({company})=>{

// }
// navbar(company="hitesh")

{
    "name":"hitesh",
    "coursename":"js in hindi",
    "price":"free"
}