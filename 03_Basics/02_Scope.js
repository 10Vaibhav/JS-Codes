//{} // scope if he with function.
// var c = 300

let a = 300;

if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a); // local scope access.
}

// console.log(a); // global scope access.
// console.log(b);

//global scope in node environment and in console is work differently .


function one(){
    const username  = "vaibhav"

    function two(){
        const website = "YT"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "vaibhav";

    if(username == "vaibhav"){
        const website = " YT";
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// +++++++++++++ Interesting +++++++++++++++

console.log(addone(5)); // it runs.

function addone(num){
    return num+1;
}


//addTwo(5); // it gives array.
const addTwo = function(num){
    return num+2;
}

addTwo(5);