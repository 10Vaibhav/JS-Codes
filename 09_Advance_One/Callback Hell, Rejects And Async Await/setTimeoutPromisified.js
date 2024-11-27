function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

// function callback(){
//     console.log("5 second has passed")
// }



// Promise chaining

setTimeoutPromisified(1000).then(function (){
    console.log("hi");
    return setTimeoutPromisified(3000)
})
.then(function (){
        console.log("hello");
        return setTimeoutPromisified(5000)
})
.then(function (){
            console.log("hello there");
});

console.log("outside of the hell");

// let str1 = "asd";
// const sortString = str1.split("").sort().join("")
// // asd => ["a","s","d"] => ["a", "d", "s"] => "asd"
// console.log(sortString);