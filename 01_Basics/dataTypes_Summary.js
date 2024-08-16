// primitive type.

//7 types: String, Number Boolean, null,    undefined, Symbol,BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const OutSideTemp = null
let userEmail; // udefined.

const id = Symbol('123')
const anotherId = Symbol('123')

// due to symbol the value of id and anotherId is not same.
console.log(id === anotherId);

const bigNumber = 3423453253253243434324n


// Reference Type (Non-primitive type).
// Array, Objects, Functions.

// Array: 
const heros = ["Shaktiman", "naagraj","doga"];

// Objects:
let myObj = {
    name: "vaibhav",
    age : 20,
}

// Function:

const myFunction = function(){
    console.log("Hello world");
};

// how to find the DataType of any variable?
console.log(typeof bigNumber)
console.log(typeof OutSideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)// it's gives function object.
console.log(id)// it's give symbol(123)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-primitive).

// stack - it always gives copy of variable.
// Heap - it always gives refference.

let myYoutubeName = "vaibhav01"


let anotherName = myYoutubeName
anotherName = "Mahajan01"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "userUPI@id"
}


let userTwo = userOne

userTwo.email = "vaibhav@google.com"

console.log(userOne.email);
console.log(userTwo.email);