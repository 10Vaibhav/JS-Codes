interface People {
    name: string,
    age: number,
    greet: () => string,
    greet2(): string,
}

// Here we create a object through interface.
let person1 : People = {
    name: "Vaibhav",
    age:20,
    greet: () => {
        return "hello";
    },
    greet2: function(){
        return "Vaibhav Here";
    }
}

let greeting2 = person1.greet();
console.log(greeting2);


// Here we create a object from class which implements interface.
class Person implements People {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hi ${this.name}`;
    }

    greet2: () => string = () => {
        return "Vaibhav Here !";
    }

}


const person = new Person("Visitor", 20);
console.log(person.greet());
console.log(person.greet2());





// function greet(): string{
//     return "Hi!";
// }

// const greet2: ()=>string = () =>{
//     return "Vaibhav Here !";
// }