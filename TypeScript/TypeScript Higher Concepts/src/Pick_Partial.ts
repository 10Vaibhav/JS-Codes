interface User2 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

// Pick allows you to create a new type by selecting a set of properties (keys) from an existing type(Type).
type UpdateProps = Pick<User2, "name" | "age" | "email" > // it allows to pick properties from interface as well.


// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional){
    // hit the database tp update the user
}

updateUser({
    name:"Vaibhav",
    email:"123@gmail.com"
});

