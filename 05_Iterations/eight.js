// +++++++++++++++ reduce ++++++++++++++++

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc,currval) => acc + currval,0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2299
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev.",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]

const TotalAmount = shoppingCart.reduce( (acc,currval) => {
    return acc+currval.price
},0)

console.log(TotalAmount.toLocaleString("en-IN"));