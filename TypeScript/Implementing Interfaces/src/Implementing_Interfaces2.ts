interface People {
    name: string,
    age: number,
    greet: () => string,
    greet2(): string,
}

// while implementing interfaces you can add extra things like phone number but declared things in interface must be present.
class Manager implements People{
    public phone_number: string;

    constructor(public name: string,public age: number){
        this.name = name;
        this.age = age;
        this.phone_number = "1234454545";
    }

    greet(){
        return `Hello! ${this.name} sir`
    }

    greet2(){
        return `are you ${this.age} year old?, I think you look more younger!`
    }
}

const newManager = new Manager("Sharma", 36);
console.log(newManager.greet());
console.log(newManager.greet2());
