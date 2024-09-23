const myArr = [];

// DebugPrint(myArr)

// Continious, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

// Packed SMI elements:
const arrTwo = [1, 2, 3, 4, 5];

// Packed Double elements
arrTwo.push(6.0);

// Packed elements
arrTwo.push("7");

// Holey elements
arrTwo[10] = 11;

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// if hole exists then following checks are runs:

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// hasOwnProperty is very very expensive property in JS.

// if array is continious then all things going smoothly:
const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// Optimize sequence DEC.:
// continious: SMI > Double > Packed
// Hole : H_SMI > H_Double > H_Packed

// once downgrade any array then after that  upgrade is almost impossible.

// Bad approach:
const arrFour = new Array(3);
// just 3 holes, HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

// Better approach:
const arrFive = [];
arrFive.push["1"]; // Packed_Elements
arrFive.push["2"]; // Packed_Elements
arrFive.push["3"]; // Packed_Elements


const arrSix = [1,2,3,4,5]
arrSix.push(NaN) // Packed_double
arrSix.push(Infinity) // Packed_double

// for, for-of, forEach


// Summary:

// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

// 1. Holey Array: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// 2. Continuous Array: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.
