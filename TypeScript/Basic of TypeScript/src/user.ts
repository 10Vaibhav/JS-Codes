
function greet(user:{
    name: string,
    age: number,
}){
    console.log("hello " + user.name);
}

let user = {
    name: "vaibhav",
    age: 21
}

// greet({
//     name:"vaibhav",
//     age:20
// })

greet(user);