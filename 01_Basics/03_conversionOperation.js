// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "vaibhav"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/* NaN: Not an Number */

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "vaibhav" 

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)


// 1 => true; 0 => false
// "" => false
// "vaibhav" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ******** Operations *********

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " vaibhav"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

//  to understand below script refer ecma script guidelines.
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3); // dirty code 

// console.log(true);
// console.log(true+); // gives error

// console.log(+true);
// console.log(+"");

let num1,num2,num3

num1 = num2 = num3 = 2 + 2 // avoid this type of writting also , bcz its affect readability.

let gameCounter = 100
// gameCounter++; // postfix
++gameCounter; // prefix
console.log(gameCounter);