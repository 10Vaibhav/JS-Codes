// Dates 
// Months started from zero in JS.

let myDate = new Date(); // object creation Date is a object .
// console.log(myDate);


// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());

// console.log(myDate.getHours()); // it's gives universal hour 
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

// console.log(myDate.getMonth());
// console.log(myDate.getTime());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(myDate.valueOf());

// below logs gives me undefined.
// console.log(myDate.Date);
// console.log(myDate.console);
// console.log(myDate.log);
// console.log(myDate.myDate);


// console.log(myDate.toString());// time is universal 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);// it gives object .

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2003,11,2,5,3);
// let myCreatedDate = new Date("2024-01-26");
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-26-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// millisecond to second conversion. 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

// String interpolation => `${} blass blaas blaa`

// console.log(`current Day number is ${newDate.getDay()} and date is ${newDate.toLocaleDateString()}.`)


// for customization: 
let updated = newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(updated);