"use strict";
let x = 1;
// x = "Vaibhav"
function greet(name) {
    console.log(`Hello ${name}`);
}
function sum(a, b) {
    return a + b;
}
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// taking a function as an input of another function
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("Hello");
});
delayedCall(() => greet("Vaibhav"));
console.log(isLegal(17));
let ans = sum(2, 3);
console.log(`Sum:  ${ans}`);
greet("Mahajan");
console.log(x);
