// Record let's you give a cleaner type to object

type User4 = {
    id: string;
    username: string;
}

// defining type for users object.
// ugly syntax:

// type Users = {
//     [key: string]: User4;
// }

// const users: Users = {
//     "ras@qd1": {
//         id: "sff",
//         username: "vaibhav"
//     },
//     "asd@jkl":{
//         id: "rr",
//         username: "Vaibhav"
//     }
// }

// Record, it's a typeScript concept.

// cleaner syntax by using Records.

type Users = Record<string, User4>;

const users: Users = {
    "abc123": {id: "123", username: "Vaibhav"},
    "xyz789": {id: "79", username: "Mahajan"},
}