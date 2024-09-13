// singleton 

Object.create // constructor method through creation of objects, and inside this only singleton form .

// object literals 

const mySym = Symbol("key1");

const JsUser = {
    name: "vaibhav",
    "full name": "vaibhav mahajan",
    [mySym]: "mykey1",
    age: 20 , 
    location : "Nagpur",
    email: "vaibhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
};


// console.log(JsUser.name);
// console.log(JsUser["name"]);

// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "mahajan@gmail.com"

// Object.freeze(JsUser); //by  this you cannot change the object.

JsUser.email = "mahajan@yahoo.com" // this not give error after freeze also.

// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
};

JsUser.greeting2 = function(){
    console.log(`Hello Js users, ${this.name}`);
};

console.log(JsUser.greeting2());

