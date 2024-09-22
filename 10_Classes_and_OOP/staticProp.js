class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // static is use to protect the access of method to object that instantiated by this class.
    static createId(){
        return `123`
    }

}

const vaibhav = new User("vaibhav")
// console.log(vaibhav.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher("phone", "i@phone.com")
phone.logMe();
// console.log(phone.createId())