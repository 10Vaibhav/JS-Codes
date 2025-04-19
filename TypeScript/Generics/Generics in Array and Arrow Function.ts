
function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3;
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {

    // do some database operations
    const myIndex = 4;
    return products[myIndex];
}

interface  Database {
    connection: string,
    username: string,
    password: string,
}

function anotherFunction<T, U extends Database>(valueOne: T, valueTwo: U):object {

    return {
            valueOne,
            valueTwo
    }

}

// anotherFunction(3, "4");
anotherFunction(3, { connection: "connection", username: "username", password: "pass" } );
