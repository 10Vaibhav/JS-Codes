// Function based get and set

function User(email,password){
    this.coming_email = email
    this.coming_password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this.coming_email.toUpperCase()
        },
        set:function(value){
            this.email = value
        }
    })

    Object.defineProperty(this,'password',{
        get:function(){
            return this.coming_password.toUpperCase()
        },
        set:function(value){
            this.coming_password = value
        }
    })
}

const chai = new User("chai@chai.com","chai")

console.log(chai.email);