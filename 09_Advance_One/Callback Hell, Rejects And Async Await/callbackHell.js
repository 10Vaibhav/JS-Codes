function callback(){
    console.log("hi");
}

setTimeout(function (){
    console.log("hi");
    setTimeout( function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        },5000)
    },3000)
},1000);

console.log("Outside the callback hell");