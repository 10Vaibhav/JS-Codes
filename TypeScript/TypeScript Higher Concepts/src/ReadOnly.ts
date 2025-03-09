const user = "Vaibhav";

//It gives error because you cannot change the constant value.
// user = "Mahajan";

// but, you can do this with objects and arrays
// here, the reason is  internal elements can change, and typeScript/javaScript don't complain.

const a = [1, 2, 3];

a[0] = 4; // see, you not getting any error here.

// here, you get error because you cannot change the reference of array when it declared as constant.
// a = [2, 33, 45]


const obj = {
    name: "john",
    age: 25,
    country: "USA",
}

// You can't do the following thing, it gives error, i can not reassign the object as whole thing.
// obj = {
//     sdf: "kk"
// }

//but, if you do this no error will occur
obj.name = "Vaibhav"


// But, i want to not change the object/array neither change the internal values. here, readOnly comes.

// readOnly

type User3 = {
    name: string;
    age: string;
}

const user3: Readonly<User3> = {
    name: "Vaibhav",
    age: "20",
}

// now, you are not allow to change the internal values also.(due to readOnly)
// user3.name = "Mahajan"

