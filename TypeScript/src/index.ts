let x: number= 1;

// x = "Vaibhav"

function greet(name: string){
    console.log(`Hello ${name}`);
}
function sum(a:number, b: number): number {
    return a+b;
}

function isLegal(age: number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

// taking a function as an input of another function
function delayedCall(fn: (a:string)=> void){
    setTimeout(fn,1000);
}
 
delayedCall(function(){
    console.log("Hello");
})

delayedCall(()=>greet("Vaibhav"));

console.log(isLegal(17));

let ans = sum(2,3);
console.log(`Sum:  ${ans}`);

greet("Mahajan")

console.log(x);

let greet2 = () => {
    console.log("Hi there");
}