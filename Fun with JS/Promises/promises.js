// defining a promise is hard
// using a promise is easy

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// promises

// following is callback based approach:
// function main(){
//     console.log("hello");
// }
// setTimeout(main,3000);


function waitFor3Sec(resolve){
    setTimeout(resolve, 5000);
}

function setTimeoutPromisified(){
    return new Promise(waitFor3Sec);
}

function main(){
    console.log("Main is called");
}

setTimeoutPromisified().then(main);