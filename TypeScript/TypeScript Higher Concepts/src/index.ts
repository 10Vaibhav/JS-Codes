interface User{
    name: string;
    age: number;
};

function sumOfAge(user1: User, user2:User){
    return user1.age + user2.age;
}

const age = sumOfAge({name:"taro", age: 20}, {name:"Jro", age:30})

console.log(age);
