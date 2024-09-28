const fs = require("fs");

console.log("---------top of the file ----------");

function readTheFile(resolve){
    console.log("readTheFile called");
    setTimeout(function (){
        console.log("callback based setTimeout completed");
        resolve();
    },3000);
}


function setTimeoutPromisified(fileName){
    console.log("setTimeoutPromisified called");
    //read the file and return its value
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback(){
    console.log("timer is done");
}

p.then(callback)

console.log("-------end fo the file----------");



// OutPut: Flow of Data ->

/*
---------top of the file ----------
setTimeoutPromisified called
readTheFile called
-------end fo the file----------
callback based setTimeout completed
timer is done
*/