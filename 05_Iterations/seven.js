const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNewNums = myNumbers.map( (num)=>{return num+10}) // map function automatically returns the values.

// const myNewNums = myNumbers.map( (num)=>{if(num > 5){
// return num+10}
// })// it returns value for satisfied condition and return undefined for rest elements.

//++++ chanining +++++
const newNums = myNumbers.map( (num) => num*10)
                         .map( (num) => num+1 )
                         .filter( (num) => num>=40)


console.log(newNums);


