// let myName = "vaibhav    "
// let master = "chai         "

// console.log(myName.trueLength);
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.vaibhav = function () {
  console.log(`Vaibhav is Present in all objects`);
};

Array.prototype.heyVaibhav = function () {
  console.log(`Vaibhav says hello`);
};

// heroPower.vaibhav()
// myHeros.vaibhav()
// myHeros.heyVaibhav()
// heroPower.heyVaibhav()

// Inheritance

const user = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makevideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,

  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// modern syntax
// Prototype chaining is a feature in JavaScript that allows objects to inherit properties and methods from other objects.
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"vaibhav".trueLength();
"iceTea".trueLength();
