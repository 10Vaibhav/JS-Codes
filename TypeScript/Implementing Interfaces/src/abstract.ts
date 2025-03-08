abstract class User{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract greet():string;

    // In abstract class we can have default implemented method, but in interface you do not do that.
    hello (){
        console.log("hi there");
    }
}

class Employee extends User {
    constructor(name: string){
        super(name);
    }

    greet(){
        return "hi" + this.name;
    }
}