// Object Literal
const User = {

    username : "vaibhav",
    loginCount : 8,
    signedIn : true,


    getUserDetails : function(){
        // console.log("got user details from database")
        // console.log(`username : ${this.username}`)
        console.log(this);
    }
}

// console.log(User.username)
// console.log(User.getUserDetails())
// console.log(this);


// ################# Need of new keyWord #####################
function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome: ${this.username}`)
    }

    return this
}

// without new keyword function overwrite values.
const userOne = new user("vaibhav", 12, true)
const userTwo = new user("ChaiAurCode", 11, false)

console.log(userOne.constructor); // constructor is reference of itself.
// console.log(userTwo);

// 1. While using the new keyword, it first creates a new empty object.
// 2. It then sets the prototype of this new object to the prototype property of the constructor function.
// 3. The constructor function is called with 'this' set to the newly created object.
// 4. If the constructor function returns an object, that object is returned by the 'new' expression. Otherwise, the newly created object is returned.


