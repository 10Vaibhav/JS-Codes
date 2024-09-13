// switch(key){
//     case value:

//         break;

//     default:

//         break;
// }

const month = 3

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break; // if we comment break and it match the case then it execute all the following except default case.
    case 4:
        console.log("April");
        break; 
    default:
        console.log("default match");
        break;
}
