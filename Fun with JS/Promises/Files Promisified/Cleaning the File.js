const fs = require("fs");

function cleanFilePromisified(){

    return new Promise((resolve,reject) =>{

        fs.writeFile("a.txt","",function (err){
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    })
}

function cleanDone(){
    console.log("File cleaning is done");
}

cleanFilePromisified()
.then(cleanDone)
.catch((err) =>{
    console.log("something is wrong");
})

console.log("Done");