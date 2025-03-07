let firstName: string = "vaibhav"
let age: number = 20


// let user2: {
//     firstName: string,
//     age: number
// }={
//     firstName: "vaibhav",
//     age: 20
// }



// function greet5(user2: {
//     firstName: string,
//     lastName: string,
//     age: number
// }){
//     console.log("learning Interface for applying type safety on objects")
// }


interface UserType {
    firstName: string,
    lastName: string,
    age: number
}

function greet5(user:UserType){
    console.log("learning Interface for applying type safety on objects", user.firstName, user.age);
}

let user2: UserType={
    firstName: "vaibhav",
    lastName: "Mahajan",
    age:20
}