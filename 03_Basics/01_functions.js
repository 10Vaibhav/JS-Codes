function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName() // only name of function means -> refference, with () it's execution.

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// };

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result

    return number1 + number2
};

const result = addTwoNumbers(10, 5);
// console.log("Result: ",result)

function loginUserMessage(username) // to set default value for username we use it as "username = sam" in bracket it set "sam" as default value and if value is given then it overwrite the value on sam.
{
    if(!username) //username === undefined
    { 
        console.log("Please enter a username.")
        return 
    }

    return `${username} just logged in.`
};

// let output = loginUserMessage("Vaibhav");

// let output = loginUserMessage(); // it's return undefined at place of username(if we not checking the value in function).

// console.log(output)



function calculateCartPrice(val1,val2, ...num1) // here, ... is called rest operator.
{
    
    return num1
}

// console.log(calculateCartPrice(2,200,400,500));

const user = {
    username: "vaibhav",
    price: 199
}

function handleObject(anyObject){

    console.log(`Username is ${ anyObject.username} and price is ${anyObject.price} `);
}

// handleObject(user);

handleObject({
    username: "sam",
    price:399
});

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){

    return getArray[1];
};

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,200,300,400]));


