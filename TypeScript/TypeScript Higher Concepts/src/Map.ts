// Map is a javaScript concept.

type User6 = {
    name: string,
    age: number,
    email: string,
}

const users2 = new Map<string, User6>()

users2.set("ras@qd1", {name: "Ras", age: 30, email: "ras@qd1"});
users2.set("sarah@qd1", {name: "Sarah", age: 32, email: "Sarah@qd1"});


const user5 = users2.get("ras@qd1");
users2.delete("ras@qd1")

console.log(user5);
