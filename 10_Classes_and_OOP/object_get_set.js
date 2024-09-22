// Object based get and set
const User = {

    coming_email : "h@hc.com",
    coming_password: "abc",

    get email(){
        return this.coming_email.toUpperCase()
    },

    set email(value){
        this.coming_email = value
    }
}

// constructor function : new
// Factory function : Object.create()

const tea = Object.create(User)
console.log(tea.email);