// resolve is directly connected to ".then" and reject is directly connected to ".catch"

function random(resolve) // resolve is also a function
{
    setTimeout(resolve,3000);
    // resolve();
}

let p = new Promise(random); // supposed to return u something eventually.



// using the eventual value returned by the promise
function callback(){
    console.log("Promise Succeded");
}

p.then(callback);

