const fs = require("fs");

function ReadFileAsync(){

    return new Promise(function(resolve, reject){
        fs.readFile("abc.txt","utf-8", function (err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

ReadFileAsync()
.then(function(data){
    console.log(data);
    console.log("Files has been read");
})
.catch((err)=>{
    console.log(err);
    console.log("Something is wrong")
})