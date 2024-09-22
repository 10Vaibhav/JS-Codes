class User{

    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this.coming_email.toUpperCase()
    }

    set email(value){
        this.coming_email = value
    }

    get password(){
        return `${this.coming_password}Vaibhav`
    }

    set password(value){
        this.coming_password = value
    }
}

const vaibhav = new User("v@vaibhav.ai", "abc")
console.log(vaibhav.password);
console.log(vaibhav.email);