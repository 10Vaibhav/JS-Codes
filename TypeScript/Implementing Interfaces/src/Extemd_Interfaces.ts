interface User11 {
    name: string;
}

interface Admin extends User11 {
    age: number // one interface can extend another interface.
}

