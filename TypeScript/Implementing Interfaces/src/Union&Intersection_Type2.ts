type GoodUser = {
    name: string;
    gift: string;
}

type BadUser = {
    name: string;
    ip: string;
}

type User5 = GoodUser | BadUser;

const user5: User5 = {
    name: "Vaibhav",
    gift: "123",
    ip: "avs", // you can have all things also
}
