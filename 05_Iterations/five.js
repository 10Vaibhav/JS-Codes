const coding = ["js", "ruby", "java", "python", "cpp"]

// console.log(coding)

// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach( (item) =>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach(  (item, index, arr)=>{
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "cpp",
        languageFileName : "cpp"
    }
]

myCoding.forEach( (item) =>
{
    console.log(item.languageName)
})
