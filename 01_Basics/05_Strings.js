const name = "vaibhav"
const repoCount = 50

// console.log(name + repoCount + " Value"); -- outdated.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vaibhav-M-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "  vaibhav   "

console.log(newString1)
console.log(newString1.trim()) // trim start and end is also present . 

const url = "https://vaibhav.com/vaibhav%100Mahajan"

console.log(url.replace('%100','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))