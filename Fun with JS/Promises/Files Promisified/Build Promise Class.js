// this shows "How Promise work under the hood?" :

class BuildPromiseClass{

    constructor(fn){
        this.fn = fn;
        this.fn( () => {
            this.resolve();
        })
    }

    then(callback){
        this.resolve = callback;
    }
}

function readTheFile(resolve){
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();
    },3000)
}

function setTimeoutPromisified(){
    return new BuildPromiseClass(readTheFile)
}

let p = setTimeoutPromisified();

function callback(){
    console.log("callback has been called");
}

p.then(callback);


/*

A Promise expects a function that performs an actual asynchronous task.

Once the async task is complete, call the argument of that function, passing in the data obtained form the async task.

That data will then be passed to the function you define in ".then".

*/