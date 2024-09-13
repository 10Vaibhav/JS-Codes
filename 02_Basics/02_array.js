const marvel_heros = ["thor","ironman","spiderman"];

const dc_heros = ["superman","batman","flash"];

// marvel_heros.push(dc_heros); // it gives array in array (it add just like element).

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros);// it combines both array properly.
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros];// it's called spreading(alternative of concat()), more use to.

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);// remove the complexity of array bounds.

// console.log(real_another_array);

console.log(Array.isArray("vaibhav"));// check given input is array or not . 

console.log(Array.from("vaibhav"));// it creates the array.

console.log(Array.from({name:"vaibhav"}));// interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))// it return the array of set of given elements.