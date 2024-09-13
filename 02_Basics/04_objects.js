// const tinderUser = new Object() // SingleTon Object.
const tinderUser = {}; // Non-SingleTon Object.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Vaibhav",
            lastname : "Mahajan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2};
// const obj4 = Object.assign({},obj1,obj2,obj3); // Object combine

const obj4 = {...obj1, ... obj2}; // Spreading and then combining.
// console.log(obj4);


// type of data come from database.
const users = [
     {
       id : 1,
        email: "h@gamil.com"
     },
     {
        id : 12,
         email: "h@gamil.com"
     },
     {
         id : 1232,
         email: "h@gamil.com"
     }
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it return array of keys.

// console.log(Object.values(tinderUser)); // it return array of values.

// console.log(Object.entries(tinderUser)); // it return array of array of objects-attribute(keypair).

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it return true if exists.


// De-Structuring of Objects.
const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course // directly accessing the attribute value from object. 

const {courseInstructor: instructor } = course // accessing the attribute value and give that to variable.

// console.log(instructor);
// console.log(course.courseInstructor);


// Following is the example that how we use De-structuring in React.

// const navbar = ({company}) => {
// }
// navbar(company = "Hitesh")


// JSON Object structure. -> here key and value both are string.

// {
//     "name":"vaibhav",
//     "coursename" :"js in hindi",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]
