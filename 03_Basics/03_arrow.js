const user = {
    username: "Vaibhav",
    price: 999,

    // this-> it's refers to the current context.
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website.`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // it returns empty object. 

// global object in browser is window object.

// function chai(){
//     let username = "vaibhav"
//     console.log(this.username); // it gives undefined bcz this use in object.
// }

// chai()

//arrow funcitons: 

// const chai = () =>{
//     let username = "vaibhav"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"vaibhav"})

console.log(addTwo(3,4));
