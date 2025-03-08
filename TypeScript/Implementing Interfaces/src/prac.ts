// Interfaces vs Types
// Create two types called User and Admin,
// Create a function that takes either a user or admin as an input, and returns a string saying "Welcome, [name]".

interface Admin{
    name: string;
    permissions: string;
}

interface User6 {
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin){
    console.log(user.name);
}

interface User7{
    // inside the interface you can use it, but at top level you can not do this with interface (ex. oneInterface | anotherInterface => not Possible)
    age: number | string;
}