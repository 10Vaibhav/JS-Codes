/* Q. Write code that
1.logs hi after 1 second
2.logs hello 3 seconds after step 1
3.logs hello there 5 seconds after step 2
*/

// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("hello");

//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);

function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
