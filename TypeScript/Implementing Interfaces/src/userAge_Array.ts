interface User9 {
    firstName: string;
    lastName: string;
    age: number;
}

const allUsers: User9[] = [
    { firstName: "John", lastName: "Doe", age: 17 },
    { firstName: "Jane", lastName: "Smith", age: 21 },
    { firstName: "Bob", lastName: "Johnson", age: 30 }
];

function filterUsers(users: User9[]): User9[]{
    return users.filter((user) => user.age > 18);
}

const adultUsers = filterUsers(allUsers);
console.log(adultUsers);

