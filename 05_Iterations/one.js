// for 
let array = [10,20,30]


for(let i = 0; i < array.length; i++){
     const element = array[i];  
     if (element == 20){
        // console.log("20 is best number.")
     } 
    //  console.log(element);
}

// console.log(element);

for(let i=1; i<=10; i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j=1; j<=10; j++){
        // console.log(`Inner loop value: ${j} and outter loop: ${i}`);
        // console.log(i + "*" + j + " = " + i*j);

    }
}

let myArray = ["flash","batman","superman"];

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    // console.log(element);
}


// break and continue 

for(let index = 1 ; index <=20; index++){   
    if(index == 5){
        console.log("Detected 5");
        // break;
        continue;
    }
    console.log(`value of i is ${index}`);
}



