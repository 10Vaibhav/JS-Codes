//{} // scope if he with function.
// var c = 300

let a = 300;

if (true){
    let a = 10
    const b = 20
    console.log("Inner: ", a); // local scope access.
}

console.log(a); // global scope access.
// console.log(b);

//global scope in node environment and in console is work differently .
