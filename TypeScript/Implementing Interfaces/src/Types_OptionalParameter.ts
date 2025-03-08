interface User1 {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pinCode?: number;  // Optional Parameter
    }

}

interface User2 {
    name: string;
    age: number;
}

type User4 = User1 | User2 // By using type we can take union of interface.


let student1: User4 = {
    name: "Vaibhav",
    age: 21,
    address: {
        city: "Nagpur",
        country: "India",
        pinCode: 440011 // This is Optional
    }
}

let student2: User4 = {
    name: "Vaibhav",
    age: 22
}