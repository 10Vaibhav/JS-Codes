interface User11 {
    name: string;
}

interface Admin extends User11 {
    age: number // one interface can extend another interface.
}

type A = {
    name: string;
}

type B = {
    age: number
}

interface X extends A,B {} // you also extend multiple interfaces or types.

const user12:X = {
    name: "Vaibhav",
    age:20,
}