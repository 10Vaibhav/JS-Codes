//following is promised based approach:

//it returns an object of the promise class.

//setTimeout promisified:

// simple one :
/*function setTimeoutPromisified(ms){
    let p =  new Promise (resolve => setTimeout(resolve,ms));
    return p;
}

function callback(){
    console.log("3 seconds have passed.");
}

// setTimeoutPromisified(3000).then(callback); // syntactically cleaner

let p = setTimeoutPromisified(500);
p.then(callback)
*/

function step1() {
  console.log("hi");
}

function step2() {
  console.log("hello");
}

function step3() {
  console.log("hello there");
}

function promisified(data, delay) {
  let p = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        data();
        resolve();
      }, delay);
    } catch (err) {
      reject(err);
    }
  });

  return p;
}

promisified(step1, 1000)
  .then(() => promisified(step2, 3000))
  .then(() => promisified(step3, 5000))
  .catch((err) => {
    console.log(err);
  });

/*

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });


*/
