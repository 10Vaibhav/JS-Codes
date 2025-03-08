// Interfaces and types

// Interfaces are exist in TypeScript not in JavaScript.

function greet6(name: string): string {
    return "hello " + name;
}

function isEven(num: number): boolean {
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}

const greeting = greet6("vaibhav")

console.log(greeting);