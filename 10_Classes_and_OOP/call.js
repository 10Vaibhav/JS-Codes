function SetUsername(username){
    //complex DB calls

    this.username = username;
    console.log("called");
}

function createUser(username,email,password){

    // SetUsername(username) // by doing this we are not calling function we gave only reference of that function
    SetUsername.call(this,username) // to hold reference of that execution context we use .call method and to get values or functionality of called function we use this to refer its current context.
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);

