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

console.log(this); // it returns empty object. 

// global object in browser is window object.