// Immediately Invoked Function Expression

(function chai() // named IIFE
{
     console.log(`DB CONNECTED`);
})();

// () () , definiton and execution.

// global scope ke pollution se problem hota hai kai bar tho vo pollution like variable and declaration ko hatane ke liye hamne IIFE ka use kiya.

// unnamed IIFE.
( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Vaibhav"); // semicolon is neccessary for IIFE to end the code.



