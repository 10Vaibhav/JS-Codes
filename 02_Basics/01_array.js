// array 
// it is a object.
// array in javascript is resizeable.
// array element cannot be accessing using arbitary strings as indexes.
// when we perform copy operation on array in JS it's create a shallow copies.
// -> shallow copy of an object is a copy whose properties share the same references(point to the same underlying values.)
//-> Deep copy of an object is a copy whose properties do not share the same references.

const myArr = [0, 1, 2, 3, 4, 5, true, "vaibhav"];
// console.log(typeof myArr);

const myHeros = ["shaktiman","nagragj"]

const myArr2 = new Array(0,1,2,3,4,5);
// console.log(myArr2[0]);

// Array Methods: 

// myArr2.push(6);
// myArr2.push(7);
// myArr2.pop();

// myArr2.unshift(9); // insert value at start, so it's shift all element in array

//myArr2.shift(); // it remove start element from the array 

// console.log(myArr2.includes(9)); // it's give boolean value.

// console.log(myArr2.indexOf(19)); // it's return index if exists else return -1.

const newArr = myArr2.join() // it binds the array elements and convert it into string

// console.log(typeof newArr);

// console.log(myArr2);
// console.log(newArr);

//++++++++++ slice, splice +++++++++ 

console.log("A ",myArr2);

const myn1 = myArr2.slice(1,3); // it not include end , and not the change the original array .

console.log(myn1);
console.log("B ",myArr2);


const myn2 = myArr2.splice(1,3);// it include end, but change the original array by removeing elements(who consider while splicing).

console.log(myn2);
console.log("C ",myArr2);

