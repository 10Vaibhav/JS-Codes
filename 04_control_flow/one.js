 // if 

// const isUserLoggedIn = true
// const temeprature = 41

//  if (temeprature < 50){
//     console.log("less than 50");
//  }else{
//     console.log("temperature is greater than 50")
//  }

//  console.log("Executed");
 // <, >, <=, >=, ==, !=, ===, !== 

//  const score = 200

//  if (score > 100){
//     // var is completely global, that's why we avoid it.
//     const power = "fly";
//     console.log(`User Power : ${power}`);
//  }

//  console.log(`User Power : ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// }else if( balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle  = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || LoggedInFromGoogle){
     console.log("User Logged In");
}